import { Link, useLocalSearchParams, useNavigation, useRouter } from "expo-router";
import {
  FlatList, Image,
  ImageBackground,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View
} from "react-native";
import React from "react";
import {useGetSetsBySerieName} from "../hooks/useGetSets";
import {LinearGradient} from "expo-linear-gradient";
import {generateRandomNumber} from "../app/(tabs)/series";

const image = [
  require('./../assets/bg_pokemon_1.png'),
  require('./../assets/bg_pokemon_2.png'),
  require('./../assets/bg_pokemon_3.png'),
  require('./../assets/bg_pokemon_4.png'),
  require('./../assets/bg_pokemon_5.png'),
  require('./../assets/bg_pokemon_6.png'),
  require('./../assets/bg_pokemon_7.png'),
  require('./../assets/bg_pokemon_8.png')
]

export const SetsComponent = () => {
  const params = useLocalSearchParams() as { setName: string };
  console.log(params)
  const {data: setBySerie} = useGetSetsBySerieName(params.setName)

  console.log(setBySerie?.map((s) => s.id))

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
      width: 200,
    }
  });

  return (
    <SafeAreaView style={styles.container}>
      {setBySerie && (
        <FlatList
          data={setBySerie}
          renderItem={({ item }) => (
            <View key={item.id}>
              <Link href={{
                pathname: "/cardsList",
                params: { setId: item.id }
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
                      <Image
                        style={{ width: '100%', height: '50%', borderRadius: 20 }}
                        resizeMode="contain"
                        source={{ uri: item.images.logo || 'default.png' }}
                      />
                    </View>
                  </ImageBackground>
                </View>
              </TouchableOpacity>
              </Link>
            </View>
          )}
          keyExtractor={item => item.id}
        />
      )}
    </SafeAreaView>
  );
}