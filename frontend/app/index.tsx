import {
    FlatList,
    Pressable,
    Text,
    View,
} from 'react-native';
import { Stack, router } from 'expo-router';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useEffect, useState } from 'react';
import Animated, { FadeInDown } from 'react-native-reanimated';
import { Plus } from 'lucide-react-native';
import Loader from '../components/loader';
import ModalCrearSucursal from '../components/modalCrearSucursal';
import API_URL from '../services/apis';

type Sucursal = {
    id: string;
    nombre: string;
    direccion: string;
};

export default function SeleccionarSucursalScreen() {
    const [sucursales, setSucursales] = useState<Sucursal[]>([]);
    const [cargando, setCargando] = useState(true);
    const [actualizando, setActualizando] = useState(false);
    const [animacionKey, setAnimacionKey] = useState(0);
    const [mostrarModal, setMostrarModal] = useState(false);

    useEffect(() => {
        obtenerSucursales();
    }, []);

    const obtenerSucursales = async (refresh = false) => {
        if (refresh) {
            setActualizando(true);
        } else {
            setCargando(true);
        }

        try {
            const response = await fetch(`${API_URL}/sucursales`);

            if (!response.ok) {
                throw new Error('Error al obtener las sucursales');
            }

            const data: Sucursal[] = await response.json();

            setSucursales(data);

            if (refresh) {
                setAnimacionKey((prev) => prev + 1);
            }
        } catch (error) {
            console.error('Error cargando sucursales:', error);
        } finally {
            if (refresh) {
                setActualizando(false);
            } else {
                setCargando(false);
            }
        }
    };

    const seleccionarSucursal = (sucursal: Sucursal) => {
        router.replace({
            pathname: '/(tabs)/home',
            params: {
                sucursalId: sucursal.id,
                sucursalNombre: sucursal.nombre,
            },
        });
    };

    const irACrearSucursal = () => {
        console.log('Crear sucursal');
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

                {/* Header */}
                <View className="rounded-b-[40px] bg-[#e57d90]">
                    <SafeAreaView edges={['top']}>
                        <View className="h-[120px] items-center justify-center">
                            <Text className="text-[30px] font-bold tracking-wide text-white">
                                TienditApp
                            </Text>
                        </View>
                    </SafeAreaView>
                </View>

                {/* Contenido */}
                <SafeAreaView
                    className="flex-1"
                    edges={['left', 'right', 'bottom']}
                >
                    <View className="flex-1 px-5 pt-8">

                        {/* Título */}
                        <View className="mb-7">
                            <Text className="text-[22px] font-bold text-[#2D2D32]">
                                Selecciona una sucursal
                            </Text>

                            <Text className="mt-2 text-[15px] leading-[22px] text-[#a15f6d]">
                                Elige dónde deseas registrar tus ventas.
                            </Text>
                        </View>

                        {/* Sucursales */}
                        {cargando ? (
                            <Loader />
                        ) : (
                            <FlatList
                                data={sucursales}
                                keyExtractor={(item) => item.id}
                                showsVerticalScrollIndicator={false}

                                refreshing={actualizando}
                                onRefresh={() => {
                                    console.log('🔄 REFRESH');
                                    obtenerSucursales(true);
                                }}
                                bounces={true}
                                alwaysBounceVertical={true}
                                contentContainerStyle={{
                                    paddingBottom: 100,
                                    flexGrow: 1,
                                }}

                                renderItem={({ item, index }) => (
                                    <Animated.View
                                        key={`${item.id}-${animacionKey}`}
                                        entering={FadeInDown
                                            .delay(index * 120)
                                            .duration(300)}
                                    >
                                        <Pressable
                                            onPress={() =>
                                                seleccionarSucursal(item)
                                            }
                                            className="mb-4 flex-row items-center rounded-[20px] border border-[#fdb4bf] bg-white px-4 py-4 active:bg-[#fff0f2]"
                                            style={{
                                                shadowColor: '#e57d90',
                                                shadowOpacity: 0.12,
                                                shadowRadius: 8,
                                                shadowOffset: {
                                                    width: 0,
                                                    height: 3,
                                                },
                                                elevation: 2,
                                            }}
                                        >
                                            {/* Icono */}
                                            <View className="mr-4 h-12 w-12 items-center justify-center rounded-2xl bg-[#f1889b]">
                                                <Text className="text-[21px] font-bold text-white">
                                                    {item.nombre.charAt(0)}
                                                </Text>
                                            </View>

                                            {/* Información */}
                                            <View className="flex-1">
                                                <Text className="text-[17px] font-bold text-[#2D2D32]">
                                                    {item.nombre}
                                                </Text>

                                                <Text className="mt-1 text-[14px] text-[#a15f6d]">
                                                    {item.direccion ??
                                                        'Sin dirección registrada'}
                                                </Text>
                                            </View>

                                            {/* Flecha */}
                                            <View className="ml-3 h-9 w-9 items-center justify-center rounded-full">
                                                <Text
                                                    className="text-[24px] font-medium text-[#e57d90]"
                                                    style={{
                                                        lineHeight: 26,
                                                        textAlign: 'center',
                                                    }}
                                                >
                                                    ›
                                                </Text>
                                            </View>
                                        </Pressable>
                                    </Animated.View>
                                )}
                            />
                        )}

                    </View>

                    {/* Botón flotante: agregar sucursal */}
                    <Pressable
                        onPress={() => setMostrarModal(true)}
                        hitSlop={8}
                        className="absolute bottom-6 right-6 h-16 w-16 items-center justify-center rounded-full bg-[#e57d90] active:bg-[#d16a7d]"
                        style={{
                            shadowColor: '#e57d90',
                            shadowOpacity: 0.35,
                            shadowRadius: 12,
                            shadowOffset: { width: 0, height: 6 },
                            elevation: 6,
                        }}
                    >
                        <Plus color="#ffffff" size={28} strokeWidth={2.5} />
                    </Pressable>
                </SafeAreaView>

                <ModalCrearSucursal
                    visible={mostrarModal}
                    onClose={() => setMostrarModal(false)}
                    onCreada={() => obtenerSucursales(true)}
                />

            </View>
        </>
    );
}