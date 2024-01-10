import { View, Text, StyleSheet } from 'react-native';
import React from 'react';
import { Marker } from 'react-native-maps';

const CustomMarker = ({ fuelstation, onPress }) => {
  return (
    <Marker
      onPress={onPress}
      coordinate={{
        latitude: fuelstation.latitude,
        longitude: fuelstation.longitude,
      }}
    >
      <View style={styles.container}>
        <Text style={{fontWeight:'bold', fontSize: 12}}> {fuelstation.name}</Text>
      </View>
    </Marker>
  );
};

const styles = StyleSheet.create({
    container: {
        alignItems:'center',
        backgroundColor: 'white',
        padding: 5,
        paddingHorizontal: 10,
        borderWidth: 1,
        borderColor: 'black',
        borderRadius: 25,
    },
})

export default CustomMarker;