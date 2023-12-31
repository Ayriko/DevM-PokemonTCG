import {Link, useLocalSearchParams} from "expo-router";
import {
  FlatList, 
  Image,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View
} from "react-native";
import {useGetCardBySet} from "../hooks/useGetCards";
import React from "react";

export const CardsListComponent = () => {
  const params = useLocalSearchParams() as { setId: string };
  const { data: cardsBySet, isLoading} = useGetCardBySet(params.setId)

  if (isLoading) {
    return (
      <SafeAreaView style={styles.load}>
        <Text>Loading...</Text>
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView style={styles.container}>
      {cardsBySet && (
        <FlatList
          data={cardsBySet}
          numColumns={2}
          renderItem={({item}) => (
            <View key={item.id}>
              <Link href={{
                pathname: "/cardDetail",
                params: { cardId: item.id }
              }} asChild>
                <TouchableOpacity>
                  <View style={styles.item}>
                      <Image
                        style={{width: '100%', height: '100%', borderRadius: 20}}
                        resizeMode="cover"
                        source={{uri: item.images.small || 'default.png'}}
                      />
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
  },
  load: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: StatusBar.currentHeight ?? 0,
  }
});