import {
  View,
  StatusBar,
  SafeAreaView,
  StyleSheet,
  FlatList,
  Image,
  TouchableOpacity,
  ImageBackground, Pressable
} from 'react-native'
import React, { useState } from 'react'
import { useGetSets } from '../../hooks/useGetSets'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { PokemonTCG } from 'pokemon-tcg-sdk-typescript'
import { LinearGradient } from 'expo-linear-gradient';
import { CustomFont } from "../../components/customFont";
import { Link } from 'expo-router'

// Create a client
const queryClient = new QueryClient()

export default function App() {

  return (
    // Provide the client to your App
    <QueryClientProvider client={queryClient}>
      <Series />
    </QueryClientProvider>
  )
}

interface SetMap {
  [key: string]: PokemonTCG.Set[];
}

const image = [
  require('./../../assets/bg_pokemon_1.png'),
  require('./../../assets/bg_pokemon_2.png'),
  require('./../../assets/bg_pokemon_3.png'),
  require('./../../assets/bg_pokemon_4.png'),
  require('./../../assets/bg_pokemon_5.png'),
  require('./../../assets/bg_pokemon_6.png'),
  require('./../../assets/bg_pokemon_7.png'),
  require('./../../assets/bg_pokemon_8.png')
]

function Series() {
  const { data } = useGetSets()

  const listOfSetsFiltered: PokemonTCG.Set[] | undefined = data?.filter((set) => set.series !== 'Other' && set.series !== 'POP' && set.series !== 'E-Card' && set.series !== 'NP')
  const listOfSetsBySeries: SetMap | undefined = listOfSetsFiltered?.reduce((acc: SetMap, curr) => {
    if (!acc[curr.series]) {
      acc[curr.series] = [];
    }
    acc[curr.series].push(curr);
    return acc;
  }, {});

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      flexDirection: 'row',
      alignItems: "center",
      marginTop: StatusBar.currentHeight || 0,
    },
    item: {
      marginVertical: 8,
      marginHorizontal: 16,
      borderRadius: 20,
      flexDirection: 'row',
      alignItems: 'center',
      height: 120,
      overflow: 'hidden',
    },
    title: {
      fontSize: 32,
    },
    textAndSymbolContainer: {
      flex: 1, // Utilise tout l'espace disponible entre le texte et les symboles
      marginLeft: 10,
      justifyContent: 'center', // Pour aligner le texte et les symboles verticalement
    },
    textContainer: {
      fontFamily: 'Poppins',
      color: 'white',
      fontSize: 28,
      fontWeight: '600',
    },
    symbolContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: "flex-start",
      marginTop: 10,
      marginLeft: 160,
    },
    bg_image: {
      flex: 1,
      justifyContent: 'center',
    },
    image: {
      margin: 5,
      height: 50,
      width: 50,
    }
  });

  return (
    <SafeAreaView style={styles.container}>
      {listOfSetsBySeries && (
        <FlatList
          data={Object.keys(listOfSetsBySeries)}
          renderItem={({ item }) => (
            <View key={item}>
              <Link href={{
                pathname: "/sets",
                params: { setName: item }
              }} asChild>
                <TouchableOpacity>
                  <View style={styles.item}>
                    <ImageBackground
                      imageStyle={{ borderRadius: 20 }} source={image[generateRandomNumber() - 1]} resizeMode="cover"
                      style={styles.bg_image}>
                      <LinearGradient
                        start={{ x: 0, y: 0.5 }} end={{ x: 1, y: 0.5 }}
                        colors={['rgba(0,0,0,0.8)', 'transparent']} style={{
                          position: 'absolute',
                          left: 0,
                          right: 0,
                          top: 0,
                          height: '100%',
                          flex: 1,
                          borderRadius: 20,
                          paddingHorizontal: 10,
                        }} />
                      <View style={styles.textAndSymbolContainer}>
                        <CustomFont font={'Poppins'} style={styles.textContainer}>{item}</CustomFont>
                        <View style={styles.symbolContainer}>
                          <FlatList
                            horizontal
                            data={listOfSetsBySeries[item].slice(0, 3)}
                            renderItem={({ item }) => (
                              <Image
                                style={styles.image}
                                resizeMode="contain"
                                source={{ uri: item.images.symbol || 'default.png' }}
                              />
                            )}
                            keyExtractor={item => item.id}
                          />
                        </View>
                      </View>
                    </ImageBackground>
                  </View>
                </TouchableOpacity>
              </Link>
            </View>
          )}
          keyExtractor={item => item}
        />
      )}
    </SafeAreaView>
  );
}

export function generateRandomNumber(): number {
  return Math.floor(Math.random() * (8 - 1 + 1)) + 1;
}