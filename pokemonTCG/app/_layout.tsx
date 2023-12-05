import { useFonts } from 'expo-font';
import { preventAutoHideAsync } from 'expo-splash-screen';
import { Stack } from 'expo-router';

preventAutoHideAsync();

export default function StackLayout() {
    const [fontsLoaded] = useFonts({
        'Pokemon-Solid': require('../assets/fonts/PokemonSolidNormal-xyWR.ttf'),
        'Poppins': require('../assets/fonts/Poppins-Regular.ttf')
    });

    if (!fontsLoaded) {
        return null;
    }

    return (
        <Stack screenOptions={{ headerShown: false }} />
    )
}