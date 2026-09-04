import {
  ScrollView,
  Pressable,
  Text,
  View,
  ActivityIndicator,
  RefreshControl,
} from 'react-native';
import { Stack, useLocalSearchParams, router } from 'expo-router';
import { useFocusEffect } from '@react-navigation/native';
import { SafeAreaView } from 'react-native-safe-area-context';
import {
  ArrowLeft,
  ShoppingCart,
  Boxes,
  History,
  ChevronRight,
  Wallet, TrendingUp, ArrowLeftRight
} from 'lucide-react-native';
import { useCallback, useState } from 'react';
import API_URL from '../../services/apis';

// =========================
// TIPOS
// =========================

type TipoMovimiento = 'ENTRADA' | 'SALIDA' | 'AJUSTE';

type DashboardData = {
  resumen: {
    ventas: number;
    utilidad: number;
    movimientos: number;
  };

  stockBajo: {
    id: string;
    productoId: string;
    nombre: string;
    cantidad: number;
    stockMinimo: number;
  }[];

  movimientosRecientes: {
    id: string;
    productoId: string;
    producto: string;
    tipo: TipoMovimiento;
    cantidad: number;
    usuario: string;
    createdAt: string;
    totalVenta: number;
    utilidad: number;
  }[];
};

// =========================
// OPCIONES
// =========================

const accesoPrincipal = {
  id: '1',
  titulo: 'Nueva venta',
  subtitulo: 'Registra una venta al instante',
  ruta: '/venta/nueva',
  icono: ShoppingCart,
};

const accesosSecundarios = [
  {
    id: '3',
    titulo: 'Ver inventario',
    ruta: '/inventario',
    icono: Boxes,
  },
  {
    id: '4',
    titulo: 'Historial',
    ruta: '/historial/historial',
    icono: History,
  },
];

const tipoConfig = {
  ENTRADA: {
    color: '#4CAF7D',
    signo: '+',
    etiqueta: 'Entrada',
  },
  SALIDA: {
    color: '#e57d90',
    signo: '-',
    etiqueta: 'Salida',
  },
  AJUSTE: {
    color: '#e8a33d',
    signo: '',
    etiqueta: 'Ajuste',
  },
};

function formatoPesos(valor: number) {
  return `$${valor.toLocaleString('es-CO')}`;
}

// =========================
// FORMATEAR FECHA
// =========================

function formatoHora(fecha: string) {
  const date = new Date(fecha);

  return date.toLocaleTimeString('es-CO', {
    hour: 'numeric',
    minute: '2-digit',
    hour12: true,
  });
}

// =========================
// SALIR DE SUCURSAL
// =========================

const salirDeSucursal = () => {
  router.replace('/');
};

// =========================
// HOME
// =========================

export default function HomeScreen() {
  const { sucursalId, sucursalNombre } = useLocalSearchParams<{
    sucursalId: string;
    sucursalNombre: string;
  }>();

  const [dashboard, setDashboard] = useState<DashboardData | null>(null);
  const [cargando, setCargando] = useState(true);
  const [refrescando, setRefrescando] = useState(false);
  const [error, setError] = useState(false);

  // =========================
  // CARGAR DASHBOARD
  // =========================

  useFocusEffect(
    useCallback(() => {
      if (!sucursalId) {
        return;
      }

      cargarDashboard();
    }, [sucursalId]),
  );

  const cargarDashboard = async (refrescar = false) => {
    try {
      if (refrescar) {
        setRefrescando(true);
      } else {
        setCargando(true);
      }
      setError(false);

      console.log('Cargando dashboard...');

      const response = await fetch(
        `${API_URL}/dashboard/${sucursalId}`,
      );

      if (!response.ok) {
        console.log(
          'Error cargando dashboard:',
          response.status,
        );

        setError(true);
        return;
      }

      const data: DashboardData = await response.json();

      console.log('Dashboard cargado correctamente');

      setDashboard(data);
    } catch (error) {
      console.log('Error conectando con el dashboard:', error);

      setError(true);
    } finally {
      setCargando(false);
      setRefrescando(false);
    }
  };

  // =========================
  // LOADING
  // =========================

  if (cargando) {
    return (
      <>
        <Stack.Screen
          options={{
            headerShown: false,
            statusBarColor: '#e57d90',
            statusBarStyle: 'light',
          }}
        />

        <View className="flex-1 items-center justify-center bg-[#fff7f8]">
          <ActivityIndicator
            size="large"
            color="#e57d90"
          />

          <Text className="mt-3 text-[14px] text-[#a15f6d]">
            Cargando dashboard...
          </Text>
        </View>
      </>
    );
  }

  // =========================
  // ERROR
  // =========================

  if (error || !dashboard) {
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
          <View className="rounded-b-[28px] bg-[#e57d90]">
            <SafeAreaView edges={['top']}>
              <View className="h-[80px] items-center justify-center">
                <Pressable
                  onPress={salirDeSucursal}
                  hitSlop={12}
                  className="absolute left-4 top-1/2 -mt-4 h-8 w-8 items-center justify-center rounded-full active:bg-white/15"
                >
                  <ArrowLeft
                    color="#ffffff"
                    size={22}
                  />
                </Pressable>

                <Text className="mt-1 text-[24px] font-bold text-white">
                  {sucursalNombre ?? 'Mi tienda'}
                </Text>
              </View>
            </SafeAreaView>
          </View>

          <View className="flex-1 items-center justify-center px-8">
            <Text className="text-center text-[16px] font-bold text-[#2D2D32]">
              No se pudo cargar el dashboard
            </Text>

            <Text className="mt-2 text-center text-[13px] text-[#a15f6d]">
              Verifica la conexión con el servidor e intenta nuevamente.
            </Text>

            <Pressable
              onPress={cargarDashboard}
              className="mt-5 rounded-[16px] bg-[#e57d90] px-6 py-3"
            >
              <Text className="font-bold text-white">
                Intentar nuevamente
              </Text>
            </Pressable>
          </View>
        </View>
      </>
    );
  }

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

        {/* Header */}
        <View className="rounded-b-[28px] bg-[#e57d90]">
          <SafeAreaView edges={['top']}>
            <View className="h-[80px] items-center justify-center">

              {/* Botón atrás */}
              <Pressable
                onPress={salirDeSucursal}
                hitSlop={12}
                className="absolute left-4 top-1/2 -mt-4 h-8 w-8 items-center justify-center rounded-full active:bg-white/15"
              >
                <ArrowLeft
                  color="#ffffff"
                  size={22}
                />
              </Pressable>

              <Text className="mt-1 text-[24px] font-bold text-white">
                {sucursalNombre ?? 'Mi tienda'}
              </Text>
            </View>
          </SafeAreaView>
        </View>

        <ScrollView
          className="flex-1"
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{
            padding: 20,
            paddingBottom: 40,
          }}
          refreshControl={
            <RefreshControl
              refreshing={refrescando}
              onRefresh={() => cargarDashboard(true)}
              tintColor="#e57d90"
              colors={['#e57d90']}
            />
          }
        >

          {/* =========================
              RESUMEN
          ========================= */}
          <View className="-mt-1 mb-7 flex-row gap-3">

            {/* Ventas */}
            <View
              className="flex-1 rounded-[20px] bg-white px-4 py-4"
              style={{
                borderWidth: 1,
                borderColor: '#ffe3e8',
                shadowColor: '#e57d90',
                shadowOpacity: 0.08,
                shadowRadius: 8,
                shadowOffset: { width: 0, height: 3 },
                elevation: 2,
              }}
            >
              <View className="mb-3 h-8 w-8 items-center justify-center rounded-full bg-[#ffcdd4]">
                <Wallet color="#e57d90" size={16} />
              </View>

              <Text className="text-[11px] font-medium text-[#a15f6d]">
                Ventas del mes
              </Text>

              <Text
                className="mt-1 font-bold text-[#2D2D32]"
                numberOfLines={1}
                adjustsFontSizeToFit
                style={{ fontSize: 17 }}
              >
                {formatoPesos(dashboard.resumen.ventas)}
              </Text>
            </View>

            {/* Utilidad */}
            <View
              className="flex-1 rounded-[20px] bg-white px-4 py-4"
              style={{
                borderWidth: 1,
                borderColor: '#dcf3e6',
                shadowColor: '#4CAF7D',
                shadowOpacity: 0.08,
                shadowRadius: 8,
                shadowOffset: { width: 0, height: 3 },
                elevation: 2,
              }}
            >
              <View className="mb-3 h-8 w-8 items-center justify-center rounded-full bg-[#dcf3e6]">
                <TrendingUp color="#4CAF7D" size={16} />
              </View>

              <Text className="text-[11px] font-medium text-[#a15f6d]">
                Utilidad
              </Text>

              <Text
                className="mt-1 font-bold text-[#4CAF7D]"
                numberOfLines={1}
                adjustsFontSizeToFit
                style={{ fontSize: 17 }}
              >
                {formatoPesos(dashboard.resumen.utilidad)}
              </Text>
            </View>

            {/* Movimientos */}
            <View
              className="flex-1 rounded-[20px] bg-white px-4 py-4"
              style={{
                borderWidth: 1,
                borderColor: '#fdecd2',
                shadowColor: '#e8a33d',
                shadowOpacity: 0.08,
                shadowRadius: 8,
                shadowOffset: { width: 0, height: 3 },
                elevation: 2,
              }}
            >
              <View className="mb-3 h-8 w-8 items-center justify-center rounded-full bg-[#fdecd2]">
                <ArrowLeftRight color="#e8a33d" size={16} />
              </View>

              <Text className="text-[11px] font-medium text-[#a15f6d]">
                Movimientos
              </Text>

              <Text className="mt-1 text-[17px] font-bold text-[#2D2D32]">
                {dashboard.resumen.movimientos}
              </Text>
            </View>

          </View>

          {/* =========================
              OPCIONES
          ========================= */}

          <View className="mb-8">

            <Text className="mb-3 text-[16px] font-bold text-[#2D2D32]">
              Opciones
            </Text>

            {/* Nueva venta */}
            <Pressable
              onPress={() => {
                router.push({
                  pathname: '/venta/nueva',
                  params: {
                    sucursalId,
                    sucursalNombre,
                  },
                });
              }}
              className="mb-3 flex-row items-center rounded-[18px] bg-[#e57d90] px-5 py-4 active:bg-[#d16a7d]"
              style={{
                shadowColor: '#e57d90',
                shadowOpacity: 0.3,
                shadowRadius: 10,
                shadowOffset: {
                  width: 0,
                  height: 4,
                },
                elevation: 3,
              }}
            >
              <View className="mr-4 h-11 w-11 items-center justify-center rounded-2xl bg-white/20">
                <ShoppingCart
                  color="#ffffff"
                  size={22}
                />
              </View>

              <View className="flex-1">
                <Text className="text-[16px] font-bold text-white">
                  Nueva venta
                </Text>

                <Text className="mt-0.5 text-[12px] text-white/80">
                  Registra una venta al instante
                </Text>
              </View>

              <ChevronRight
                color="#ffffff"
                size={20}
              />
            </Pressable>

            {/* Botones secundarios */}
            <View className="gap-3">

              {accesosSecundarios.map((item) => (
                <Pressable
                  key={item.id}
                  onPress={() => {
                    if (item.titulo === 'Ver inventario') {
                      router.push({
                        pathname: '/(tabs)/inventario',
                        params: {
                          sucursalId,
                          sucursalNombre,
                        },
                      });
                    } else {
                      router.push(item.ruta);
                    }
                  }}
                  className="flex-row items-center rounded-[18px] border border-[#fdb4bf] bg-white px-5 py-3.5 active:bg-[#fff0f2]"
                >
                  <View className="mr-4 h-10 w-10 items-center justify-center rounded-xl bg-[#ffcdd4]">
                    <item.icono
                      color="#e57d90"
                      size={19}
                    />
                  </View>

                  <Text className="flex-1 text-[15px] font-semibold text-[#2D2D32]">
                    {item.titulo}
                  </Text>

                  <ChevronRight
                    color="#c59aa3"
                    size={18}
                  />
                </Pressable>
              ))}

            </View>
          </View>

          {/* =========================
              STOCK BAJO
          ========================= */}

          <View className="mb-8">

            <View className="mb-3 flex-row items-center justify-between">

              <Text className="text-[16px] font-bold text-[#2D2D32]">
                Stock bajo
              </Text>

              <View className="rounded-full bg-[#e8a33d] px-2.5 py-0.5">
                <Text className="text-[12px] font-bold text-white">
                  {dashboard.stockBajo.length}
                </Text>
              </View>

            </View>

            <View
              className="rounded-[18px] bg-white px-4 py-2"
              style={{
                borderWidth: 1.5,
                borderStyle: 'dashed',
                borderColor: '#f99aaa',
              }}
            >

              {dashboard.stockBajo.length === 0 ? (

                <View className="items-center py-5">
                  <Text className="text-[13px] text-[#a15f6d]">
                    No hay productos con stock bajo
                  </Text>
                </View>

              ) : (

                dashboard.stockBajo.map((producto, index) => (
                  <View
                    key={producto.id}
                    className={`flex-row items-center justify-between py-3 ${index !== dashboard.stockBajo.length - 1
                      ? 'border-b border-[#ffe3e8]'
                      : ''
                      }`}
                  >
                    <View className="flex-1 pr-3">

                      <Text className="text-[14px] font-semibold text-[#2D2D32]">
                        {producto.nombre}
                      </Text>

                      <Text className="mt-0.5 text-[12px] text-[#a15f6d]">
                        Mínimo: {producto.stockMinimo} unid.
                      </Text>

                    </View>

                    <View className="rounded-full bg-[#fff0f2] px-3 py-1">
                      <Text className="text-[13px] font-bold text-[#e57d90]">
                        {producto.cantidad} und
                      </Text>
                    </View>

                  </View>
                ))

              )}

            </View>
          </View>

          {/* =========================
              ACTIVIDAD RECIENTE
          ========================= */}

          <View>

            <View className="mb-3 flex-row items-center justify-between">

              <Text className="text-[16px] font-bold text-[#2D2D32]">
                Actividad reciente
              </Text>

            </View>

            <View className="rounded-[18px] bg-white px-4">

              {dashboard.movimientosRecientes.length === 0 ? (

                <View className="items-center py-5">
                  <Text className="text-[13px] text-[#a15f6d]">
                    No hay movimientos recientes
                  </Text>
                </View>

              ) : (

                dashboard.movimientosRecientes.map(
                  (mov, index) => {

                    const config = tipoConfig[mov.tipo];

                    return (
                      <View
                        key={mov.id}
                        className={`flex-row items-center py-3 ${index !==
                          dashboard.movimientosRecientes.length - 1
                          ? 'border-b border-[#fdb4bf]/30'
                          : ''
                          }`}
                      >

                        <View
                          className="mr-3 h-2.5 w-2.5 rounded-full"
                          style={{
                            backgroundColor: config.color,
                          }}
                        />

                        <View className="flex-1">

                          <Text className="text-[14px] font-semibold text-[#2D2D32]">
                            {mov.producto}
                          </Text>

                          <Text className="mt-0.5 text-[12px] text-[#a15f6d]">
                            {config.etiqueta} ·{' '}
                            {formatoHora(mov.createdAt)} ·{' '}
                            {mov.usuario}
                          </Text>

                        </View>

                        <Text
                          className="text-[14px] font-bold"
                          style={{
                            color: config.color,
                          }}
                        >
                          {config.signo}
                          {Math.abs(mov.cantidad)}
                        </Text>

                      </View>
                    );
                  },
                )

              )}

            </View>
          </View>

        </ScrollView>
      </View>
    </>
  );
}