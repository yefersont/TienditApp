import {
    Pressable,
    ScrollView,
    Text,
    TextInput,
    View,
} from 'react-native';
import { Stack, router } from 'expo-router';
import { SafeAreaView } from 'react-native-safe-area-context';
import {
    ArrowLeft,
    Search,
} from 'lucide-react-native';
import { useEffect, useState } from 'react';
import API_URL from '../../services/apis';

type Movimiento = {
    id: string;
    sucursalId: string;
    productoId: string;
    usuarioId: string;
    tipo: 'ENTRADA' | 'SALIDA' | 'AJUSTE';
    cantidad: number;
    precioUnitario: number | null;
    costoUnitario: number | null;
    totalVenta: number | null;
    utilidad: number | null;
    observacion: string | null;
    createdAt: string;
    producto: {
        id: string;
        nombre: string;
    };
    sucursal: {
        id: string;
        nombre: string;
    };
    usuario: {
        id: string;
        nombre: string;
    };
};

export default function HistorialAjustes() {
    const [movimientos, setMovimientos] = useState<Movimiento[]>([]);
    const [busqueda, setBusqueda] = useState('');
    const [cargando, setCargando] = useState(true);
    const [filtro, setFiltro] = useState<'todos' | 'hoy'>('hoy');
    const obtenerHistorial = async () => {
        try {
            setCargando(true);

            const response = await fetch(
                `${API_URL}/inventario/historial`
            );

            if (!response.ok) {
                throw new Error('No se pudo obtener el historial');
            }

            const data = await response.json();

            console.log('Historial recibido:', data);

            setMovimientos(data);
        } catch (error) {
            console.log('Error al obtener historial:', error);
        } finally {
            setCargando(false);
        }
    };

    useEffect(() => {
        obtenerHistorial();
    }, []);

    const movimientosFiltrados = movimientos.filter((movimiento) => {
        const coincideBusqueda =
            movimiento.producto.nombre
                .toLowerCase()
                .includes(busqueda.toLowerCase());

        if (filtro === 'todos') {
            return coincideBusqueda;
        }

        const fechaMovimiento = new Date(movimiento.createdAt);
        const hoy = new Date();

        return (
            coincideBusqueda &&
            fechaMovimiento.getDate() === hoy.getDate() &&
            fechaMovimiento.getMonth() === hoy.getMonth() &&
            fechaMovimiento.getFullYear() === hoy.getFullYear()
        );
    });

    const formatearFecha = (fecha: string) => {
        const date = new Date(fecha);

        return date.toLocaleDateString('es-CO', {
            day: 'numeric',
            month: 'short',
            year: 'numeric',
        }) +
            ' · ' +
            date.toLocaleTimeString('es-CO', {
                hour: '2-digit',
                minute: '2-digit',
                hour12: false,
            });
    };

    const obtenerCambioAjuste = (observacion: string | null) => {
        if (!observacion) {
            return null;
        }

        const resultado = observacion.match(
            /(\d+)\s*→\s*(\d+)/
        );

        if (!resultado) {
            return null;
        }

        return {
            anterior: Number(resultado[1]),
            nuevo: Number(resultado[2]),
        };
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
                                Historial
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

                        {/* Buscador */}
                        <View
                            className="flex-row items-center rounded-2xl bg-white px-4"
                            style={{
                                shadowColor: '#e57d90',
                                shadowOpacity: 0.08,
                                shadowRadius: 8,
                                shadowOffset: {
                                    width: 0,
                                    height: 3,
                                },
                                elevation: 2,
                            }}
                        >
                            <Search
                                color="#a15f6d"
                                size={19}
                            />

                            <TextInput
                                value={busqueda}
                                onChangeText={setBusqueda}
                                placeholder="Buscar producto..."
                                placeholderTextColor="#c9aeb3"
                                className="ml-3 flex-1 py-4 text-[14px] text-[#2D2D32]"
                            />
                        </View>

                        {/* Filtros */}
                        <View className="mt-4 flex-row">

                            <Pressable
                                onPress={() => setFiltro('hoy')}
                                className={`rounded-full px-5 py-2.5 ${filtro === 'hoy'
                                        ? 'bg-[#e57d90]'
                                        : 'bg-white'
                                    }`}
                            >
                                <Text
                                    className={`text-[12px] font-bold ${filtro === 'hoy'
                                            ? 'text-white'
                                            : 'text-[#a15f6d]'
                                        }`}
                                >
                                    Hoy
                                </Text>
                            </Pressable>

                            <Pressable
                                onPress={() => setFiltro('todos')}
                                className={`ml-2 rounded-full px-5 py-2.5 ${filtro === 'todos'
                                        ? 'bg-[#e57d90]'
                                        : 'bg-white'
                                    }`}
                            >
                                <Text
                                    className={`text-[12px] font-bold ${filtro === 'todos'
                                            ? 'text-white'
                                            : 'text-[#a15f6d]'
                                        }`}
                                >
                                    Todos
                                </Text>
                            </Pressable>

                        </View>

                        {/* Título */}
                        <Text className="mt-7 text-[13px] font-bold text-[#a15f6d]">
                            MOVIMIENTOS
                        </Text>

                        {/* Cargando */}
                        {cargando && (
                            <Text className="mt-5 text-center text-[13px] text-[#a15f6d]">
                                Cargando historial...
                            </Text>
                        )}

                        {/* Sin resultados */}
                        {!cargando && movimientosFiltrados.length === 0 && (
                            <View className="mt-6 items-center rounded-[22px] bg-white p-6">
                                <Text className="text-[14px] font-semibold text-[#2D2D32]">
                                    No hay movimientos
                                </Text>

                                <Text className="mt-1 text-center text-[12px] text-[#a15f6d]">
                                    No se encontraron movimientos para mostrar.
                                </Text>
                            </View>
                        )}

                        {/* Movimientos */}
                        {!cargando &&
                            movimientosFiltrados.map((movimiento) => {

                                const ajuste =
                                    movimiento.tipo === 'AJUSTE'
                                        ? obtenerCambioAjuste(
                                            movimiento.observacion
                                        )
                                        : null;

                                const aumento =
                                    movimiento.cantidad > 0;

                                return (
                                    <View
                                        key={movimiento.id}
                                        className="mt-3 overflow-hidden rounded-[22px] bg-white"
                                        style={{
                                            shadowColor: '#e57d90',
                                            shadowOpacity: 0.08,
                                            shadowRadius: 9,
                                            shadowOffset: {
                                                width: 0,
                                                height: 3,
                                            },
                                            elevation: 2,
                                        }}
                                    >
                                        <View className="p-5">

                                            {/* Producto */}
                                            <View className="flex-row items-center justify-between">

                                                <Text
                                                    className="flex-1 text-[17px] font-bold text-[#2D2D32]"
                                                    numberOfLines={1}
                                                >
                                                    {movimiento.producto.nombre}
                                                </Text>

                                                {/* Tipo */}
                                                <View
                                                    className={`ml-3 w-[70px] items-center rounded-full px-3 py-1.5 ${movimiento.tipo === 'AJUSTE'
                                                        ? 'bg-[#fff0f2]'
                                                        : movimiento.tipo === 'ENTRADA'
                                                            ? 'bg-[#f1faf5]'
                                                            : 'bg-[#fdf0f2]'
                                                        }`}
                                                >
                                                    <Text
                                                        className={`text-[11px] font-bold ${movimiento.tipo === 'AJUSTE'
                                                            ? 'text-[#e57d90]'
                                                            : movimiento.tipo === 'ENTRADA'
                                                                ? 'text-[#4c9b6b]'
                                                                : 'text-[#d9536f]'
                                                            }`}
                                                    >
                                                        {movimiento.tipo === 'SALIDA'
                                                            ? 'VENTA'
                                                            : movimiento.tipo}                                                    </Text>
                                                </View>

                                            </View>

                                            {/* Cambio */}
                                            <View className="mt-4 flex-row items-center justify-between">

                                                <View className="flex-row items-center">

                                                    {ajuste ? (
                                                        <>
                                                            <Text className="text-[14px] font-semibold text-[#a15f6d]">
                                                                {ajuste.anterior}
                                                            </Text>

                                                            <Text className="mx-2 text-[14px] text-[#c9aeb3]">
                                                                →
                                                            </Text>

                                                            <Text className="text-[14px] font-bold text-[#2D2D32]">
                                                                {ajuste.nuevo}
                                                            </Text>

                                                            <Text className="ml-1 text-[12px] text-[#a15f6d]">
                                                                unidades
                                                            </Text>
                                                        </>
                                                    ) : (
                                                        <>
                                                            <Text className="text-[12px] text-[#a15f6d]">
                                                                Cantidad
                                                            </Text>

                                                            <Text className="ml-2 text-[16px] font-bold text-[#2D2D32]">
                                                                {Math.abs(movimiento.cantidad)}
                                                            </Text>

                                                            <Text className="ml-1 text-[12px] text-[#a15f6d]">
                                                                unidades
                                                            </Text>
                                                        </>
                                                    )}

                                                </View>

                                                {/* Diferencia */}
                                                <View
                                                    className={`rounded-full px-3 py-1.5 ${aumento
                                                        ? 'bg-[#fff0f2]'
                                                        : 'bg-[#fdf0f2]'
                                                        }`}
                                                >
                                                    <Text
                                                        className={`text-[13px] font-bold ${aumento
                                                            ? 'text-[#e57d90]'
                                                            : 'text-[#d9536f]'
                                                            }`}
                                                    >
                                                        {aumento ? '+' : ''}
                                                        {movimiento.cantidad}
                                                    </Text>
                                                </View>

                                            </View>

                                            {/* Separador */}
                                            <View className="my-4 h-[1px] bg-[#f8e7ea]" />

                                            {/* Información */}
                                            <View className="flex-row justify-between">

                                                <View className="flex-1">

                                                    <Text className="text-[10px] text-[#a15f6d]">
                                                        FECHA
                                                    </Text>

                                                    <Text className="mt-1 text-[12px] font-medium text-[#2D2D32]">
                                                        {formatearFecha(
                                                            movimiento.createdAt
                                                        )}
                                                    </Text>

                                                    <Text className="mt-2 text-[10px] text-[#a15f6d]">
                                                        SUCURSAL
                                                    </Text>

                                                    <Text className="mt-1 text-[12px] font-medium text-[#2D2D32]">
                                                        {movimiento.sucursal.nombre}
                                                    </Text>

                                                </View>

                                                <View className="items-end">

                                                    <Text className="text-[10px] text-[#a15f6d]">
                                                        REALIZADO POR
                                                    </Text>

                                                    <Text className="mt-1 text-[12px] font-semibold text-[#2D2D32]">
                                                        {movimiento.usuario.nombre}
                                                    </Text>

                                                </View>

                                            </View>

                                        </View>
                                    </View>
                                );
                            })}

                    </ScrollView>
                </SafeAreaView>
            </View>
        </>
    );
}