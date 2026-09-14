import React, { useRef } from 'react';
import {
    Animated,
    Dimensions,
    Easing,
    Modal,
    Pressable,
    Text,
    View,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import {
    X,
    Home,
    Package,
    ShoppingCart,
    BarChart3,
    Settings,
    LogOut,
} from 'lucide-react-native';

type AsideMenuProps = {
    visible: boolean;
    sucursalNombre?: string;
    onClose: () => void;
    onSalir: () => void;
};
0
const screenWidth = Dimensions.get('window').width;
const asideWidth = screenWidth * 0.70;

export default function AsideMenu({
    visible,
    onClose,
    onSalir,
}: AsideMenuProps) {

    const slideAnim = useRef(
        new Animated.Value(asideWidth)
    ).current;

    const overlayAnim = useRef(
        new Animated.Value(0)
    ).current;


    const cerrarMenu = () => {

        Animated.parallel([
            Animated.timing(slideAnim, {
                toValue: asideWidth,
                duration: 50,
                easing: Easing.in(Easing.cubic),
                useNativeDriver: true,
            }),

            Animated.timing(overlayAnim, {
                toValue: 0,
                duration: 50,
                useNativeDriver: true,
            }),
        ]).start(() => {
            onClose();
        });
    };


    const seleccionarOpcion = (accion: () => void) => {

        Animated.parallel([
            Animated.timing(slideAnim, {
                toValue: asideWidth,
                duration: 120,
                easing: Easing.in(Easing.cubic),
                useNativeDriver: true,
            }),

            Animated.timing(overlayAnim, {
                toValue: 0,
                duration: 120,
                useNativeDriver: true,
            }),
        ]).start(() => {

            onClose();

            setTimeout(() => {
                accion();
            }, 50);

        });
    };


    React.useEffect(() => {

        if (visible) {

            slideAnim.setValue(asideWidth);
            overlayAnim.setValue(0);

            Animated.parallel([
                Animated.timing(slideAnim, {
                    toValue: 0,
                    duration: 280,
                    easing: Easing.out(Easing.cubic),
                    useNativeDriver: true,
                }),

                Animated.timing(overlayAnim, {
                    toValue: 1,
                    duration: 280,
                    useNativeDriver: true,
                }),
            ]).start();

        }

    }, [visible]);


    return (
        <Modal
            visible={visible}
            transparent
            animationType="none"
            onRequestClose={cerrarMenu}
        >

            <View className="flex-1 flex-row">

                {/* Fondo oscuro */}

                <Animated.View
                    style={{
                        flex: 1,
                        opacity: overlayAnim,
                        backgroundColor: 'rgba(0,0,0,0.45)',
                    }}
                >

                    <Pressable
                        onPress={cerrarMenu}
                        className="flex-1"
                    />

                </Animated.View>


                {/* Aside */}

                <Animated.View
                    style={{
                        width: asideWidth,
                        transform: [
                            {
                                translateX: slideAnim,
                            },
                        ],
                    }}
                    className="h-full bg-white"
                >

                    <SafeAreaView
                        edges={['top', 'bottom']}
                        className="flex-1"
                    >

                        {/* Header del aside */}

                        <View className="bg-[#e57d90] px-5 pb-6 pt-4">

                            <View className="mb-4 flex-row items-center justify-between">

                                <View>

                                    <Text className="text-[22px] font-bold text-white">
                                        Opciones
                                    </Text>

                                </View>


                                <Pressable
                                    onPress={cerrarMenu}
                                    hitSlop={10}
                                    className="h-9 w-9 items-center justify-center rounded-full bg-white/15 active:bg-white/25"
                                >
                                    <X
                                        color="#ffffff"
                                        size={22}
                                    />

                                </Pressable>

                            </View>

                        </View>


                        {/* Opciones */}

                        <View className="flex-1 px-4 pt-5">

                            {/* Opciones principales */}

                            <View className="flex-1">

                                {/* Aquí irán las opciones principales */}

                            </View>


                            {/* Opciones inferiores */}

                            <View className="pb-2">

                                {/* Separador */}

                                <View className="mb-4 h-[1px] bg-[#eeeeee]" />


                                {/* Configuración */}

                                <Pressable
                                    onPress={() =>
                                        seleccionarOpcion(() => {
                                            // Navegación a Configuración
                                        })
                                    }
                                    className="mb-2 flex-row items-center rounded-[14px] px-4 py-3.5 active:bg-[#fff0f2]"
                                >

                                    <Settings
                                        color="#777777"
                                        size={21}
                                    />

                                    <Text className="ml-4 text-[15px] font-medium text-[#2D2D32]">
                                        Configuración
                                    </Text>

                                </Pressable>


                                {/* Cerrar sesión */}

                                <Pressable
                                    onPress={() =>
                                        seleccionarOpcion(() => {
                                            onSalir();
                                        })
                                    }
                                    className="flex-row items-center rounded-[14px] px-4 py-3.5 active:bg-[#fff0f2]"
                                >

                                    <LogOut
                                        color="#777777"
                                        size={21}
                                    />

                                    <Text className="ml-4 text-[15px] font-medium text-[#2D2D32]">
                                        Cerrar sesión
                                    </Text>

                                </Pressable>

                            </View>

                        </View>

                        {/* Footer */}
                        <View className="border-t border-[#eeeeee] px-5 py-4">
                            <Text className="mt-1 text-center text-[10px] text-[#bbbbbb]">
                                Desarrollado por
                            </Text>
                            <Text className="text-center text-[11px] text-[#999999]">
                                TellZar
                            </Text>
                        </View>
                    </SafeAreaView>
                </Animated.View>

            </View>

        </Modal>
    );
}
