//framework was taken from net ninja - react native tutorial for begginers 

import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image  } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Image source={require('./assets/fuel_logo.png')} 
      style={styles.image}/> 
      <Text style={styles.title}>
        <Text style={styles.fuelWord}>Fuel</Text>
        <Text style={styles.finderWord}>Finder</Text>
      </Text>
      <Text style={styles.slogan}>
        <Text style={styles.description}> Fast, Affordable Fuel Right Next To You!</Text>
      </Text>
      {/* Your other content */}
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'flex-start', // Vertically align content at the top
    paddingTop: 100, // Add padding to the top
  },

  title: {
    fontSize: 24, // You can adjust the font size as needed
    textAlign: 'center', // Center the text horizontally
  },

  fuelWord: {
    fontWeight : 'bold',
    color : 'rgb(8,8,8)'
  },

  finderWord: {
    color: 'rgb(33,33,33)'
  },

  image: {
    width: 130,
    height: 130,
  },

  slogan: {
    fontSize: 16,
    textAlign: 'center',
    marginVertical: 10,
  }

 


});