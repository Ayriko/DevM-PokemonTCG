import { Tabs } from 'expo-router';
import React from 'react';
import { Image } from 'expo-image';
import { StyleSheet } from 'react-native'

export default function TabLayout() {
    return (
        <Tabs>
            <Tabs.Screen
                name="series"
                options={{
                    title: "Series",
                    headerShown: true,
                    tabBarIcon: (tabInfo) => {
                        return (
                            <Image
                                style={styles.image}
                                source={require('./../../assets/icon_series.png')}
                            />
                        )
                    },
                }}
            />
          <Tabs.Screen
            name="sets"
            options={{
              title: "Sets",
              href: null
            }}
          />
          <Tabs.Screen
            name="cardsList"
            options={{
              title: "CardsList",
              href: null
            }}
          />
            {/* <Tabs.Screen
                name="cardsList"
                options={{
                    title: "Cards list",
                    tabBarIcon: (tabInfo) => {
                        return (
                            <Image
                                style={styles.image}
                                source={require('./../assets/icon_cards.png')}
                            />
                        )
                    },
                }}
            /> */}
        </Tabs>
    );
}

const styles = StyleSheet.create({
    image: {
        flex: 1,
        width: '8%'
    },
});