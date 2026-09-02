import {
    FlatList,
    Modal,
    Pressable,
    Text,
    TextInput,
    View,
} from 'react-native';
import { Stack, router, useLocalSearchParams } from 'expo-router';
import { useFocusEffect } from '@react-navigation/native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useCallback, useMemo, useState } from 'react';
import {
    ArrowLeft,
    Search,
    X,
    Plus,
    Minus,
    ShoppingCart,
    Trash2,
    Check,
    PackageSearch,
} from 'lucide-react-native';

import Loader from '../../components/loader';
import API_URL from '../../services/apis';

type Producto = {
    id: string;
    nombre: string;
    precioVenta: string;
    stock: number;
};

type ItemCarrito = {
    producto: Producto;
    cantidad: number;
};

function formatoPesos(valor: number) {
    return `$${Math.round(valor).toLocaleString('es-CO')}`;
}

export default function NuevaVentaScreen() {
    const { sucursalId, sucursalNombre } = useLocalSearchParams<{
        sucursalId: string;
        sucursalNombre: string;
    }>();

    const [productos, setProductos] = useState<Producto[]>([]);
    const [cargando, setCargando] = useState(true);
    const [busqueda, setBusqueda] = useState('');

    const [carrito, setCarrito] = useState<Record<string, ItemCarrito>>({});
    const [carritoVisible, setCarritoVisible] = useState(false);
    const [procesando, setProcesando] = useState(false);

    const obtenerProductos = useCallback(async () => {
        if (!sucursalId) return;
        try {
            const response = await fetch(
                `${API_URL}/productos/sucursal/${sucursalId}`
            );

            if (!response.ok) {
                throw new Error('Error al obtener los productos');
            }

            const data: Producto[] = await response.json();
            setProductos(data);
        } catch (error) {
            console.error('Error cargando productos:', error);
        } finally {
            setCargando(false);
        }
    }, [sucursalId]);

    useFocusEffect(
        useCallback(() => {
            obtenerProductos();
        }, [obtenerProductos])
    );

    const productosFiltrados = useMemo(() => {
        const termino = busqueda.trim().toLowerCase();
        if (!termino) return productos;
        return productos.filter((p) =>
            p.nombre.toLowerCase().includes(termino)
        );
    }, [productos, busqueda]);

    const itemsCarrito = Object.values(carrito);

    const totalUnidades = itemsCarrito.reduce(
        (acc, item) => acc + item.cantidad,
        0
    );

    const totalVenta = itemsCarrito.reduce(
        (acc, item) => acc + Number(item.producto.precioVenta) * item.cantidad,
        0
    );

    const cantidadEnCarrito = (productoId: string) =>
        carrito[productoId]?.cantidad ?? 0;

    const agregarProducto = (producto: Producto) => {
        setCarrito((prev) => {
            const actual = prev[producto.id]?.cantidad ?? 0;
            if (actual >= producto.stock) return prev;

            return {
                ...prev,
                [producto.id]: {
                    producto,
                    cantidad: actual + 1,
                },
            };
        });
    };

    const quitarProducto = (producto: Producto) => {
        setCarrito((prev) => {
            const actual = prev[producto.id]?.cantidad ?? 0;
            if (actual <= 1) {
                const { [producto.id]: _omitido, ...resto } = prev;
                return resto;
            }

            return {
                ...prev,
                [producto.id]: {
                    producto,
                    cantidad: actual - 1,
                },
            };
        });
    };

    const eliminarDelCarrito = (productoId: string) => {
        setCarrito((prev) => {
            const { [productoId]: _omitido, ...resto } = prev;
            return resto;
        });
    };

    const confirmarVenta = async () => {
        if (itemsCarrito.length === 0) return;

        try {
            setProcesando(true);

            const payload = {
                sucursalId,
                items: itemsCarrito.map((item) => ({
                    productoId: item.producto.id,
                    cantidad: item.cantidad,
                    precioUnitario: Number(item.producto.precioVenta),
                })),
            };
            // console.log(JSON.stringify(payload, null, 2))

            // Ajusta este endpoint al de tu API real (ej. /ventas o /movimientos)
            const response = await fetch(`${API_URL}/ventas`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(payload),
            });

            if (!response.ok) {
                const data = await response.json().catch(() => null);
                throw new Error(data?.message || 'Error al registrar la venta');
            }

            setCarrito({});
            setCarritoVisible(false);
            router.back();
        } catch (error) {
            console.error('Error registrando venta:', error);
        } finally {
            setProcesando(false);
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

                {/* Header */}
                <View className="rounded-b-[40px] bg-[#e57d90]">
                    <SafeAreaView edges={['top']}>
                        <View className="flex-row items-center px-4 py-4">
                            <Pressable
                                onPress={() => router.back()}
                                hitSlop={12}
                                className="h-9 w-9 items-center justify-center rounded-full active:bg-white/15"
                            >
                                <ArrowLeft color="#ffffff" size={22} />
                            </Pressable>

                            <View className="flex-1 items-center pr-9">
                                <Text className="text-[20px] font-bold text-white">
                                    Nueva venta
                                </Text>

                                {sucursalNombre ? (
                                    <Text className="mt-0.5 text-[13px] text-[#ffe3e8]">
                                        {sucursalNombre}
                                    </Text>
                                ) : null}
                            </View>
                        </View>

                        {/* Buscador */}
                        <View className="px-6 pb-3">
                            <View className="flex-row items-center rounded-2xl bg-white/95 px-4 py-1">
                                <Search color="#e57d90" size={17} />
                                <TextInput
                                    value={busqueda}
                                    onChangeText={setBusqueda}
                                    placeholder="Buscar producto..."
                                    placeholderTextColor="#c59aa3"
                                    className="ml-3 flex-1 text-[14px] text-[#2D2D32]"
                                />
                                {busqueda.length > 0 && (
                                    <Pressable
                                        onPress={() => setBusqueda('')}
                                        hitSlop={8}
                                    >
                                        <X color="#c59aa3" size={17} />
                                    </Pressable>
                                )}
                            </View>
                        </View>

                    </SafeAreaView>
                </View>

                {/* Lista de productos */}
                <View className="flex-1 px-5 pt-4">
                    {cargando ? (
                        <Loader />
                    ) : (
                        <FlatList
                            data={productosFiltrados}
                            keyExtractor={(item) => item.id}
                            showsVerticalScrollIndicator={false}
                            contentContainerStyle={{
                                paddingBottom: totalUnidades > 0 ? 110 : 30,
                                flexGrow:
                                    productosFiltrados.length === 0 ? 1 : 0,
                            }}
                            ListEmptyComponent={
                                <View className="flex-1 items-center justify-center py-20">
                                    <View className="mb-4 h-16 w-16 items-center justify-center rounded-full bg-[#ffcdd4]">
                                        <PackageSearch
                                            color="#e57d90"
                                            size={28}
                                        />
                                    </View>
                                    <Text className="text-[18px] font-bold text-[#2D2D32]">
                                        Sin resultados
                                    </Text>
                                    <Text className="mt-2 text-center text-[14px] text-[#a15f6d]">
                                        No encontramos productos con ese
                                        nombre.
                                    </Text>
                                </View>
                            }
                            renderItem={({ item }) => {
                                const cantidad = cantidadEnCarrito(item.id);
                                const sinStock = item.stock <= 0;

                                return (
                                    <View
                                        className="mb-3 flex-row items-center rounded-[18px] border border-[#fdb4bf] bg-white px-4 py-3.5"
                                        style={{
                                            shadowColor: '#e57d90',
                                            shadowOpacity: 0.08,
                                            shadowRadius: 6,
                                            shadowOffset: {
                                                width: 0,
                                                height: 2,
                                            },
                                            elevation: 1,
                                        }}
                                    >
                                        <View className="flex-1 pr-3">
                                            <Text
                                                className="text-[15px] font-bold text-[#2D2D32]"
                                                numberOfLines={1}
                                            >
                                                {item.nombre}
                                            </Text>

                                            <View className="mt-1 flex-row items-center">
                                                <Text className="text-[14px] font-semibold text-[#e57d90]">
                                                    {formatoPesos(
                                                        Number(item.precioVenta)
                                                    )}
                                                </Text>
                                                <Text className="ml-2 text-[12px] text-[#a15f6d]">
                                                    · {item.stock} disp.
                                                </Text>
                                            </View>
                                        </View>

                                        {sinStock ? (
                                            <View className="rounded-full bg-[#ffe3e8] px-3 py-1.5">
                                                <Text className="text-[12px] font-semibold text-[#d9536f]">
                                                    Agotado
                                                </Text>
                                            </View>
                                        ) : cantidad === 0 ? (
                                            <Pressable
                                                onPress={() =>
                                                    agregarProducto(item)
                                                }
                                                className="h-10 w-10 items-center justify-center rounded-full bg-[#e57d90] active:bg-[#d16a7d]"
                                            >
                                                <Plus
                                                    color="#ffffff"
                                                    size={20}
                                                />
                                            </Pressable>
                                        ) : (
                                            <View className="flex-row items-center rounded-full bg-[#ffcdd4] px-1">
                                                <Pressable
                                                    onPress={() =>
                                                        quitarProducto(item)
                                                    }
                                                    hitSlop={8}
                                                    className="h-9 w-9 items-center justify-center"
                                                >
                                                    <Minus
                                                        color="#e57d90"
                                                        size={16}
                                                    />
                                                </Pressable>

                                                <Text className="min-w-[20px] text-center text-[15px] font-bold text-[#2D2D32]">
                                                    {cantidad}
                                                </Text>

                                                <Pressable
                                                    onPress={() =>
                                                        agregarProducto(item)
                                                    }
                                                    hitSlop={8}
                                                    disabled={
                                                        cantidad >= item.stock
                                                    }
                                                    className="h-9 w-9 items-center justify-center"
                                                >
                                                    <Plus
                                                        color={
                                                            cantidad >=
                                                                item.stock
                                                                ? '#f4b8c2'
                                                                : '#e57d90'
                                                        }
                                                        size={16}
                                                    />
                                                </Pressable>
                                            </View>
                                        )}
                                    </View>
                                );
                            }}
                        />
                    )}
                </View>

                {/* Barra flotante del carrito */}
                {totalUnidades > 0 && (
                    <SafeAreaView edges={['bottom']}>
                        <Pressable
                            onPress={() => setCarritoVisible(true)}
                            className="mx-5 mb-3 flex-row items-center justify-between rounded-2xl bg-[#e57d90] px-5 py-4 active:bg-[#d16a7d]"
                            style={{
                                shadowColor: '#e57d90',
                                shadowOpacity: 0.35,
                                shadowRadius: 12,
                                shadowOffset: { width: 0, height: 6 },
                                elevation: 6,
                            }}
                        >
                            <View className="flex-row items-center">
                                <View className="h-9 w-9 items-center justify-center rounded-full bg-white/20">
                                    <ShoppingCart color="#ffffff" size={18} />
                                </View>
                                <Text className="ml-3 text-[15px] font-bold text-white">
                                    {totalUnidades}{' '}
                                    {totalUnidades === 1
                                        ? 'producto'
                                        : 'productos'}
                                </Text>
                            </View>

                            <Text className="text-[17px] font-bold text-white">
                                {formatoPesos(totalVenta)}
                            </Text>
                        </Pressable>
                    </SafeAreaView>
                )}
            </View>

            {/* Modal: resumen de venta */}
            <Modal
                visible={carritoVisible}
                transparent
                animationType="slide"
                onRequestClose={() => setCarritoVisible(false)}
            >
                <Pressable
                    className="flex-1 justify-end bg-black/40"
                    onPress={() => setCarritoVisible(false)}
                >
                    <Pressable
                        className="max-h-[80%] rounded-t-[32px] bg-[#fff7f8] px-6 pb-8 pt-5"
                        onPress={(event) => event.stopPropagation()}
                    >
                        <View className="mb-4 items-center">
                            <View className="h-1.5 w-12 rounded-full bg-[#fdb4bf]" />
                        </View>

                        <View className="mb-5 flex-row items-center justify-between">
                            <Text className="text-[22px] font-bold text-[#2D2D32]">
                                Resumen de venta
                            </Text>
                            <Pressable
                                onPress={() => setCarritoVisible(false)}
                                hitSlop={10}
                                className="h-9 w-9 items-center justify-center rounded-full bg-white active:bg-[#ffe3e8]"
                            >
                                <X color="#a15f6d" size={18} />
                            </Pressable>
                        </View>

                        <FlatList
                            data={itemsCarrito}
                            keyExtractor={(item) => item.producto.id}
                            showsVerticalScrollIndicator={false}
                            style={{ maxHeight: 320 }}
                            ItemSeparatorComponent={() => (
                                <View className="h-[1px] bg-[#ffe3e8]" />
                            )}
                            renderItem={({ item }) => (
                                <View className="flex-row items-center py-3">
                                    <View className="flex-1 pr-3">
                                        <Text
                                            className="text-[15px] font-semibold text-[#2D2D32]"
                                            numberOfLines={1}
                                        >
                                            {item.producto.nombre}
                                        </Text>
                                        <Text className="mt-0.5 text-[13px] text-[#a15f6d]">
                                            {formatoPesos(
                                                Number(
                                                    item.producto.precioVenta
                                                )
                                            )}{' '}
                                            c/u
                                        </Text>
                                    </View>

                                    <View className="flex-row items-center rounded-full bg-[#ffcdd4] px-1 mr-3">
                                        <Pressable
                                            onPress={() =>
                                                quitarProducto(item.producto)
                                            }
                                            hitSlop={8}
                                            className="h-8 w-8 items-center justify-center"
                                        >
                                            <Minus color="#e57d90" size={14} />
                                        </Pressable>

                                        <Text className="min-w-[18px] text-center text-[14px] font-bold text-[#2D2D32]">
                                            {item.cantidad}
                                        </Text>

                                        <Pressable
                                            onPress={() =>
                                                agregarProducto(item.producto)
                                            }
                                            hitSlop={8}
                                            disabled={
                                                item.cantidad >=
                                                item.producto.stock
                                            }
                                            className="h-8 w-8 items-center justify-center"
                                        >
                                            <Plus
                                                color={
                                                    item.cantidad >=
                                                        item.producto.stock
                                                        ? '#f4b8c2'
                                                        : '#e57d90'
                                                }
                                                size={14}
                                            />
                                        </Pressable>
                                    </View>

                                    <Text className="w-[76px] text-right text-[14px] font-bold text-[#2D2D32]">
                                        {formatoPesos(
                                            Number(item.producto.precioVenta) *
                                            item.cantidad
                                        )}
                                    </Text>

                                    <Pressable
                                        onPress={() =>
                                            eliminarDelCarrito(
                                                item.producto.id
                                            )
                                        }
                                        hitSlop={8}
                                        className="ml-2"
                                    >
                                        <Trash2 color="#d9536f" size={16} />
                                    </Pressable>
                                </View>
                            )}
                        />

                        {/* Total */}
                        <View className="mt-4 flex-row items-center justify-between border-t border-[#ffe3e8] pt-4">
                            <Text className="text-[16px] font-semibold text-[#2D2D32]">
                                Total
                            </Text>
                            <Text className="text-[24px] font-bold text-[#e57d90]">
                                {formatoPesos(totalVenta)}
                            </Text>
                        </View>

                        {/* Confirmar */}
                        <Pressable
                            onPress={confirmarVenta}
                            disabled={procesando || itemsCarrito.length === 0}
                            className="mt-5 flex-row items-center justify-center rounded-2xl py-4"
                            style={{
                                backgroundColor:
                                    procesando || itemsCarrito.length === 0
                                        ? '#fdb4bf'
                                        : '#e57d90',
                                ...(!procesando && itemsCarrito.length > 0
                                    ? {
                                        shadowColor: '#e57d90',
                                        shadowOpacity: 0.3,
                                        shadowRadius: 10,
                                        shadowOffset: {
                                            width: 0,
                                            height: 4,
                                        },
                                        elevation: 3,
                                    }
                                    : {}),
                            }}
                        >
                            {!procesando && (
                                <Check
                                    color="#ffffff"
                                    size={18}
                                    style={{ marginRight: 8 }}
                                />
                            )}
                            <Text className="text-[16px] font-bold uppercase tracking-wide text-white">
                                {procesando
                                    ? 'Procesando...'
                                    : 'Confirmar venta'}
                            </Text>
                        </Pressable>
                    </Pressable>
                </Pressable>
            </Modal>
        </>
    );
}