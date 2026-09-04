import React, { createContext, useContext, useEffect, useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { router } from 'expo-router';
import API_URL from '../services/apis';

// =========================
// TIPOS
// =========================

type UsuarioAutenticado = {
  id: string;
  nombre: string;
  email: string;
  rol: string;
};

type AuthContextType = {
  usuario: UsuarioAutenticado | null;
  token: string | null;
  isLoading: boolean;
  login: (email: string, password: string) => Promise<void>;
  logout: () => Promise<void>;
};

// =========================
// CONTEXT
// =========================

const AuthContext = createContext<AuthContextType | null>(null);

const TOKEN_KEY = '@tienditapp_token';
const USUARIO_KEY = '@tienditapp_usuario';

// =========================
// PROVIDER
// =========================

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [usuario, setUsuario] = useState<UsuarioAutenticado | null>(null);
  const [token, setToken] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  // Al arrancar, verificar si hay sesión guardada
  useEffect(() => {
    verificarSesion();
  }, []);

  const verificarSesion = async () => {
    try {
      const [tokenGuardado, usuarioGuardado] = await Promise.all([
        AsyncStorage.getItem(TOKEN_KEY),
        AsyncStorage.getItem(USUARIO_KEY),
      ]);

      if (tokenGuardado && usuarioGuardado) {
        setToken(tokenGuardado);
        setUsuario(JSON.parse(usuarioGuardado));
      }
    } catch (error) {
      console.error('Error verificando sesión:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const login = async (email: string, password: string) => {
    const response = await fetch(`${API_URL}/auth/login`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email, password }),
    });

    if (!response.ok) {
      const error = await response.json().catch(() => ({}));
      throw new Error(error?.message ?? 'Credenciales incorrectas');
    }

    const data: { access_token: string; usuario: UsuarioAutenticado } =
      await response.json();

    // Guardar en AsyncStorage
    await Promise.all([
      AsyncStorage.setItem(TOKEN_KEY, data.access_token),
      AsyncStorage.setItem(USUARIO_KEY, JSON.stringify(data.usuario)),
    ]);

    setToken(data.access_token);
    setUsuario(data.usuario);
  };

  const logout = async () => {
    await Promise.all([
      AsyncStorage.removeItem(TOKEN_KEY),
      AsyncStorage.removeItem(USUARIO_KEY),
    ]);

    setToken(null);
    setUsuario(null);

    router.replace('/login');
  };

  return (
    <AuthContext.Provider value={{ usuario, token, isLoading, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

// =========================
// HOOK
// =========================

export function useAuth() {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth debe usarse dentro de AuthProvider');
  }
  return context;
}
