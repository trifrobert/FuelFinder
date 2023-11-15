import { View, Text, StyleSheet, Pressable} from 'react-native'
import React from 'react'

const CustomButton = ({onPress, text, type}) => {
  return (
    <Pressable onPress={onPress} style={styles[`container_${type}`]}>
      <Text style={styles[`text_${type}`]}>{text}</Text>
    </Pressable>
  )
}

const styles = StyleSheet.create({
  
    container_PRIMARY: {
        backgroundColor: 'black',
        width: '100%',
        padding: 12,
        borderRadius: 5,
        marginVertical : 30,
        alignItems: 'center'
    },
    text_PRIMARY:{
        color: 'white',
        fontWeight: 'bold'
    },

    container_SECONDARY:{
      padding: 12, 
      marginVertical : 30,
      alignItems: 'center'
    },
    text_SECONDARY:{
        fontWeight: 'bold',
        fontSize: 15,
        color: 'gray'
    },

    container_TERTIARY:{
        padding: 12, 
        marginVertical : 30,
        alignItems: 'center'
    },
    text_TERTIARY:{
        fontWeight: 'bold',
        fontSize: 15,
        color: 'black'
    }
})

export default CustomButton