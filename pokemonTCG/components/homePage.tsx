import { Link } from 'expo-router';
import React from 'react';
import { View, Text, StyleSheet, Pressable } from 'react-native';
import { CustomFont } from "./customFont";
import Animated, { BounceOutUp } from 'react-native-reanimated';

export const HomePage = () => {
    return (
        <Animated.View style={styles.container} exiting={BounceOutUp}>
            <View>
                <Link href="/onboarding/onboard" asChild>
                    <Pressable>
                        <Text>
                            <CustomFont style={styles.whiteTextFont} font={'Pokemon-Solid'}>Poké</CustomFont>
                            <CustomFont style={styles.redText} font={'Pokemon-Solid'}>dex</CustomFont>
                        </Text>
                        <Text style={styles.whiteText}>
                            Cards Edition
                        </Text>
                    </Pressable>
                </Link>
            </View>
        </Animated.View>
    );
};

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: '100%',
        paddingLeft: 84,
        paddingRight: 84,
        backgroundColor: '#000040',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
    },
    whiteText: {
        color: 'white',
        paddingLeft: '25%',
        fontSize: 22,
    },
    whiteTextFont: {
        color: 'white',
        fontSize: 50,
        fontWeight: '400',
    },
    redText: {
        color: '#CD3131',
        fontSize: 50,
        fontWeight: '400',
    },
});