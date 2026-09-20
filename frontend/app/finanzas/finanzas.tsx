import { useEffect, useState } from 'react';
import {
    Pressable,
    ScrollView,
    Text,
    View,
} from 'react-native';
import { Stack, router, useLocalSearchParams } from 'expo-router';
import { SafeAreaView } from 'react-native-safe-area-context';
import {
    ArrowLeft,
    TrendingUp,
    ShoppingCart,
    DollarSign,
    Package,
} from 'lucide-react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import API_URL from '../../services/apis';


export default function Finanzas() {
    const { sucursalId, sucursalNombre } = useLocalSearchParams<{
        sucursalId: string;
        sucursalNombre: string;
    }>();
    const [cargando, setCargando] = useState(true);
    const [data, setData] = useState<any>(null);
    const [periodo, setPeriodo] = useState('30 días');


    const ventasSemana = (data?.ventasPorDia ?? []).map((item) => {
        const fecha = new Date(`${item.fecha}T00:00:00`);

        const dias = ['Dom', 'Lun', 'Mar', 'Mié', 'Jue', 'Vie', 'Sáb'];

        return {
            dia: dias[fecha.getDay()],
            valor: item.valor,
        };
    });
    const maxVenta = Math.max(
        ...(ventasSemana.map((item) => item.valor)),
        1
    );
    const formatoDinero = (valor: number) =>
        `$${valor.toLocaleString('es-CO')}`;

    const getFinanzas = async () => {

        try {

            setCargando(true)

            const token = await AsyncStorage.getItem('@tienditapp_token')

            if (!token) {
                router.replace('/login')
                return
            }
            const periodoNumero =
                periodo === 'Hoy'
                    ? 1
                    : periodo === '7 días'
                        ? 7
                        : 30;

            const response = await fetch(
                `${API_URL}/finanzas/${sucursalId}?periodo=${periodoNumero}`,
                {
                    headers: {
                        'Authorization': `Bearer ${token}`,
                        'Content-Type': 'application/json',
                    },
                }
            )

            const resultado = await response.json();

            console.log('finanzas recibidas: ', resultado);

            setData(resultado);

        } catch (error) {
            console.error(error)
        } finally {
            setCargando(false)
        }

    }

    useEffect(() => {
        getFinanzas()
    }, [sucursalId, periodo])

    if (cargando) {
        return (
            <View className="flex-1 items-center justify-center bg-[#fff7f8]">
                <Text className="text-[16px] font-bold text-[#e57d90]">
                    Cargando finanzas...
                </Text>
            </View>
        )
    }

    return (
        <>
            <Stack.Screen
                options={{
                    headerShown: false,
                }}
            />
            <View className="flex-1 bg-[#fff7f8]">

                {/* header */}
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
                                Finanzas
                            </Text>

                            <Text className="mt-0.5 text-[12px] text-white/80">
                                {sucursalNombre ?? 'Mi tienda'}
                            </Text>

                        </View>
                    </SafeAreaView>
                </View>


                <ScrollView
                    showsVerticalScrollIndicator={false}
                    contentContainerStyle={{ paddingBottom: 35 }}
                >

                    {/* periodo */}
                    <View className="px-5 pt-6">

                        <Text className="mb-3 text-[15px] font-bold text-[#2D2D32]">
                            Resumen financiero
                        </Text>

                        <View className="flex-row rounded-2xl bg-white p-1">

                            {['Hoy', '7 días', '30 días'].map((item) => (
                                <Pressable
                                    key={item}
                                    onPress={() => setPeriodo(item)}
                                    className={`flex-1 items-center rounded-xl py-2.5 ${item === periodo
                                        ? 'bg-[#e57d90]'
                                        : 'bg-transparent'
                                        }`}
                                >
                                    <Text
                                        className={`text-[12px] font-semibold ${item === periodo
                                            ? 'text-white'
                                            : 'text-[#a15f6d]'
                                            }`}
                                    >
                                        {item}
                                    </Text>
                                </Pressable>
                            ))}

                        </View>

                    </View>

                    {/* tarjetas */}
                    <View className="px-5 pt-4">

                        <View className="flex-row">

                            {/* VENTAS */}
                            <View className="mr-2 flex-1 rounded-[18px] bg-white px-4 py-4">

                                <Text className="text-[12px] font-medium text-[#a15f6d]">
                                    Ventas
                                </Text>

                                <Text className="mt-1 text-[20px] font-bold text-[#2D2D32]">
                                    {formatoDinero(data.periodo.ventas)}
                                </Text>

                                <View className="mt-1 flex-row items-center">
                                    <TrendingUp color="#65b887" size={13} />
                                    <Text className="ml-1 text-[11px] font-semibold text-[#65b887]">
                                        +12.5%
                                    </Text>
                                </View>

                            </View>

                            {/* COSTOS */}
                            <View className="ml-2 flex-1 rounded-[18px] bg-white px-4 py-4">

                                <Text className="text-[12px] font-medium text-[#a15f6d]">
                                    Costos
                                </Text>

                                <Text className="mt-1 text-[20px] font-bold text-[#2D2D32]">
                                    {formatoDinero(data.periodo.costos)}
                                </Text>

                                <Text className="mt-1 text-[11px] font-medium text-[#a15f6d]">
                                    60.6% de ventas
                                </Text>

                            </View>

                        </View>

                        {/* UTILIDAD */}
                        <View className="mt-3 rounded-[18px] bg-[#e57d90] p-5">

                            <View className="flex-row items-center justify-between">

                                <View>

                                    <Text className="text-[12px] font-medium text-white/80">
                                        Utilidad estimada
                                    </Text>

                                    <Text className="mt-1 text-[26px] font-bold text-white">
                                        {formatoDinero(data.periodo.utilidad)}
                                    </Text>

                                    <Text className="mt-1 text-[11px] text-white/80">
                                        Margen de utilidad: {data.periodo.margen}%
                                    </Text>

                                </View>

                                <View className="h-12 w-12 items-center justify-center rounded-full bg-white/20">
                                    <DollarSign color="#ffffff" size={24} />
                                </View>

                            </View>

                        </View>

                    </View>

                    {/* ventas de la semana */}
                    <View className="px-5 pt-7">

                        <View className="mb-3 flex-row items-center justify-between">
                            <Text className="text-[16px] font-bold text-[#2D2D32]">
                                Día con mas ventas
                            </Text>

                            <Text className="text-[12px] font-medium text-[#a15f6d]">
                                Últimos 7 días
                            </Text>
                        </View>

                        <View className="rounded-[18px] bg-white p-5">

                            <View className="flex-row items-end justify-between">

                                {ventasSemana.map((item, index) => {

                                    const altura = Math.max(
                                        25,
                                        (item.valor / maxVenta) * 130
                                    );

                                    return (
                                        <View
                                            key={`${item.dia}-${index}`}
                                            className="items-center"
                                        >

                                            <View className="h-[130px] justify-end">

                                                <View
                                                    style={{ height: altura }}
                                                    className="w-7 rounded-t-xl bg-[#f3b6c1]"
                                                />

                                            </View>

                                            <Text className="mt-2 text-[10px] font-medium text-[#a15f6d]">
                                                {item.dia}
                                            </Text>

                                        </View>
                                    );
                                })}

                            </View>

                        </View>

                    </View>

                    {/* productos rentables */}
                    <View className="px-5 pt-7">

                        <View className="mb-3 flex-row items-center justify-between">
                            <Text className="text-[16px] font-bold text-[#2D2D32]">
                                Top 5 Productos más rentables
                            </Text>

                            <Text className="text-[12px] font-medium text-[#a15f6d]">
                                Ver todos
                            </Text>
                        </View>

                        <View className="rounded-[18px] bg-white px-4 py-2">

                            {data?.productosRentables
                                ?.slice(0, 5)
                                .map((producto, index, productos) => (

                                    <View
                                        key={producto.productoId}
                                        className={`flex-row items-center py-4 ${index !== productos.length - 1
                                            ? 'border-b border-[#ffe3e8]'
                                            : ''
                                            }`}
                                    >

                                        <View className="h-10 w-10 items-center justify-center rounded-xl bg-[#fff0f2]">
                                            <Text className="text-[13px] font-bold text-[#e57d90]">
                                                {index + 1}
                                            </Text>
                                        </View>

                                        <View className="ml-3 flex-1">

                                            <Text
                                                numberOfLines={1}
                                                className="text-[13px] font-semibold text-[#2D2D32]"
                                            >
                                                {producto.nombre}
                                            </Text>

                                            <Text className="mt-1 text-[11px] text-[#a15f6d]">
                                                Ventas: {formatoDinero(producto.ventas)}
                                            </Text>

                                        </View>

                                        <View className="items-end">

                                            <Text className="text-[13px] font-bold text-[#65b887]">
                                                +{formatoDinero(producto.utilidad)}
                                            </Text>

                                            <Text className="mt-1 text-[10px] text-[#a15f6d]">
                                                utilidad
                                            </Text>

                                        </View>

                                    </View>

                                ))}

                        </View>

                    </View>

                    {/* resumen */}
                    <View className="px-5 pt-7">

                        <Text className="mb-3 text-[16px] font-bold text-[#2D2D32]">
                            Resumen
                        </Text>

                        <View className="rounded-[18px] bg-white p-5">

                            <View className="flex-row items-center justify-between py-2">

                                <Text className="text-[13px] text-[#a15f6d]">
                                    Total de ventas
                                </Text>

                                <Text className="text-[13px] font-bold text-[#2D2D32]">
                                    {formatoDinero(data.resumen.ventas)}
                                </Text>

                            </View>

                            <View className="border-b border-[#ffe3e8]" />

                            <View className="flex-row items-center justify-between py-3">

                                <Text className="text-[13px] text-[#a15f6d]">
                                    Costo de productos
                                </Text>

                                <Text className="text-[13px] font-bold text-[#2D2D32]">
                                    {formatoDinero(data.resumen.costos)}
                                </Text>

                            </View>

                            <View className="border-b border-[#ffe3e8]" />

                            <View className="flex-row items-center justify-between py-3">

                                <Text className="text-[13px] font-semibold text-[#2D2D32]">
                                    Utilidad
                                </Text>

                                <Text className="text-[14px] font-bold text-[#65b887]">
                                    {formatoDinero(data.resumen.utilidad)}
                                </Text>

                            </View>

                        </View>

                    </View>

                </ScrollView>

            </View>
        </>
    );
}