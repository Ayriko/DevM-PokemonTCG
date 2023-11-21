import { Pressable, View, Text } from 'react-native';
import { Link } from 'expo-router';
import { HomePage } from '../components/homePage';
import { useFonts } from 'expo-font';

export default function Page() {
  const [fontsLoaded] = useFonts({
    'Pokemon-Solid': require('../assets/fonts/pokemonsolid.ttf')
  })

  if (!fontsLoaded) {
    return <Text>Loading...</Text>;
  }

  return (
    <View>
      <HomePage />
    </View>
  );
}