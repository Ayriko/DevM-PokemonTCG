import { useFonts } from 'expo-font';
import { preventAutoHideAsync } from 'expo-splash-screen';
import { Stack } from 'expo-router';
import { QueryClient, QueryClientProvider, } from '@tanstack/react-query';

// Create a client
const queryClient = new QueryClient()

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
        <QueryClientProvider client={queryClient}>
            <Stack screenOptions={{ headerShown: false }} />
        </QueryClientProvider>
    )
}