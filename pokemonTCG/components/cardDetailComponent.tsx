import {FlatList, Image, SafeAreaView, StatusBar, StyleSheet, Text, View} from "react-native";
import { useLocalSearchParams } from "expo-router";
import { useGetCardById } from "../hooks/useGetCards";
import React from "react";
import Svg, { Circle } from "react-native-svg";
import { CustomFont } from "./customFont";
import { ScrollView } from "react-native-gesture-handler";

export const CardDetailComponent = () => {
  const params = useLocalSearchParams() as { cardId: string };
  const { data: cardById, isLoading } = useGetCardById(params.cardId);

  if (isLoading) {
    return (
      <SafeAreaView style={styles.container}>
        <Text>Loading...</Text>
      </SafeAreaView>
    );
  }

  if (!cardById) {
    return (
      <SafeAreaView style={styles.container}>
        <Text>Card not found or loading error</Text>
      </SafeAreaView>
    );
  }

  const typeIcons: Record<string, { icon: any; color: string }> = {
    Water: { icon: require('../assets/icons/water.png'), color: '#3498db' },
    Grass: { icon: require('../assets/icons/plant.png'), color: '#63BC5A' },
    Fire: { icon: require('../assets/icons/fire.png'), color: '#FF9D55' },
    Lightning: { icon: require('../assets/icons/electric.png'), color: '#F4D23C' },
    Colorless: { icon: require('../assets/icons/normal.png'), color: '#919AA2' },
    Flying: { icon: require('../assets/icons/flying.png'), color: '#89AAE3' },
    Fighting: { icon: require('../assets/icons/fighting.png'), color: '#CE416B' },
    Poison: { icon: require('../assets/icons/poison.png'), color: '#B567CE' },
    Ground: { icon: require('../assets/icons/ground.png'), color: '#D97845' },
    Rock: { icon: require('../assets/icons/rock.png'), color: '#C5B78C' },
    Bug: { icon: require('../assets/icons/bug.png'), color: '#91C12F' },
    Ghost: { icon: require('../assets/icons/ghost.png'), color: '#5269AD' },
    Metal: { icon: require('../assets/icons/steel.png'), color: '#5A8EA2' },
    Dragon: { icon: require('../assets/icons/dragon.png'), color: '#0B6DC3' },
    Fairy: { icon: require('../assets/icons/fairy.png'), color: '#EC8FE6' },
    Ice: { icon: require('../assets/icons/ice.png'), color: '#73CEC0' },
    Psychic: { icon: require('../assets/icons/psychic.png'), color: '#FA7179' },
    Darkness: { icon: require('../assets/icons/dark.png'), color: '#5A5465' },
  };

  const typeIcon = typeIcons[cardById.types?.[0] ?? 'Colorless'];

  return (
    <ScrollView contentContainerStyle={styles.scrollViewContainer}>
      <SafeAreaView style={styles.container}>
        <Svg style={styles.svg} width="100%" height="30%" viewBox="0 0 100 50">
          <Circle
            cx="50%"
            cy="15%"
            r="70%"
            fill={typeIcon.color}
          />
        </Svg>
        <View style={styles.iconContainer}>
          <Image
            style={styles.icon}
            source={typeIcon.icon}
          />
        </View>
        <View style={styles.item}>
          <Image
            style={styles.image}
            resizeMode="contain"
            source={{ uri: cardById?.images?.large || 'default.png' }}
          />
        </View>
      </SafeAreaView>
      <View style={{ paddingLeft: 16 }}>
        <CustomFont font={'Poppins'} style={styles.name}>{cardById.name}</CustomFont>
        <Text>
          {cardById.flavorText}
        </Text>
      </View>
    </ScrollView>
  );
};


const styles = StyleSheet.create({
  scrollViewContainer: {
    flexGrow: 1,
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: StatusBar.currentHeight ?? 0,
  },
  svg: {
    position: 'absolute',
    top: 0,
  },
  iconContainer: {
    top: 10,
  },
  icon: {
    width: 80,
    height: 80,
  },
  name: {
    marginBottom: 8,
    fontSize: 25,
  },
  item: {
    borderRadius: 20,
    width: '125%',
    aspectRatio: 1,
  },
  image: {
    width: '100%',
    height: '100%',
    marginTop: 25
  },
});
