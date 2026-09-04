import {
  View,
  Text,
  TextInput,
  Pressable,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  ActivityIndicator,
  Alert,
} from 'react-native';
import { Stack, router } from 'expo-router';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useState } from 'react';
import Animated, { FadeInDown, FadeInUp } from 'react-native-reanimated';
import {
  Eye,
  EyeOff,
  Lock,
  Mail,
  ShoppingBag,
} from 'lucide-react-native';
import { useAuth } from '../context/AuthContext';

export default function LoginScreen() {
  const { login } = useAuth();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [mostrarPassword, setMostrarPassword] = useState(false);
  const [cargando, setCargando] = useState(false);
  const [errorEmail, setErrorEmail] = useState('');
  const [errorPassword, setErrorPassword] = useState('');

  const validar = () => {
    let valido = true;

    setErrorEmail('');
    setErrorPassword('');

    if (!email.trim()) {
      setErrorEmail('Ingresa tu correo electrónico');
      valido = false;
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setErrorEmail('Correo electrónico inválido');
      valido = false;
    }

    if (!password.trim()) {
      setErrorPassword('Ingresa tu contraseña');
      valido = false;
    }

    return valido;
  };

  const handleLogin = async () => {
    if (!validar()) return;

    setCargando(true);

    try {
      await login(email.trim(), password);
      router.replace('/');
    } catch (error: any) {
      const mensaje =
        error?.message ?? 'Ocurrió un error. Intenta de nuevo.';

      Alert.alert('Error al iniciar sesión', mensaje);
    } finally {
      setCargando(false);
    }
  };

  return (
    <>
      <Stack.Screen
        options={{
          headerShown: false,
          statusBarColor: '#e57d90',
          statusBarStyle: 'light',
        }}
      />

      <View className="flex-1 bg-[#fff7f8]">

        {/* HEADER */}
        <View className="bg-[#e57d90]">

          <SafeAreaView edges={['top']}>

            <Animated.View
              entering={FadeInUp.duration(500)}
              className="items-center px-6 pb-10 pt-8"
            >

              {/* Logo */}
              <View
                className="mb-5 h-[68px] w-[68px] items-center justify-center rounded-[22px] bg-white/20"
                style={{
                  shadowColor: '#8f4e5b',
                  shadowOpacity: 0.15,
                  shadowRadius: 8,
                  shadowOffset: {
                    width: 0,
                    height: 4,
                  },
                }}
              >
                <ShoppingBag
                  color="#ffffff"
                  size={34}
                  strokeWidth={2}
                />
              </View>

              <Text className="text-[29px] font-extrabold tracking-[0.3px] text-white">
                TienditApp
              </Text>



            </Animated.View>

          </SafeAreaView>
        </View>

        {/* CONTENIDO */}
        <KeyboardAvoidingView
          className="flex-1"
          behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        >

          <ScrollView
            showsVerticalScrollIndicator={false}
            keyboardShouldPersistTaps="handled"
            contentContainerStyle={{
              flexGrow: 1,
              paddingHorizontal: 20,
              paddingTop: 26,
              paddingBottom: 30,
            }}
          >

            <Animated.View
              entering={FadeInDown.delay(150).duration(500)}
              className="flex-1"
            >

              {/* TARJETA LOGIN */}
              <View
                className="rounded-[28px] bg-white px-6 pb-7 pt-7"
                style={{
                  shadowColor: '#e57d90',
                  shadowOpacity: 0.10,
                  shadowRadius: 18,
                  shadowOffset: {
                    width: 0,
                    height: 7,
                  },
                  elevation: 4,
                }}
              >

                {/* Título */}
                <Text className="text-[25px] font-bold text-[#2D2D32]">
                  Bienvenido
                </Text>

                <Text className="mt-2 text-[14px] leading-[21px] text-[#a15f6d]">
                  Ingresa tus datos para continuar
                </Text>

                {/* EMAIL */}
                <View className="mt-7">

                  <Text className="mb-2 text-[13px] font-semibold text-[#2D2D32]">
                    Correo electrónico
                  </Text>

                  <View
                    className={`flex-row items-center rounded-[15px] bg-[#fff7f8] px-4 ${errorEmail
                      ? 'border-[1.5px] border-[#e57d90]'
                      : 'border-[1px] border-[#fdb4bf]'
                      }`}
                  >

                    <Mail
                      color={errorEmail ? '#e57d90' : '#c48a96'}
                      size={19}
                      strokeWidth={2}
                    />

                    <TextInput
                      className="ml-3 flex-1 text-[15px] text-[#2D2D32]"
                      style={{
                        height: 52,
                      }}
                      placeholder="correo@ejemplo.com"
                      placeholderTextColor="#d4a0aa"
                      value={email}
                      onChangeText={(t) => {
                        setEmail(t);
                        setErrorEmail('');
                      }}
                      keyboardType="email-address"
                      autoCapitalize="none"
                      autoCorrect={false}
                      editable={!cargando}
                      testID="input-email"
                    />

                  </View>

                  {!!errorEmail && (
                    <Text className="ml-1 mt-2 text-[12px] text-[#e57d90]">
                      {errorEmail}
                    </Text>
                  )}

                </View>

                {/* PASSWORD */}
                <View className="mt-5">

                  <Text className="mb-2 text-[13px] font-semibold text-[#2D2D32]">
                    Contraseña
                  </Text>

                  <View
                    className={`flex-row items-center rounded-[15px] bg-[#fff7f8] px-4 ${errorPassword
                      ? 'border-[1.5px] border-[#e57d90]'
                      : 'border-[1px] border-[#fdb4bf]'
                      }`}
                  >

                    <Lock
                      color={errorPassword ? '#e57d90' : '#c48a96'}
                      size={19}
                      strokeWidth={2}
                    />

                    <TextInput
                      className="ml-3 flex-1 text-[15px] text-[#2D2D32]"
                      style={{
                        height: 52,
                      }}
                      placeholder="Tu contraseña"
                      placeholderTextColor="#d4a0aa"
                      value={password}
                      onChangeText={(t) => {
                        setPassword(t);
                        setErrorPassword('');
                      }}
                      secureTextEntry={!mostrarPassword}
                      editable={!cargando}
                      testID="input-password"
                    />

                    <Pressable
                      onPress={() =>
                        setMostrarPassword((v) => !v)
                      }
                      hitSlop={10}
                      className="h-10 w-10 items-center justify-center"
                      testID="btn-toggle-password"
                    >
                      {mostrarPassword ? (
                        <EyeOff
                          color="#c48a96"
                          size={19}
                          strokeWidth={2}
                        />
                      ) : (
                        <Eye
                          color="#c48a96"
                          size={19}
                          strokeWidth={2}
                        />
                      )}
                    </Pressable>


                  </View>

                  {!!errorPassword && (
                    <Text className="ml-1 mt-2 text-[12px] text-[#e57d90]">
                      {errorPassword}
                    </Text>
                  )}

                </View>

                {/* BOTÓN */}
                <Pressable
                  onPress={handleLogin}
                  disabled={cargando}
                  testID="btn-login"
                  className="mt-7 h-[55px] items-center justify-center rounded-[16px] bg-[#e57d90]"
                  style={({ pressed }) => ({
                    opacity: cargando ? 0.7 : pressed ? 0.88 : 1,
                    shadowColor: '#e57d90',
                    shadowOpacity: 0.28,
                    shadowRadius: 10,
                    shadowOffset: {
                      width: 0,
                      height: 5,
                    },
                    elevation: 4,
                  })}
                >

                  {cargando ? (
                    <ActivityIndicator
                      color="#ffffff"
                      size="small"
                    />
                  ) : (
                    <Text className="text-[16px] font-bold text-white">
                      Iniciar sesión
                    </Text>
                  )}

                </Pressable>
                {/* Separador */}
                <View className="my-5 flex-row items-center">

                  <View className="h-[1px] flex-1 bg-[#f8e7ea]" />

                  <Text className="mx-4 text-[12px] font-medium text-[#b87e8b]">
                    o continuar con
                  </Text>

                  <View className="h-[1px] flex-1 bg-[#f8e7ea]" />

                </View>

                {/* Google */}
                <Pressable
                  onPress={() => { }}
                  className="h-[54px] flex-row items-center justify-center rounded-[16px] border-[1px] border-[#fdb4bf] bg-white"
                  style={({ pressed }) => ({
                    opacity: pressed ? 0.8 : 1,
                  })}
                >
                  <View className="mr-3 h-6 w-6 items-center justify-center rounded-full">
                    <Text className="text-[20px] font-bold text-[#4285F4]">
                      G
                    </Text>
                  </View>

                  <Text className="text-[15px] font-semibold text-[#2D2D32]">
                    Continuar con Google
                  </Text>
                </Pressable>
              </View>

              {/* FOOTER */}
              <View className="mt-6 items-center">

                <Text className="text-center text-[12px] leading-[19px] text-[#b87e8b]">
                  ¿Necesitas acceso?
                </Text>

                <Text className="mt-1 text-center text-[12px] leading-[19px] text-[#a15f6d]">
                  Contacta al administrador de la tienda.
                </Text>

              </View>

            </Animated.View>

          </ScrollView>

        </KeyboardAvoidingView>

      </View>
    </>
  );
}