import {
    FlatList,
    Pressable,
    Text,
    View,
} from 'react-native';
import { Stack, router, useLocalSearchParams } from 'expo-router';
import { useFocusEffect } from '@react-navigation/native';
import { useCallback, useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import Animated, { FadeInDown } from 'react-native-reanimated';
import {
    ArrowLeft,
    Package,
    TriangleAlert,
    Plus,
} from 'lucide-react-native';
import Loader from '../../components/loader';
import API_URL from '../../services/apis';

type Producto = {
    id: string;
    nombre: string;
    descripcion?: string;
    precioCompra: string;
    precioVenta: string;
    stock: number;
    stockMinimo: number;
};

export default function InventarioScreen() {
    const { sucursalId, sucursalNombre } = useLocalSearchParams<{
        sucursalId: string;
        sucursalNombre: string;
    }>();

    const [productos, setProductos] = useState<Producto[]>([]);
    const [cargando, setCargando] = useState(true);
    const [actualizando, setActualizando] = useState(false);

    useFocusEffect(
        useCallback(() => {
            obtenerProductos();
        }, [sucursalId])
    );

    const obtenerProductos = async (refresh = false) => {
        if (!sucursalId) return;

        if (refresh) {
            setActualizando(true);
        }

        try {
            const response = await fetch(
                `${API_URL}/productos/sucursal/${sucursalId}`
            );

            if (!response.ok) {
                throw new Error('Error al obtener el inventario');
            }

            const data: Producto[] = await response.json();
            setProductos(data);
        } catch (error) {
            console.error('Error cargando inventario:', error);
        } finally {
            setCargando(false);
            setActualizando(false);
        }
    };

    const formatoPrecio = (precio: string) => {
        return `$${Number(precio).toLocaleString('es-CO')}`;
    };

    const irACrearProducto = () => {
        router.push({
            pathname: '/producto/NuevoProducto',
            params: {
                sucursalId,
                sucursalNombre,
            },
        });
    };

    const irADetalleProducto = (producto: Producto) => {
        router.push({
            pathname: '/producto/DetalleProducto',
            params: {
                productoId: producto.id,
                productoNombre: producto.nombre,
                sucursalId,
                sucursalNombre,
                stock: String(producto.stock),
                precioCompra: producto.precioCompra,
                precioVenta: producto.precioVenta,
                stockMinimo: String(producto.stockMinimo),
                descripcion: producto.descripcion ?? '',
            },
        });
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
                        <View className="h-[80px] items-center justify-center">

                            <Pressable
                                onPress={() => router.back()}
                                hitSlop={12}
                                className="absolute left-4 top-1/2 -mt-4 h-8 w-8 items-center justify-center rounded-full active:bg-white/15"
                            >
                                <ArrowLeft color="#ffffff" size={22} />
                            </Pressable>

                            <Text className="mt-1 text-[24px] font-bold text-white">
                                Inventario
                            </Text>
                        </View>
                    </SafeAreaView>
                </View>

                {/* Contenido */}
                <SafeAreaView
                    className="flex-1"
                    edges={['left', 'right', 'bottom']}
                >
                    <View className="flex-1 px-5 pt-7">

                        {/* Título */}
                        <View className="mb-5 flex-row items-center justify-between">
                            <View className="flex-1 pr-3">
                                <Text className="text-[22px] font-bold text-[#2D2D32]">
                                    Productos
                                </Text>

                                <Text className="mt-1 text-[14px] text-[#a15f6d]">
                                    {sucursalNombre
                                        ? `Disponibles en ${sucursalNombre}`
                                        : 'Productos disponibles en esta sucursal'}
                                </Text>
                            </View>

                            {!cargando && (
                                <View className="rounded-full bg-[#ffcdd4] px-3 py-1.5">
                                    <Text className="text-[13px] font-bold text-[#e57d90]">
                                        {productos.length}
                                    </Text>
                                </View>
                            )}
                        </View>

                        {cargando ? (
                            <Loader />
                        ) : (
                            <FlatList
                                data={productos}
                                keyExtractor={(item) => item.id}
                                showsVerticalScrollIndicator={false}

                                refreshing={actualizando}
                                onRefresh={() => obtenerProductos(true)}

                                contentContainerStyle={{
                                    paddingBottom: 110,
                                    flexGrow: productos.length === 0 ? 1 : 0,
                                }}

                                ListEmptyComponent={
                                    <View className="flex-1 items-center justify-center py-20">
                                        <View className="mb-4 h-16 w-16 items-center justify-center rounded-full bg-[#ffcdd4]">
                                            <Package
                                                color="#e57d90"
                                                size={28}
                                            />
                                        </View>

                                        <Text className="text-[18px] font-bold text-[#2D2D32]">
                                            Sin productos
                                        </Text>

                                        <Text className="mt-2 text-center text-[14px] text-[#a15f6d]">
                                            Esta sucursal no tiene productos
                                            registrados.
                                        </Text>
                                    </View>
                                }

                                renderItem={({ item, index }) => {
                                    const stockBajo =
                                        item.stock <= item.stockMinimo;

                                    return (
                                        <Animated.View
                                            entering={FadeInDown
                                                .delay(index * 80)
                                                .duration(300)}
                                        >
                                            <Pressable
                                                onPress={() =>
                                                    irADetalleProducto(item)
                                                }
                                                className="mb-4 overflow-hidden rounded-[22px] bg-white active:opacity-80"
                                                style={{
                                                    shadowColor: '#e57d90',
                                                    shadowOpacity: 0.1,
                                                    shadowRadius: 10,
                                                    shadowOffset: {
                                                        width: 0,
                                                        height: 4,
                                                    },
                                                    elevation: 3,
                                                }}
                                            >
                                                <View className="flex-row">

                                                    {/* Franja lateral de estado */}
                                                    <View
                                                        className="w-1.5"
                                                        style={{
                                                            backgroundColor:
                                                                stockBajo
                                                                    ? '#d9536f'
                                                                    : '#f1889b',
                                                        }}
                                                    />

                                                    <View className="flex-1 px-4 py-4">

                                                        {/* Nombre + ícono + stock */}
                                                        <View className="flex-row items-center justify-between">
                                                            <View className="flex-1 flex-row items-center pr-3">
                                                                <View className="mr-3 h-10 w-10 items-center justify-center rounded-xl bg-[#ffcdd4]">
                                                                    <Package
                                                                        color="#e57d90"
                                                                        size={18}
                                                                    />
                                                                </View>

                                                                <Text
                                                                    className="flex-1 text-[16px] font-bold text-[#2D2D32]"
                                                                    numberOfLines={1}
                                                                >
                                                                    {item.nombre}
                                                                </Text>
                                                            </View>

                                                            <View className="items-end">
                                                                <Text className="text-[10px] font-semibold tracking-wide text-[#a15f6d]">
                                                                    STOCK
                                                                </Text>

                                                                <Text
                                                                    className={`text-[20px] font-bold ${stockBajo
                                                                        ? 'text-[#d9536f]'
                                                                        : 'text-[#e57d90]'
                                                                        }`}
                                                                >
                                                                    {item.stock}
                                                                </Text>
                                                            </View>
                                                        </View>

                                                        {/* Descripción */}
                                                        {item.descripcion && (
                                                            <Text className="mt-2 text-[13px] leading-[18px] text-[#a15f6d]">
                                                                {item.descripcion}
                                                            </Text>
                                                        )}

                                                        {/* Separador */}
                                                        <View className="my-3 h-[1px] bg-[#ffe3e8]" />

                                                        {/* Información */}
                                                        <View className="flex-row justify-between">
                                                            <View>
                                                                <Text className="text-[11px] text-[#a15f6d]">
                                                                    Compra
                                                                </Text>

                                                                <Text className="mt-1 text-[14px] font-semibold text-[#2D2D32]">
                                                                    {formatoPrecio(
                                                                        item.precioCompra
                                                                    )}
                                                                </Text>
                                                            </View>

                                                            <View>
                                                                <Text className="text-[11px] text-[#a15f6d]">
                                                                    Venta
                                                                </Text>

                                                                <Text className="mt-1 text-[14px] font-semibold text-[#2D2D32]">
                                                                    {formatoPrecio(
                                                                        item.precioVenta
                                                                    )}
                                                                </Text>
                                                            </View>

                                                            <View>
                                                                <Text className="text-[11px] text-[#a15f6d]">
                                                                    Mínimo
                                                                </Text>

                                                                <Text className="mt-1 text-[14px] font-semibold text-[#2D2D32]">
                                                                    {item.stockMinimo}
                                                                </Text>
                                                            </View>
                                                        </View>

                                                        {/* Advertencia */}
                                                        {stockBajo && (
                                                            <View className="mt-3 flex-row items-center rounded-xl bg-[#fff0f2] px-3 py-2">
                                                                <TriangleAlert
                                                                    color="#d9536f"
                                                                    size={14}
                                                                />

                                                                <Text className="ml-2 text-[12px] font-semibold text-[#d9536f]">
                                                                    Stock bajo
                                                                </Text>
                                                            </View>
                                                        )}

                                                        {/* Indicador de que se puede tocar */}
                                                        <Text className="mt-3 text-center text-[11px] font-semibold text-[#e57d90]">
                                                            Toca para ver el producto
                                                        </Text>

                                                    </View>
                                                </View>
                                            </Pressable>
                                        </Animated.View>
                                    );
                                }}
                            />
                        )}

                    </View>

                    {/* Botón flotante: agregar producto */}
                    <Pressable
                        onPress={irACrearProducto}
                        hitSlop={8}
                        className="absolute bottom-6 right-6 h-16 w-16 items-center justify-center rounded-full bg-[#e57d90] active:bg-[#d16a7d]"
                        style={{
                            shadowColor: '#e57d90',
                            shadowOpacity: 0.35,
                            shadowRadius: 12,
                            shadowOffset: {
                                width: 0,
                                height: 6,
                            },
                            elevation: 6,
                        }}
                    >
                        <Plus
                            color="#ffffff"
                            size={28}
                            strokeWidth={2.5}
                        />
                    </Pressable>

                </SafeAreaView>
            </View>
        </>
    );
}