import { View, Text, StatusBar, SafeAreaView, ScrollView, StyleSheet, FlatList, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { useGetSets } from '../hooks/useGetSets'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { PokemonTCG } from 'pokemon-tcg-sdk-typescript'
import { useGetCards } from '../hooks/useGetCards'
import { useGetCardById } from '../hooks/useGetCards'
import { useGetCardBySet } from '../hooks/useGetCards'

// Create a client
const queryClient = new QueryClient()

export default function App() {

    return (
        // Provide the client to your App
        <QueryClientProvider client={queryClient}>
            <Sets />
        </QueryClientProvider>
    )
}

/*
function CardBySet() {

  // Query
  const { data } = test();
  console.log('Card by set', data)

  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#7c91bd",
      }}
    >
      <Text>{"CardBySet"}</Text>
      <Text>{data?.length}</Text>
      {data?.map((item) => (
        <Text key={item.id}>{item.name}</Text>
      ))}
    </View>
  )
}

function Card() {

  // Query
  const { data } = useGetCardById('xy7-54')

  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#7c91bd",
      }}
    >
      <Text>{"Card"}</Text>
      <Text>{data?.name}</Text>
    </View>
  )
}
*/

interface SetMap {
    [key: string]: PokemonTCG.Set[];
}

function Sets() {

    // Query
    const { data } = useGetSets()
    //const listOfSets: PokemonTCG.Set[] | undefined = data?.filter((wesh) => wesh.series !== 'Other' && wesh.series !== 'POP' && wesh.series !== 'E-Card' && wesh.series !== 'NP')
    const listOfSets: SetMap | undefined = data?.reduce((acc: SetMap, curr) => {
        if (!acc[curr.series]) {
            acc[curr.series] = [];
        }
        acc[curr.series].push(curr);
        return acc;
    }, {});
    // console.log(pouet)

    const styles = StyleSheet.create({
        container: {
            flex: 1,
            flexDirection: 'column',
            marginTop: StatusBar.currentHeight || 0,
        },
        item: {
            backgroundColor: 'lightblue',
            padding: 20,
            marginVertical: 8,
            marginHorizontal: 16,
            borderWidth: 1,
            borderRadius: 20

        },
        title: {
            fontSize: 32,
        },
        image: {
            resizeMode: 'contain',
            height: 100
        }
    });

    return (
      <SafeAreaView style={styles.container}>
      {listOfSets && (
        <FlatList
          data={Object.keys(listOfSets)}
          renderItem={({ item }) => (
            <View key={item}>
              <Text>{item}</Text>
              <FlatList
                data={listOfSets[item]}
                renderItem={({ item }) => (
                  <TouchableOpacity onPress={() => test(item.id)}>
                    <View style={styles.item}>
                      <Image style={styles.image} source={{ uri: item.images.logo || 'default.png' }} />
                    </View>
                  </TouchableOpacity>
                )}
                keyExtractor={item => item.id}
              />
            </View>
          )}
          keyExtractor={item => item}
        />
      )}
    </SafeAreaView>
    )
}

// function ListOfSet(item: PokemonTCG.Set[]) {
//   const styles = StyleSheet.create({
//     container: {
//         flex: 1,
//         flexDirection: 'row',
//         marginTop: StatusBar.currentHeight || 0,
//     },
//     item: {
//         backgroundColor: 'lightblue',
//         padding: 20,
//         marginVertical: 8,
//         marginHorizontal: 16,
//         borderWidth: 1,
//         borderRadius: 20

//     },
//     title: {
//         fontSize: 32,
//     },
//     image: {
//         resizeMode: 'contain',
//         height: 100
//     }
//   });

//   return (
//     <FlatList
//       data={item}
//       renderItem={({ item }) =>
//           <TouchableOpacity onPress={() => test(item.id)}>
//               <View style={styles.item}>
//                   <Image style={styles.image} source={{ uri: item.images.logo || 'default.png' }} />
//               </View>
//           </TouchableOpacity>
//       }
//       keyExtractor={item => item.id}
//     />)
// }

function test(id: string) {
    console.log(id)
}