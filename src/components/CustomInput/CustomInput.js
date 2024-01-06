import React from 'react'
import { View, Text, TextInput, StyleSheet } from 'react-native'
import { Controller } from 'react-hook-form'

const CustomInput = ({ control, name, rules = {}, placeholder, secureTextEntry, width }) => {
    return (
      <Controller
        control={control}
        name={name}
        rules={rules}
        render={({ field: { value, onChange, onBlur }, fieldState: { error } }) => (
          <>
            <View style={{ width: width ? width : '100%' }}>
              <View style={[styles.container, { borderColor: error ? 'red' : '#f5f5f5' }]}>
                <TextInput
                  placeholder={placeholder}
                  value={value}
                  onChangeText={onChange}
                  onBlur={onBlur}
                  secureTextEntry={secureTextEntry}
                />
              </View>
              {error && (
                <Text style={{ color: 'red', alignSelf: 'stretch', marginLeft: 10 }}>
                  {error.message || 'An error occurred!'}
                </Text>
              )}
            </View>
          </>
        )}
      />
    );
  };

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