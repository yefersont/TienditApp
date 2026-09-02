import {
    KeyboardAvoidingView,
    Modal,
    Platform,
    Pressable,
    ScrollView,
    Text,
    TextInput,
    View,
} from 'react-native';
import { Stack, router, useLocalSearchParams } from 'expo-router';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useState } from 'react';
import {
    ArrowLeft,
    Tag,
    ChevronDown,
    Check,
    Boxes,
    AlignLeft,
    Barcode,
} from 'lucide-react-native';
import API_URL from '../../services/apis';


// =========================
// DATOS DE EJEMPLO
// (vendrán del modelo Categoria)
// =========================

const categorias = [
    {
        id: '69771c72-ddb9-490d-b0db-d010f8dab5d8',
        nombre: 'Bebidas',
    },
    {
        id: 'c9c4adc1-3a45-4760-a459-9db1a4220fd6',
        nombre: 'Snacks',
    },
    {
        id: '25b8ed21-21ce-4946-9a53-de1b6220acec',
        nombre: 'Lácteos',
    },
    {
        id: '2510565e-5fc9-4273-a1a3-4958a1533b11',
        nombre: 'Aseo',
    },
    {
        id: 'fef5d219-4dea-4588-b2e1-9bce99e2ceb4',
        nombre: 'Alimentos',
    },
    {
        id: '2a987dbe-f067-4873-b592-74b940da3f3a',
        nombre: 'Confitería',
    },
];

type Campo =
    | 'nombre'
    | 'precioCompra'
    | 'precioVenta'
    | 'cantidad'
    | 'stockMinimo'
    | 'descripcion'
    | 'codigoBarras';

export default function NuevoProductoScreen() {
    const { sucursalNombre } = useLocalSearchParams<{
        sucursalId: string;
        sucursalNombre: string;
    }>();

    const [nombre, setNombre] = useState('');
    const [categoriaId, setCategoriaId] = useState<string | null>(null);
    const [precioCompra, setPrecioCompra] = useState('');
    const [precioVenta, setPrecioVenta] = useState('');
    const [cantidad, setCantidad] = useState('');
    const [stockMinimo, setStockMinimo] = useState('');
    const [descripcion, setDescripcion] = useState('');
    const [codigoBarras, setCodigoBarras] = useState('');
    const { sucursalId } = useLocalSearchParams();
    const [guardando, setGuardando] = useState(false);
    const [campoActivo, setCampoActivo] = useState<Campo | null>(null);
    const [selectorVisible, setSelectorVisible] = useState(false);

    const categoriaSeleccionada = categorias.find(
        (c) => c.id === categoriaId
    );

    const formularioValido = nombre.trim() && categoriaId && precioVenta.trim();

    const bordeCampo = (campo: Campo) =>
        campoActivo === campo ? '#e57d90' : '#fdb4bf';

    const formatearMiles = (valor: string) => {
        const soloNumeros = valor.replace(/[^0-9]/g, '');
        if (!soloNumeros) return '';
        return Number(soloNumeros).toLocaleString('en-US');
    };

    const manejarCambioPrecioCompra = (texto: string) => {
        setPrecioCompra(formatearMiles(texto));
    };

    const manejarCambioPrecioVenta = (texto: string) => {
        setPrecioVenta(formatearMiles(texto));
    };

    const crearProducto = async () => {
        console.log('Iniciando creación de producto');

        if (!formularioValido) {
            console.log('Formulario no válido');
            return;
        }

        try {
            setGuardando(true);

            const payload = {
                sucursalId,
                nombre: nombre.trim(),
                categoriaId,
                precioCompra: Number(precioCompra.replace(/,/g, '')) || 0,
                precioVenta: Number(precioVenta.replace(/,/g, '')) || 0,
                cantidad: Number(cantidad) || 0,
                stockMinimo: Number(stockMinimo) || 0,
                descripcion: descripcion.trim() || undefined,
                codigoBarras: codigoBarras.trim() || undefined,
            };

            console.log('Enviando producto:', payload);

            const response = await fetch(`${API_URL}/inventario`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(payload),
            });

            const data = await response.json();

            console.log('Respuesta del backend:', data);

            if (!response.ok) {
                console.log('Error al crear producto:', data.message);
                throw new Error(data.message || 'Error al crear el producto');
            }
            console.log('Producto creado correctamente');

            router.back();

        } catch (error) {
            console.error('Error creando producto:', error);
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
                                    Nuevo producto
                                </Text>

                                {sucursalNombre ? (
                                    <Text className="mt-0.5 text-[13px] text-[#ffe3e8]">
                                        {sucursalNombre}
                                    </Text>
                                ) : null}
                            </View>
                        </View>
                    </SafeAreaView>
                </View>

                <KeyboardAvoidingView
                    className="flex-1"
                    behavior={Platform.OS === 'ios' ? 'padding' : undefined}
                >
                    <ScrollView
                        className="flex-1"
                        showsVerticalScrollIndicator={false}
                        contentContainerStyle={{
                            paddingHorizontal: 20,
                            paddingTop: 24,
                            paddingBottom: 40,
                        }}
                        keyboardShouldPersistTaps="handled"
                    >
                        {/* Nombre */}
                        <Campo label="Nombre" requerido>
                            <View
                                className="flex-row items-center rounded-2xl bg-white px-4"
                                style={{
                                    borderWidth: 1.5,
                                    borderColor: bordeCampo('nombre'),
                                }}
                            >
                                <Tag color="#c59aa3" size={18} />
                                <TextInput
                                    value={nombre}
                                    onChangeText={setNombre}
                                    onFocus={() => setCampoActivo('nombre')}
                                    onBlur={() => setCampoActivo(null)}
                                    placeholder="Ej. Sprite 400ml"
                                    placeholderTextColor="#c59aa3"
                                    className="ml-3 flex-1 py-3.5 text-[16px] text-[#2D2D32]"
                                />
                            </View>
                        </Campo>

                        {/* Categoría */}
                        <Campo label="Categoría" requerido>
                            <Pressable
                                onPress={() => setSelectorVisible(true)}
                                className="flex-row items-center justify-between rounded-2xl border border-[#fdb4bf] bg-white px-4 py-3.5"
                            >
                                <Text
                                    className="text-[16px]"
                                    style={{
                                        fontWeight: categoriaSeleccionada
                                            ? '600'
                                            : '400',
                                        color: categoriaSeleccionada
                                            ? '#2D2D32'
                                            : '#c59aa3',
                                    }}
                                >
                                    {categoriaSeleccionada?.nombre ??
                                        'Selecciona una categoría'}
                                </Text>
                                <ChevronDown color="#a15f6d" size={18} />
                            </Pressable>
                        </Campo>

                        {/* Precios */}
                        <View className="mb-4 flex-row gap-3">
                            <View className="flex-1">
                                <Campo label="Precio de compra">
                                    <View
                                        className="flex-row items-center rounded-2xl bg-white px-4"
                                        style={{
                                            borderWidth: 1.5,
                                            borderColor: bordeCampo(
                                                'precioCompra'
                                            ),
                                        }}
                                    >
                                        <Text className="text-[16px] font-semibold text-[#a15f6d]">
                                            $
                                        </Text>
                                        <TextInput
                                            value={precioCompra}
                                            onChangeText={manejarCambioPrecioCompra}
                                            onFocus={() =>
                                                setCampoActivo('precioCompra')
                                            }
                                            onBlur={() => setCampoActivo(null)}
                                            placeholder="2,000"
                                            placeholderTextColor="#c59aa3"
                                            keyboardType="numeric"
                                            className="ml-2 flex-1 py-3.5 text-[16px] text-[#2D2D32]"
                                        />
                                    </View>
                                </Campo>
                            </View>

                            <View className="flex-1">
                                <Campo label="Precio de venta" requerido>
                                    <View
                                        className="flex-row items-center rounded-2xl bg-white px-4"
                                        style={{
                                            borderWidth: 1.5,
                                            borderColor: bordeCampo(
                                                'precioVenta'
                                            ),
                                        }}
                                    >
                                        <Text className="text-[16px] font-semibold text-[#a15f6d]">
                                            $
                                        </Text>
                                        <TextInput
                                            value={precioVenta}
                                            onChangeText={manejarCambioPrecioVenta}
                                            onFocus={() =>
                                                setCampoActivo('precioVenta')
                                            }
                                            onBlur={() => setCampoActivo(null)}
                                            placeholder="3,000"
                                            placeholderTextColor="#c59aa3"
                                            keyboardType="numeric"
                                            className="ml-2 flex-1 py-3.5 text-[16px] text-[#2D2D32]"
                                        />
                                    </View>
                                </Campo>
                            </View>
                        </View>

                        {/* Cantidad inicial + Stock mínimo */}
                        <View className="mb-4 flex-row gap-3">
                            <View className="flex-1">
                                <Campo label="Cantidad inicial">
                                    <View
                                        className="flex-row items-center rounded-2xl bg-white px-4"
                                        style={{
                                            borderWidth: 1.5,
                                            borderColor:
                                                bordeCampo('cantidad'),
                                        }}
                                    >
                                        <Boxes color="#c59aa3" size={18} />
                                        <TextInput
                                            value={cantidad}
                                            onChangeText={setCantidad}
                                            onFocus={() =>
                                                setCampoActivo('cantidad')
                                            }
                                            onBlur={() => setCampoActivo(null)}
                                            placeholder="10"
                                            placeholderTextColor="#c59aa3"
                                            keyboardType="numeric"
                                            className="ml-3 flex-1 py-3.5 text-[16px] text-[#2D2D32]"
                                        />
                                    </View>
                                </Campo>
                            </View>

                            <View className="flex-1">
                                <Campo label="Stock mínimo">
                                    <View
                                        className="flex-row items-center rounded-2xl bg-white px-4"
                                        style={{
                                            borderWidth: 1.5,
                                            borderColor:
                                                bordeCampo('stockMinimo'),
                                        }}
                                    >
                                        <Boxes color="#c59aa3" size={18} />
                                        <TextInput
                                            value={stockMinimo}
                                            onChangeText={setStockMinimo}
                                            onFocus={() =>
                                                setCampoActivo('stockMinimo')
                                            }
                                            onBlur={() => setCampoActivo(null)}
                                            placeholder="5"
                                            placeholderTextColor="#c59aa3"
                                            keyboardType="numeric"
                                            className="ml-3 flex-1 py-3.5 text-[16px] text-[#2D2D32]"
                                        />
                                    </View>
                                </Campo>
                            </View>
                        </View>

                        {/* Descripción */}
                        <Campo label="Descripción">
                            <View
                                className="flex-row items-start rounded-2xl bg-white px-4 py-3.5"
                                style={{
                                    borderWidth: 1.5,
                                    borderColor: bordeCampo('descripcion'),
                                }}
                            >
                                <AlignLeft
                                    color="#c59aa3"
                                    size={18}
                                    style={{ marginTop: 2 }}
                                />
                                <TextInput
                                    value={descripcion}
                                    onChangeText={setDescripcion}
                                    onFocus={() =>
                                        setCampoActivo('descripcion')
                                    }
                                    onBlur={() => setCampoActivo(null)}
                                    placeholder="Ej. Gaseosa Sprite 400ml"
                                    placeholderTextColor="#c59aa3"
                                    multiline
                                    numberOfLines={2}
                                    className="ml-3 flex-1 text-[16px] text-[#2D2D32]"
                                    style={{ minHeight: 40, paddingTop: 0 }}
                                />
                            </View>
                        </Campo>

                        {/* Código de barras */}
                        <Campo label="Código de barras">
                            <View
                                className="flex-row items-center rounded-2xl bg-white px-4"
                                style={{
                                    borderWidth: 1.5,
                                    borderColor: bordeCampo('codigoBarras'),
                                }}
                            >
                                <Barcode color="#c59aa3" size={18} />
                                <TextInput
                                    value={codigoBarras}
                                    onChangeText={setCodigoBarras}
                                    onFocus={() =>
                                        setCampoActivo('codigoBarras')
                                    }
                                    onBlur={() => setCampoActivo(null)}
                                    placeholder="Opcional"
                                    placeholderTextColor="#c59aa3"
                                    className="ml-3 flex-1 py-3.5 text-[16px] text-[#2D2D32]"
                                />
                            </View>
                        </Campo>

                        {/* Botón */}
                        <Pressable
                            onPress={crearProducto}
                            disabled={guardando || !formularioValido}
                            className="mt-4 items-center rounded-2xl py-4"
                            style={{
                                backgroundColor:
                                    guardando || !formularioValido
                                        ? '#fdb4bf'
                                        : '#e57d90',
                                ...(!guardando && formularioValido
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
                            <Text className="text-[16px] font-bold uppercase tracking-wide text-white">
                                {guardando ? 'Agregando...' : 'Agregar producto'}
                            </Text>
                        </Pressable>
                    </ScrollView>
                </KeyboardAvoidingView>
            </View>

            {/* Selector de categoría */}
            <Modal
                visible={selectorVisible}
                transparent
                animationType="slide"
                onRequestClose={() => setSelectorVisible(false)}
            >
                <Pressable
                    className="flex-1 justify-end bg-black/40"
                    onPress={() => setSelectorVisible(false)}
                >
                    <Pressable
                        className="rounded-t-[32px] bg-[#fff7f8] px-6 pb-8 pt-5"
                        onPress={(event) => event.stopPropagation()}
                    >
                        <View className="mb-5 items-center">
                            <View className="h-1.5 w-12 rounded-full bg-[#fdb4bf]" />
                        </View>

                        <Text className="mb-4 text-[20px] font-bold text-[#2D2D32]">
                            Selecciona una categoría
                        </Text>

                        {categorias.map((categoria) => {
                            const seleccionada = categoria.id === categoriaId;

                            return (
                                <Pressable
                                    key={categoria.id}
                                    onPress={() => {
                                        setCategoriaId(categoria.id);
                                        setSelectorVisible(false);
                                    }}
                                    className="mb-3 flex-row items-center justify-between rounded-2xl px-4 py-3.5"
                                    style={{
                                        backgroundColor: seleccionada
                                            ? '#ffcdd4'
                                            : '#ffffff',
                                        borderWidth: seleccionada ? 0 : 1,
                                        borderColor: '#fdb4bf',
                                    }}
                                >
                                    <Text
                                        className="text-[15px]"
                                        style={{
                                            fontWeight: seleccionada
                                                ? '700'
                                                : '600',
                                            color: seleccionada
                                                ? '#e57d90'
                                                : '#2D2D32',
                                        }}
                                    >
                                        {categoria.nombre}
                                    </Text>

                                    {seleccionada && (
                                        <Check color="#e57d90" size={18} />
                                    )}
                                </Pressable>
                            );
                        })}
                    </Pressable>
                </Pressable>
            </Modal>
        </>
    );
}

// =========================
// COMPONENTE AUXILIAR: etiqueta de campo
// =========================

function Campo({
    label,
    requerido,
    children,
}: {
    label: string;
    requerido?: boolean;
    children: React.ReactNode;
}) {
    return (
        <View className="mb-4">
            <Text
                className="mb-2 text-[14px] font-semibold text-[#2D2D32]"
                numberOfLines={1}
            >
                {label}
                {requerido ? <Text className="text-[#e57d90]"> *</Text> : null}
            </Text>
            {children}
        </View>
    );
}
