import { Text, StyleSheet, View, TouchableOpacity, Image } from 'react-native';
import React from 'react';
import { Link } from 'expo-router';

export const OnboardC = () => {
    return (
      <View style={styles.container}>
        <View style={styles.textContainer}>
          <View style={styles.centeredColumn}>
            <Text style={styles.largeText}>Êtes-vous prêt pour cette aventure ?</Text>
            <Text style={styles.smallText}>Il suffit de commencer à explorer le monde de Pokémon dès aujourd'hui !</Text>
          </View>
          <View style={styles.buttonsColumn}>
            <Link href="/sets" asChild>
                <TouchableOpacity style={styles.NextButton}>
                    <Text style={styles.buttonText}>Découvrir les cartes</Text>
                </TouchableOpacity>
            </Link>
          </View>
        </View>
        <View style={styles.imagesContainer}>
          <Image source={require('../assets/Group29.png')} style={styles.largeImage} />
        </View>
      </View>
    );
  };
  
  const styles = StyleSheet.create({
    container: {
      width: '100%',
      height: '100%',
      position: 'relative',
      backgroundColor: 'white',
      justifyContent: 'center',
      alignItems: 'center'
    },
    textContainer: {
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      gap: 32,
      top: '60%',
      position: 'absolute',
    },
    centeredColumn: {
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      gap: 16,
    },
    largeText: {
      width: 321,
      textAlign: 'center',
      color: 'black',
      fontSize: 26,
      fontWeight: '500',
    },
    smallText: {
      width: 320,
      textAlign: 'center',
      color: '#666666',
      fontSize: 14,
      fontWeight: '400',
      lineHeight: 21,
    },
    buttonsColumn: {
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      gap: 4,
      display: 'flex',
    },
    NextButton: {
      width: 328,
      height: 58,
      paddingLeft: 8,
      paddingRight: 8,
      paddingTop: 5,
      paddingBottom: 10,
      backgroundColor: '#173EA6',
      borderRadius: 50,
      justifyContent: 'center',
      alignItems: 'center',
      display: 'flex',
    },
    buttonText: {
      textAlign: 'center',
      color: 'white',
      fontSize: 18,
      fontWeight: '600',
    },
    imagesContainer: {
      width: 257,
      height: 257,
      top: '20%',
      position: 'absolute',
    },
    largeImage: {
      width: '100%',
      height: '100%',
      borderRadius: 20
    },
  });
  