import { Pressable, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { ArrowLeft, Menu } from 'lucide-react-native';

type AppHeaderProps = {
    titulo: string;
    subtitulo?: string;
    onBack: () => void;
    onMenu?: () => void;
};

export default function AppHeader({
    titulo,
    subtitulo,
    onBack,
    onMenu,
}: AppHeaderProps) {
    return (
        <View className="rounded-b-[28px] bg-[#e57d90]">
            <SafeAreaView edges={['top']}>
                <View className="h-[80px] items-center justify-center">

                    {/* Botón atrás */}
                    <Pressable
                        onPress={onBack}
                        hitSlop={12}
                        className="absolute left-4 top-1/2 -mt-4 h-8 w-8 items-center justify-center rounded-full active:bg-white/15"
                    >
                        <ArrowLeft
                            color="#ffffff"
                            size={22}
                        />
                    </Pressable>

                    <Text className="mt-1 text-[24px] font-bold text-white">
                        {titulo}
                    </Text>

                    {subtitulo && (
                        <Text className="mt-0.5 text-[12px] text-white/80">
                            {subtitulo}
                        </Text>
                    )}

                    {/* Botón menú */}
                    {onMenu && (
                        <Pressable
                            onPress={onMenu}
                            hitSlop={12}
                            className="absolute right-4 top-1/2 -mt-4 h-8 w-8 items-center justify-center rounded-full active:bg-white/15"
                        >
                            <Menu
                                color="#ffffff"
                                size={22}
                            />
                        </Pressable>
                    )}

                </View>
            </SafeAreaView>
        </View>
    );
}