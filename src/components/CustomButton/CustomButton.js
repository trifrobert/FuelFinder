import { View, Text, StyleSheet} from 'react-native'
import React from 'react'

const CustomButton = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Sign In</Text>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'black',
        width: '95%',
        padding: 12,
        borderRadius: 5,
        marginVertical : 30,

        alignItems: 'center'
    },
    text:{
        color: 'white',
        fontWeight: 'bold'
    }
})

export default CustomButton