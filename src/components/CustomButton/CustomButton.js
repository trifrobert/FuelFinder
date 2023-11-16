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

  //------------------------FIRST STYLE------------------------//
    container_PRIMARY: {
        alignItems: 'center',
        marginVertical : 12,
        width: '100%',
        padding: 12,
        borderRadius: 5,  
    },
    text_PRIMARY:{
        fontWeight: 'bold',
        fontSize: 15
    },
  //------------------------SECOND STYLE------------------------//
    container_SECONDARY:{
      alignItems:'center',
      marginVertical : 12,
    },
    text_SECONDARY:{
        fontWeight: 'bold',
        fontSize: 15,
    },
  //------------------------THIRD STYLE------------------------//
    container_TERTIARY:{
        alignItems:'center',
        marginVertical : 12,
        padding: 12,

        borderRadius: 5,
        borderWidth: 0.5,
        borderColor: '#d3d3d3',
    },
    text_TERTIARY:{
        fontWeight: 'bold',
        fontSize: 15,
    }
})

export default CustomButton