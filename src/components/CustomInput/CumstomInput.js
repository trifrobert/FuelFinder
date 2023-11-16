import React from 'react'
import { View, Text, TextInput, StyleSheet } from 'react-native'

const CustomInput = ({value, setValue, placeholder, secureTextEntry, width}) => {
    return(
        <View style={[styles.container, { width: width ? width : '100%'}]}>
            <TextInput
                value = {value}
                onChangeText = {setValue}
                placeholder = {placeholder}
                secureTextEntry = {secureTextEntry}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        backgroundColor: 'transparent',
        padding: 10,

        borderWidth: 0.5,
        borderBottomWidth: 3,
        borderRadius: 5,
        borderColor: '#f5f5f5',

        marginVertical: 5
    }
})

export default CustomInput