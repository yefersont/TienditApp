import {
    KeyboardAvoidingView,
    Modal,
    Platform,
    Pressable,
    Text,
    TextInput,
    View,
} from 'react-native';
import { useState } from 'react';
import { Store, MapPin, Phone, X } from 'lucide-react-native';
import API_URL from '../services/apis';

type ModalCrearSucursalProps = {
    visible: boolean;
    onClose: () => void;
    onCreada: () => void;
};

export default function ModalCrearSucursal({
    visible,
    onClose,
    onCreada,
}: ModalCrearSucursalProps) {
    const [nombre, setNombre] = useState('');
    const [direccion, setDireccion] = useState('');
    const [telefono, setTelefono] = useState('');
    const [guardando, setGuardando] = useState(false);
    const [campoActivo, setCampoActivo] = useState<
        'nombre' | 'direccion' | 'telefono' | null
    >(null);

    const crearSucursal = async () => {
        if (!nombre.trim()) {
            return;
        }

        try {
            setGuardando(true);

            const response = await fetch(`${API_URL}/sucursales`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    nombre: nombre.trim(),
                    direccion: direccion.trim() || undefined,
                    telefono: telefono.trim() || undefined,
                }),
            });

            if (!response.ok) {
                throw new Error('Error al crear la sucursal');
            }

            setNombre('');
            setDireccion('');
            setTelefono('');

            onClose();
            onCreada();
        } catch (error) {
            console.error('Error creando sucursal:', error);
        } finally {
            setGuardando(false);
        }
    };

    const cerrarModal = () => {
        if (guardando) return;

        setNombre('');
        setDireccion('');
        setTelefono('');

        onClose();
    };

    const bordeCampo = (campo: typeof campoActivo) =>
        campoActivo === campo ? '#e57d90' : '#fdb4bf';

    return (
        <Modal
            visible={visible}
            transparent
            animationType="slide"
            onRequestClose={cerrarModal}
        >
            <KeyboardAvoidingView
                className="flex-1"
                behavior={Platform.OS === 'ios' ? 'padding' : undefined}
            >
                {/* Fondo oscuro */}
                <Pressable
                    className="flex-1 justify-end bg-black/40"
                    onPress={cerrarModal}
                >
                    {/* Modal */}
                    <Pressable
                        className="rounded-t-[32px] bg-[#fff7f8] px-6 pb-8 pt-4"
                        onPress={(event) => event.stopPropagation()}
                        style={{
                            shadowColor: '#000',
                            shadowOpacity: 0.15,
                            shadowRadius: 20,
                            shadowOffset: { width: 0, height: -6 },
                        }}
                    >
                        {/* Indicador */}
                        <View className="mb-4 items-center">
                            <View className="h-1.5 w-12 rounded-full bg-[#fdb4bf]" />
                        </View>

                        {/* Encabezado */}
                        <View className="mb-6 flex-row items-start justify-between">
                            <View className="flex-1 pr-4">


                                <Text className="text-[24px] font-bold text-[#2D2D32]">
                                    Nueva sucursal
                                </Text>

                                <Text className="mt-1 text-[14px] leading-[20px] text-[#a15f6d]">
                                    Ingresa los datos de la nueva sucursal.
                                </Text>
                            </View>

                            <Pressable
                                onPress={cerrarModal}
                                disabled={guardando}
                                hitSlop={10}
                                className="h-9 w-9 items-center justify-center rounded-full bg-white active:bg-[#ffe3e8]"
                            >
                                <X color="#a15f6d" size={18} />
                            </Pressable>
                        </View>

                        {/* Nombre */}
                        <Text className="mb-2 text-[14px] font-semibold text-[#2D2D32]">
                            Nombre{' '}
                            <Text className="text-[#e57d90]">*</Text>
                        </Text>

                        <View
                            className="mb-4 flex-row items-center rounded-2xl bg-white px-4"
                            style={{
                                borderWidth: 1.5,
                                borderColor: bordeCampo('nombre'),
                            }}
                        >
                            <Store color="#c59aa3" size={18} />
                            <TextInput
                                value={nombre}
                                onChangeText={setNombre}
                                onFocus={() => setCampoActivo('nombre')}
                                onBlur={() => setCampoActivo(null)}
                                placeholder="Ej. Sucursal Centro"
                                placeholderTextColor="#c59aa3"
                                className="ml-3 flex-1 py-3.5 text-[16px] text-[#2D2D32]"
                            />
                        </View>

                        {/* Dirección */}
                        <Text className="mb-2 text-[14px] font-semibold text-[#2D2D32]">
                            Dirección{' '}
                            <Text className="text-[#e57d90]">*</Text>
                        </Text>

                        <View
                            className="mb-4 flex-row items-center rounded-2xl bg-white px-4"
                            style={{
                                borderWidth: 1.5,
                                borderColor: bordeCampo('direccion'),
                            }}
                        >
                            <MapPin color="#c59aa3" size={18} />
                            <TextInput
                                value={direccion}
                                onChangeText={setDireccion}
                                onFocus={() => setCampoActivo('direccion')}
                                onBlur={() => setCampoActivo(null)}
                                placeholder="Ej. Calle 20 # 8-35"
                                placeholderTextColor="#c59aa3"
                                className="ml-3 flex-1 py-3.5 text-[16px] text-[#2D2D32]"
                            />
                        </View>

                        {/* Teléfono */}
                        <Text className="mb-2 text-[14px] font-semibold text-[#2D2D32]">
                            Teléfono{' '}
                            <Text className="text-[#a15f6d]">(Opcional)</Text>
                        </Text>

                        <View
                            className="mb-6 flex-row items-center rounded-2xl bg-white px-4"
                            style={{
                                borderWidth: 1.5,
                                borderColor: bordeCampo('telefono'),
                            }}
                        >
                            <Phone color="#c59aa3" size={18} />
                            <TextInput
                                value={telefono}
                                onChangeText={setTelefono}
                                onFocus={() => setCampoActivo('telefono')}
                                onBlur={() => setCampoActivo(null)}
                                placeholder="Ej. 3001234567"
                                placeholderTextColor="#c59aa3"
                                keyboardType="phone-pad"
                                className="ml-3 flex-1 py-3.5 text-[16px] text-[#2D2D32]"
                            />
                        </View>

                        {/* Crear */}
                        <Pressable
                            onPress={crearSucursal}
                            disabled={guardando || !nombre.trim()}
                            className={`items-center rounded-2xl py-4 ${guardando || !nombre.trim()
                                ? 'bg-[#fdb4bf]'
                                : 'bg-[#e57d90] active:bg-[#d16a7d]'
                                }`}
                            style={
                                !guardando && nombre.trim()
                                    ? {
                                        shadowColor: '#e57d90',
                                        shadowOpacity: 0.3,
                                        shadowRadius: 10,
                                        shadowOffset: { width: 0, height: 4 },
                                        elevation: 3,
                                    }
                                    : undefined
                            }
                        >
                            <Text className="text-[16px] font-bold text-white">
                                {guardando ? 'Creando...' : 'Crear sucursal'}
                            </Text>
                        </Pressable>

                        {/* Cancelar */}
                        <Pressable
                            onPress={cerrarModal}
                            disabled={guardando}
                            className="mt-3 items-center py-2 active:opacity-60"
                        >
                            <Text className="text-[15px] font-semibold text-[#a15f6d]">
                                Cancelar
                            </Text>
                        </Pressable>
                    </Pressable>
                </Pressable>
            </KeyboardAvoidingView>
        </Modal>
    );
}