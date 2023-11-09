import React from 'react'
import { StyleSheet, Text, View, Image, useWindowDimensions  } from 'react-native'
import { StatusBar } from 'expo-status-bar'
import FuelLogo from '../../../assets/fuel_logo.png'


const StartUpScreen = () => {

  const {height} = useWindowDimensions(); // retrieves automatically the dimension of device's display 

    return(
      <View style={styles.container}>
          <Image source={FuelLogo} style={[styles.logo , {height:height * 0.2}]} resizeMode="contain"/> 
            <Text style={styles.title}>
              <Text style={{fontWeight : 'bold', color : 'black'}}>Fuel </Text>
              <Text style={{color: '#c0c0c0'}}>Finder</Text>
            </Text>
            <Text style={styles.slogan}>
                <Text> Fast, Affordable Fuel Right Next To You!</Text>
            </Text>
      </View>
    )
}

const styles = StyleSheet.create({
    container: {
      alignItems: 'center',
      justifyContent: 'flex-start', // Vertically align content at the top
      paddingTop: 100, // Add padding to the top
    },

    logo: {   //styles for the logo image
      width: '70%',
      maxWidth: 300,
      maxHeight: 300,
    },
  
    title: {
      fontSize: 24, // You can adjust the font size as needed
      textAlign: 'center', // Center the text horizontally
    },
  
    slogan: {   //custom design for the slogan
      fontSize: 16,
      textAlign: 'center',
      marginVertical: 10,
    } 
  });

export default StartUpScreen