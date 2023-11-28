import { Link } from 'expo-router';
import React, { ReactNode, FC } from 'react';
import { View, Text, StyleSheet, Pressable, TextStyle } from 'react-native';
import { CustomFont } from "./customFont";

export const HomePage = () => {
    return (
        <View style={styles.container}>
            <View>
            <Link href="/onboard" asChild>
                    <Pressable>
                        <Text>
                            <CustomFont style={styles.whiteTextFont} font={ 'Pokemon-Solid'}>Poké</CustomFont>
                            <CustomFont style={styles.redText} font={ 'Pokemon-Solid'}>dex</CustomFont>
                        </Text>
                        <Text style={styles.whiteText}>
                            Card Edition
                        </Text>
                    </Pressable>
                </Link>
            </View>
        </View>
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
        fontFamily: 'Pokemon-Solid',
        fontWeight: '400',
    },
    redText: {
        color: '#CD3131',
        fontSize: 50,
        fontFamily: 'Pokemon-Solid',
        fontWeight: '400',
    },
});