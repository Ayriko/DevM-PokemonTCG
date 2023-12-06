import {FlatList, Image, SafeAreaView, StatusBar, StyleSheet, Text, TouchableOpacity, View} from "react-native";
import {Link, useLocalSearchParams} from "expo-router";
import {useGetCardById} from "../hooks/useGetCards";
import React from "react";

export const CardDetailComponent = () => {
  const params = useLocalSearchParams() as { cardId: string };
  const {data: cardById, isLoading} = useGetCardById(params.cardId)

  console.log(cardById)

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      flexDirection: 'row',
      alignItems: "center",
      marginTop: StatusBar.currentHeight || 0,
    },
    item: {
      marginVertical: 8,
      marginHorizontal: 2,
      flexDirection: 'row',
      alignItems: 'center',
      height: 260,
      width: 188,
      overflow: 'hidden',
    },
    image: {
      margin: 5,
      height: 50,
      width: 200,
    }
  });

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

  return (
    <SafeAreaView style={styles.container}>
      <Text>pouet</Text>
      <Text>{cardById.name}</Text>
            <View key={cardById.id}>
              <Text>{cardById.name}</Text>
                  <View style={styles.item}>
                    <Image
                      style={{width: '100%', height: '100%', borderRadius: 20}}
                      resizeMode="cover"
                      source={{uri: cardById?.images?.small || 'default.png'}}
                    />
                  </View>
            </View>
    </SafeAreaView>
  );
}