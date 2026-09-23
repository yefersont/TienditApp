import { ActivityIndicator, View } from 'react-native';

export default function Loader() {
    return (
        <View className="flex-1 items-center justify-center bg-[#fff7f8]">
            <ActivityIndicator
                size="large"
                color="#e57d90"
            />
        </View>
    );
}