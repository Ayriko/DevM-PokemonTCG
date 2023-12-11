import { FlatList, Image, SafeAreaView, StatusBar, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { Link, useLocalSearchParams } from "expo-router";
import { useGetCardById } from "../hooks/useGetCards";
import React from "react";
import Svg, { Circle } from "react-native-svg";

type Type = 'water';
//customiser pour la couleur du fond, revoir le fill

export const CardDetailComponent = () => {
  const params = useLocalSearchParams() as { cardId: string };
  const { data: cardById, isLoading } = useGetCardById(params.cardId);

  console.log(cardById);
  const magikarp = {
    name: 'Magikarp',
    types: 'water' as Type,
    id: '1',
    set: {
      name: "Paldea Evolved",
      series: "Scarlet & Violet",
    },
    rarity: "Illustration Rare",
    images: {
      small: "https://images.pokemontcg.io/sv2/203.png",
      large: "https://images.pokemontcg.io/sv2/203_hires.png",
    },
  };

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

  const typeIcons = {
    water: require('../assets/icons/water.png'),
    plant: require('../assets/icons/plant.png'),
    fire: require('../assets/icons/fire.png'),
    electric: require('../assets/icons/electric.png'),
    normal: require('../assets/icons/normal.png'),
    flying: require('../assets/icons/flying.png'),
    fighting: require('../assets/icons/fighting.png'),
    poison: require('../assets/icons/poison.png'),
    ground: require('../assets/icons/ground.png'),
    rock: require('../assets/icons/rock.png'),
    bug: require('../assets/icons/bug.png'),
    ghost: require('../assets/icons/ghost.png'),
    steel: require('../assets/icons/steel.png'),
    dragon: require('../assets/icons/dragon.png'),
    fairy: require('../assets/icons/fairy.png'),
    ice: require('../assets/icons/ice.png'),
    psychic: require('../assets/icons/psychic.png'),
    dark: require('../assets/icons/dark.png')
  };

  const typeIcon = typeIcons[magikarp.types];

  return (
    <SafeAreaView style={styles.container}>
      <Svg style={styles.svg} width="100%" height="30%" viewBox="0 0 100 50">
        <Circle
          cx="50%"
          cy="0%"
          r="65%"
          fill={magikarp.types === 'water' ? '#add8e6' : 'gray'}
        />
      </Svg>
      <View style={styles.iconContainer}>
        <Image
          style={styles.icon}
          source={typeIcon}
        />
      </View>
      <Text style={styles.name}>{magikarp.name}</Text>
      <View style={styles.item}>
        <Image
          style={styles.image}
          resizeMode="contain"
          source={{ uri: magikarp?.images?.large || 'default.png' }}
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: StatusBar.currentHeight || 0,
  },
  svg: {
    position: 'absolute',
    top: 0,
  },
  iconContainer: {
    position: 'absolute',
    top: 10,
    zIndex: 2,
  },
  icon: {
    width: 80,
    height: 80,
  },
  name: {
    marginTop: 10,
    marginBottom: 8,
    fontSize: 20,
    fontWeight: 'bold',
    color: 'white',
    zIndex: 1,
  },
  item: {
    marginVertical: 8,
    overflow: 'hidden',
    borderRadius: 20,
    width: '125%',
    aspectRatio: 1,
    zIndex: 1
  },
  image: {
    width: '100%',
    height: '100%',
    zIndex: 2
  },
});
