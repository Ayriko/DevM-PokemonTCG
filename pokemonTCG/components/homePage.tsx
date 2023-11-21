import { Link } from 'expo-router';
import React, { useState, useEffect, ReactNode, FC } from 'react';
import { View, Text, StyleSheet, Pressable, TextStyle } from 'react-native';
import { useFonts } from 'expo-font';

interface CustomTextProps {
    children: ReactNode;
    style?: TextStyle;
}

const CustomText: FC<CustomTextProps> = (props) => {
    return (
        <Text style={{ ...props.style, fontFamily: 'Pokemon-Solid' }}>
            {props.children}
        </Text>
    );
};

export const HomePage = () => {
    return (
        <View style={styles.container}>
            <View>
                <CustomText style={styles.text}>
                    <CustomText style={{
                        fontFamily: 'Pokemon-Solid',
                        color: 'white'
                    }}>Poké</CustomText>
                    <CustomText style={styles.redText}>dex</CustomText>
                </CustomText>
                <Link href="/sets" asChild>
                    <Pressable>
                        <Text style={styles.whiteText}>List of sets</Text>
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
        backgroundColor: '#000029',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
    },
    text: {
        fontSize: 50.4,
        fontFamily: 'Pokemon-Solid',
        fontWeight: '400',
    },
    whiteText: {
        color: 'white',
        fontFamily: 'Pokemon-Solid',
    },
    redText: {
        color: '#CD3131',
        fontFamily: 'Pokemon-Solid',
    },
});