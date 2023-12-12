import { Image, SafeAreaView, StatusBar, StyleSheet, Text, View } from "react-native";
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
    <ScrollView contentContainerStyle={styles.contentContainerStyle}>
      <SafeAreaView style={styles.container}>
        <Svg width="100%" height="100%">
          <Circle
            cx="50%"
            cy="10%"
            r="70%"
            fill={typeIcon.color}
          />
          <View style={styles.iconContainer}>
            <Image
              style={styles.icon}
              source={typeIcon.icon}
            />
          </View>
        </Svg>
      </SafeAreaView>
      <View style={styles.item}>
        <Image
          style={styles.image}
          resizeMode="contain"
          source={{ uri: cardById?.images?.large }}
        />
      </View>
      <View style={styles.desc}>
        <CustomFont font={'Poppins'} style={styles.name}>{cardById.name}</CustomFont>
        <Text style={styles.texte}>
          Made by {cardById.artist}
        </Text>
        <Text style={styles.texte}>
          {cardById.flavorText}
        </Text>
        <Text style={{ paddingTop: 10, fontWeight: 'bold'}}>
          Attacks and abilities :
        </Text>
        <View style={styles.texte}>
          {cardById.abilities?.map((ability) => (
            <View style={styles.texte} key={ability.name}>
              <Text>{ability.name} : {ability.text}</Text>
            </View>
          ))}
          {cardById.attacks?.map((attack) => (
            <View style={styles.texte} key={attack.name}>
              <Text>{attack.name} : {attack.text}</Text>
            </View>
          ))}
        </View>
      </View>
    </ScrollView>
  );
};


const styles = StyleSheet.create({
  contentContainerStyle: {
    flexGrow: 1,
    justifyContent: 'space-between'
  },
  container: {
    flex: 1,
    alignItems: 'center',
    bottom: 50
  },
  iconContainer: {
    padding: 90,
    alignItems: 'center'
  },
  icon: {
    width: 80,
    height: 80,
  },
  item: {
    alignItems: 'center',
    top: -50
  },
  image: {
    width: 500,
    height: 500,
  },
  name: {
    fontSize: 25,
  },
  texte: {
    paddingTop: 10
  },
  desc: {
    alignItems: 'center',
    marginLeft: 15,
    marginRight: 15,
    marginBottom: 15
  }
});
