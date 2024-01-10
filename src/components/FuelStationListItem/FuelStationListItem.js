import { View, Text, StyleSheet, Image, ViewStyle } from 'react-native';
import React from 'react';

const FuelStationListItem = ({ fuelstation }) => {
  return (
    <View style={styles.card}>
        <Image source={{uri: fuelstation.image}} style={styles.image}/>
        <View style={styles.rightContainer}>
            <Text style={styles.name}>{fuelstation.name}</Text>
            <Text style={styles.description}>
                Check this fuelstation for an affordable price!
            </Text>
            <View style={styles.footer}>
                <Text style={styles.price}>Petrol: {fuelstation.petrolPrice} lei/l</Text>
                <Text style={styles.price}>Diesel: {fuelstation.dieselPrice} lei/l</Text>
            </View>
        </View>
    </View>
  )
}

const styles = StyleSheet.create({
    card: {
      backgroundColor: '#f8f8f8',

      flexDirection: 'row',
      borderRadius: 20,
      overflow:'hidden',
  
      shadowColor: 'black',
      shadowOffset: {
        width: 0,
        height: 1,
      },
      shadowOpacity: 0.5,
      shadowRadius: 2.22,
  
      elevation: 3,
    },
    image: {
      width: 150,
      aspectRatio: 1,
      borderTopLeftRadius: 20,
      borderBottomLeftRadius: 20,
    },
    rightContainer: {
      padding: 10,
      flex: 1,
    },
    name: {
      fontWeight: 'bold',
      marginBottom: 10,
      fontSize: 16,
    },
    description: {
      color: 'gray',
    },
    price: {
      fontWeight: 'bold',
    },
    footer: {
      marginTop: 'auto',
    },
  });

export default FuelStationListItem