import { ActivityIndicator, View } from 'react-native';

export default function Loader() {
    return (
        <View className="flex-1 items-center justify-center">
            <ActivityIndicator
                size="large"
                color="#e57d90"
            />
        </View>
    );
}