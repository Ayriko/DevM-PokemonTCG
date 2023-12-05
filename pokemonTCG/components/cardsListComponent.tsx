import {Link, useLocalSearchParams} from "expo-router";
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
import {useGetCardBySet} from "../hooks/useGetCards";
import {generateRandomNumber} from "../app/(tabs)/series";
import {LinearGradient} from "expo-linear-gradient";
import React from "react";

export const CardsListComponent = () => {
  const params = useLocalSearchParams() as { setId: string };
  const { data: cardsBySet} = useGetCardBySet(params.setId)

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

  return (
    <SafeAreaView style={styles.container}>
      {cardsBySet && (
        <FlatList
          data={cardsBySet}
          numColumns={2}
          renderItem={({item}) => (
            <View key={item.id}>
                <TouchableOpacity onPress={() => console.log(item.id)}>
                  <View style={styles.item}>
                      <Image
                        style={{width: '100%', height: '100%', borderRadius: 20}}
                        resizeMode="cover"
                        source={{uri: item.images.small || 'default.png'}}
                      />
                  </View>
                </TouchableOpacity>
            </View>
          )}
          keyExtractor={item => item.id}
        />
      )}
    </SafeAreaView>
  );
}