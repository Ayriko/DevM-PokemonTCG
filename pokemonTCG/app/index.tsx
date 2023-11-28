import { useCallback } from 'react';
import { View } from 'react-native';
import { HomePage } from '../components/homePage';
import { useFonts } from 'expo-font';
import { hideAsync, preventAutoHideAsync } from 'expo-splash-screen';
import {useGetSets} from "../hooks/useGetSets";
import {PokemonTCG} from "pokemon-tcg-sdk-typescript";

preventAutoHideAsync();

export default function Page() {
  const [fontsLoaded] = useFonts({
    'Pokemon-Solid': require('../assets/fonts/PokemonSolidNormal-xyWR.ttf'),
    'Poppins': require('../assets/fonts/Poppins-Regular.ttf')
  });

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return;
  }

  return (
    <View onLayout={onLayoutRootView}>
      <HomePage />
    </View>
  );
}
