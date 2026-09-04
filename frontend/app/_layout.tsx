import '../global.css';
import {
  DarkTheme,
  DefaultTheme,
  ThemeProvider,
} from '@react-navigation/native';
import { Stack, router } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import 'react-native-reanimated';
import { useEffect } from 'react';
import { View, ActivityIndicator } from 'react-native';

import { useColorScheme } from '@/hooks/use-color-scheme';
import { AuthProvider, useAuth } from '../context/AuthContext';

// =========================
// COMPONENTE INTERNO
// Maneja la lógica de redirección según el estado de auth
// =========================

function RootLayoutNav() {
  const colorScheme = useColorScheme();
  const { usuario, isLoading } = useAuth();

  useEffect(() => {
    if (isLoading) return;

    // Este efecto corre UNA SOLA VEZ cuando termina la verificación
    // de sesión al arrancar la app. No depende de `usuario` para evitar
    // la condición de carrera entre setUsuario y setIsLoading.
    if (usuario) {
      router.replace('/');
    } else {
      router.replace('/login');
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isLoading]);

  // Mientras se verifica la sesión mostramos un splash simple
  if (isLoading) {
    return (
      <View
        style={{
          flex: 1,
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: '#fff7f8',
        }}
      >
        <ActivityIndicator color="#e57d90" size="large" />
      </View>
    );
  }

  return (
    <ThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
      <Stack>
        <Stack.Screen
          name="login"
          options={{
            headerShown: false,
          }}
        />

        <Stack.Screen
          name="index"
          options={{
            headerShown: false,
          }}
        />

        <Stack.Screen
          name="(tabs)"
          options={{
            headerShown: false,
          }}
        />

        <Stack.Screen
          name="modal"
          options={{
            presentation: 'modal',
            title: 'Modal',
          }}
        />
      </Stack>

      <StatusBar style="auto" />
    </ThemeProvider>
  );
}

// =========================
// ROOT LAYOUT
// =========================

export default function RootLayout() {
  return (
    <AuthProvider>
      <RootLayoutNav />
    </AuthProvider>
  );
}