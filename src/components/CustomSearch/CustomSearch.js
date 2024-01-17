import { View, StyleSheet } from 'react-native'
import React from 'react'
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import { GOOGLE_API_KEY } from '../../../data/environment';

const CustomSearch = ({
  text,
  placeholder, 
  onPlaceSelected, 
  marginVertical, 
  marginHorizontal, 
  width,
  height
}) => {
  return (
    <View style={[
      styles.container,
      marginVertical ? {marginVertical: marginVertical} : {marginVertical: 0},
      marginHorizontal ? {marginHorizontal: marginHorizontal} : {marginHorizontal: 0},
      width ? {width: width} : {width: 'auto'},
      height ? {height: height} : {height: 'auto'},
    ]}>
      <GooglePlacesAutocomplete
        currentLocationLabel={text}
        placeholder={placeholder || ""}
        fetchDetails={true}
        onPress={(data, details = null) => {
          onPlaceSelected(details);
        }}
        query={{
          key: GOOGLE_API_KEY,
          language: "en",
        }}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#f8f8f8",
    borderColor: "black",
    borderWidth: 1.5,
    borderRadius: 5,
  },
})

export default CustomSearch