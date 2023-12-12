import { Tabs } from 'expo-router';
import React from 'react';
import { Image } from 'expo-image';
import { StyleSheet } from 'react-native'

export default function TabLayout() {
    return (
        <Tabs screenOptions={{ headerShown: false }}>
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
              headerShown: true,
              href: null
            }}
          />
          <Tabs.Screen
            name="cardsList"
            options={{
              title: "Cards List",
              headerShown: true,
              href: null
            }}
          />
          <Tabs.Screen
            name="cardDetail"
            options={{
              href: null
            }}
          />
        </Tabs>
    );
}

const styles = StyleSheet.create({
    image: {
        flex: 1,
        width: '8%'
    },
});