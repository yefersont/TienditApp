import {
    Pressable,
    ScrollView,
    Text,
    TextInput,
    View,
} from 'react-native';
import { Stack, router, useLocalSearchParams } from 'expo-router';
import { SafeAreaView } from 'react-native-safe-area-context';
import {
    ArrowLeft,
    Package,
    TriangleAlert,
} from 'lucide-react-native';
import { useState } from 'react';
import API_URL from '@/services/apis';

export default function DetalleProducto() {
    const {
        productoId,
        productoNombre,
        sucursalId,
        sucursalNombre,
        stock,
        precioCompra,
        precioVenta,
        stockMinimo,
        descripcion,
    } = useLocalSearchParams<{
        productoId: string;
        productoNombre: string;
        sucursalId: string;
        sucursalNombre: string;
        stock: string;
        precioCompra: string;
        precioVenta: string;
        stockMinimo: string;
        descripcion?: string;
    }>();

    const stockInicial = Number(stock);
    const [cantidad, setCantidad] = useState(stockInicial);
    const [guardando, setGuardando] = useState(false);

    const minimo = Number(stockMinimo);

    const stockBajo = cantidad <= minimo;
    const hayCambios = cantidad !== stockInicial;

    const [precioCompraEditado, setPrecioCompraEditado] =
        useState(precioCompra);

    const [precioVentaEditado, setPrecioVentaEditado] =
        useState(precioVenta);

    const [guardandoPrecios, setGuardandoPrecios] = useState(false);

    const hayCambiosPrecios =
        precioCompraEditado !== precioCompra ||
        precioVentaEditado !== precioVenta;

    const formatoPrecio = (precio: string) => {
        return `$${Number(precio).toLocaleString('es-CO')} `;
    };

    const disminuirStock = () => {
        setCantidad((actual) => Math.max(0, actual - 1));
    };

    const aumentarStock = () => {
        setCantidad((actual) => actual + 1);
    };

    const actualizarStock = async () => {
        if (!hayCambios || guardando) {
            return;
        }

        try {
            setGuardando(true);

            const datos = {
                sucursalId,
                productoId,
                cantidad,
                usuarioId: 'dbdd3a26-725c-4bf8-8966-595d72941bd4',
            };

            const response = await fetch(
                `${API_URL}/inventario/stock`,
                {
                    method: 'PATCH',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(datos),
                }
            );

            router.back();

            if (!response.ok) {
                throw new Error('No se pudo actualizar el stock');
            }

            const resultado = await response.json();
            console.log('Stock actualizado:', resultado);
        } catch (error) {
            console.log('Error al actualizar stock:', error);
        } finally {
            setGuardando(false);
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
                        <View className="h-[80px] items-center justify-center">

                            <Pressable
                                onPress={() => router.back()}
                                hitSlop={12}
                                className="absolute left-4 top-1/2 -mt-4 h-8 w-8 items-center justify-center rounded-full active:bg-white/15"
                            >
                                <ArrowLeft
                                    color="#ffffff"
                                    size={22}
                                />
                            </Pressable>

                            <Text className="mt-1 text-[24px] font-bold text-white">
                                Producto
                            </Text>

                        </View>
                    </SafeAreaView>
                </View>

                {/* Contenido */}
                <SafeAreaView
                    className="flex-1"
                    edges={['left', 'right', 'bottom']}
                >
                    <ScrollView
                        showsVerticalScrollIndicator={false}
                        contentContainerStyle={{
                            paddingHorizontal: 20,
                            paddingTop: 28,
                            paddingBottom: 40,
                        }}
                    >

                        {/* Producto */}
                        <View
                            className="overflow-hidden rounded-[24px] bg-white"
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
                            <View className="p-5">

                                <View className="flex-row items-center">
                                    <View className="h-14 w-14 items-center justify-center rounded-2xl bg-[#ffcdd4]">
                                        <Package
                                            color="#e57d90"
                                            size={26}
                                        />
                                    </View>

                                    <View className="ml-4 flex-1">
                                        <Text
                                            className="text-[21px] font-bold text-[#2D2D32]"
                                            numberOfLines={2}
                                        >
                                            {productoNombre}
                                        </Text>

                                    </View>
                                </View>
                            </View>
                        </View>

                        {/* Stock */}
                        <View
                            className="mt-5 overflow-hidden rounded-[24px] bg-white"
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
                            <View className="p-5">

                                <Text className="text-[13px] font-semibold text-[#a15f6d]">
                                    STOCK
                                </Text>

                                {/* Selector de stock */}
                                <View className="mt-5 flex-row items-center justify-center">

                                    {/* Menos */}
                                    <Pressable
                                        onPress={disminuirStock}
                                        disabled={cantidad === 0}
                                        className={`h-12 w-12 items-center justify-center rounded-full ${cantidad === 0
                                            ? 'bg-[#f5e5e8]'
                                            : 'bg-[#ffcdd4] active:bg-[#f5b9c2]'
                                            }`}
                                    >
                                        <Text
                                            className={`text-[28px] font-medium ${cantidad === 0
                                                ? 'text-[#c9aeb3]'
                                                : 'text-[#e57d90]'
                                                }`}
                                        >
                                            −
                                        </Text>
                                    </Pressable>

                                    {/* Cantidad */}
                                    <View className="mx-7 min-w-[120px] items-center">
                                        <Text className="text-[38px] font-bold text-[#2D2D32]">
                                            {cantidad}
                                        </Text>

                                        <Text className="mt-[-2px] text-[13px] font-medium text-[#a15f6d]">
                                            Unidades
                                        </Text>
                                    </View>

                                    {/* Más */}
                                    <Pressable
                                        onPress={aumentarStock}
                                        className="h-12 w-12 items-center justify-center rounded-full bg-[#ffcdd4] active:bg-[#f5b9c2]"
                                    >
                                        <Text className="text-[28px] font-medium text-[#e57d90]">
                                            +
                                        </Text>
                                    </Pressable>

                                </View>

                                {/* Estado */}
                                <View className="mt-4 flex-row items-center justify-between">

                                    <View>
                                        <Text className="text-[11px] text-[#a15f6d]">
                                            Stock mínimo
                                        </Text>

                                        <Text className="mt-1 text-[15px] font-bold text-[#2D2D32]">
                                            {minimo} unidades
                                        </Text>
                                    </View>

                                    <View className="items-end">
                                        <Text className="text-[11px] text-[#a15f6d]">
                                            Estado
                                        </Text>

                                        <Text
                                            className={`mt - 1 text - [15px] font - bold ${stockBajo
                                                ? 'text-[#d9536f]'
                                                : 'text-[#e57d90]'
                                                } `}
                                        >
                                            {stockBajo
                                                ? 'Necesita reposición'
                                                : 'Disponible'}
                                        </Text>
                                    </View>

                                </View>

                                {/* Alerta de stock bajo */}
                                {stockBajo && (
                                    <View className="mt-4 flex-row items-center rounded-xl bg-[#fff0f2] px-3 py-3">
                                        <TriangleAlert
                                            color="#d9536f"
                                            size={16}
                                        />

                                        <Text className="ml-2 flex-1 text-[12px] font-medium text-[#d9536f]">
                                            El stock está igual o por debajo del mínimo.
                                        </Text>
                                    </View>
                                )}

                                {/* Botón actualizar */}
                                <Pressable
                                    onPress={actualizarStock}
                                    disabled={!hayCambios || guardando}
                                    className={`mt-5 items-center rounded-2xl py-4 ${hayCambios && !guardando
                                        ? 'bg-[#e57d90] active:bg-[#d16a7d]'
                                        : 'bg-[#f3b6c1]'
                                        }`}
                                >
                                    <Text
                                        className={`text-[15px] font-bold ${hayCambios && !guardando
                                            ? 'text-white'
                                            : 'text-[#9f6873]'
                                            }`}
                                    >
                                        {guardando
                                            ? 'Actualizando...'
                                            : 'Actualizar stock'}
                                    </Text>
                                </Pressable>

                            </View>

                        </View>

                        {/* Precios */}
                        <View
                            className="mt-5 overflow-hidden rounded-[24px] bg-white"
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
                            <View className="p-5">

                                <Text className="text-[13px] font-semibold text-[#a15f6d]">
                                    INFORMACIÓN DE PRECIOS
                                </Text>

                                {/* Precios */}
                                <View className="mt-4 flex-row justify-between">

                                    {/* Precio de compra */}
                                    <View className="flex-1 mr-3">
                                        <Text className="text-[11px] text-[#a15f6d]">
                                            Precio de compra
                                        </Text>

                                        <View className="mt-1 flex-row items-center rounded-xl bg-[#fff7f8] px-3">
                                            <Text className="text-[16px] font-bold text-[#a15f6d]">
                                                $
                                            </Text>

                                            <TextInput
                                                value={precioCompraEditado}
                                                onChangeText={setPrecioCompraEditado}
                                                keyboardType="decimal-pad"
                                                className="ml-1 flex-1 py-2 text-[16px] font-bold text-[#2D2D32]"
                                                placeholder="0"
                                                placeholderTextColor="#c9aeb3"
                                            />
                                        </View>
                                    </View>

                                    {/* Precio de venta */}
                                    <View className="flex-1">
                                        <Text className="text-[11px] text-[#a15f6d]">
                                            Precio de venta
                                        </Text>

                                        <View className="mt-1 flex-row items-center rounded-xl bg-[#fff7f8] px-3">
                                            <Text className="text-[16px] font-bold text-[#a15f6d]">
                                                $
                                            </Text>

                                            <TextInput
                                                value={precioVentaEditado}
                                                onChangeText={setPrecioVentaEditado}
                                                keyboardType="decimal-pad"
                                                className="ml-1 flex-1 py-2 text-[16px] font-bold text-[#2D2D32]"
                                                placeholder="0"
                                                placeholderTextColor="#c9aeb3"
                                            />
                                        </View>
                                    </View>

                                </View>

                                {/* Ganancia */}
                                <View className="mt-4 rounded-xl bg-[#fff7f8] px-3 py-3">
                                    <Text className="text-[11px] text-[#a15f6d]">
                                        Ganancia por unidad
                                    </Text>

                                    <Text className="mt-1 text-[16px] font-bold text-[#e57d90]">
                                        {formatoPrecio(
                                            String(
                                                Number(precioVentaEditado || 0) -
                                                Number(precioCompraEditado || 0)
                                            )
                                        )}
                                    </Text>
                                </View>

                                {/* Botón actualizar precios */}
                                <Pressable
                                    // onPress={actualizarPrecios}
                                    disabled={!hayCambiosPrecios || guardandoPrecios}
                                    className={`mt-5 items-center rounded-2xl py-5 ${hayCambiosPrecios && !guardandoPrecios
                                        ? 'bg-[#e57d90] active:bg-[#d16a7d]'
                                        : 'bg-[#f3b6c1]'
                                        }`}
                                >
                                    <Text
                                        className={`text-[15px] font-bold ${hayCambiosPrecios && !guardandoPrecios
                                            ? 'text-white'
                                            : 'text-[#9f6873]'
                                            }`}
                                    >
                                        {guardandoPrecios
                                            ? 'Actualizando...'
                                            : 'Actualizar precios'}
                                    </Text>
                                </Pressable>

                            </View>
                        </View>

                    </ScrollView>
                </SafeAreaView>
            </View>
        </>
    );
}

