import { useCallback } from 'react';
import { View } from 'react-native';
import { HomePage } from '../components/homePage';
import { useFonts } from 'expo-font';
import { hideAsync, preventAutoHideAsync } from 'expo-splash-screen';

preventAutoHideAsync();

export default function Page() {
  const [fontsLoaded] = useFonts({
    'Pokemon-Solid': require('../assets/fonts/PokemonSolidNormal-xyWR.ttf')
  });

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }

  return (
    <View onLayout={onLayoutRootView}>
      <HomePage />
    </View>
  );
}
