import { View, Text, StyleSheet, Pressable} from 'react-native'
import React from 'react'

const CustomButton = ({onPress, text, type, fgColor, bgColor}) => {
  return (
    <Pressable onPress={onPress} style={[styles[`container_${type}`], bgColor ? {backgroundColor: bgColor} : {backgroundColor:'black'}]}>
      <Text style={[styles[`text_${type}`], fgColor ? {color:fgColor} : {}]}>{text}</Text>
    </Pressable>
  )
}

const styles = StyleSheet.create({

    container_PRIMARY: {
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
      alignItems:'center',
      marginVertical : 15,
    },
    text_SECONDARY:{
        fontWeight: 'bold',
        fontSize: 15,
    },

    container_TERTIARY:{ 
        padding: 10,

        borderWidth: 0.5,
        borderColor: '#d3d3d3',
        borderRadius: 5,
    },
    text_TERTIARY:{
        color: 'gray',
        textAlign:'center',
        fontWeight: 'bold',
        fontSize: 15,
    }
})

export default CustomButton