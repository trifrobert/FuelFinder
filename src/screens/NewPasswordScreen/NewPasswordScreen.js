import React, {useState} from 'react'
import { View, Text, StyleSheet, Image, useWindowDimensions } from 'react-native'
import CustomInput from '../../components/CustomInput/CumstomInput'
import CustomButton from '../../components/CustomButton/CustomButton'

const NewPasswordScreen = () => {

  const [code, setCode] = useState('');
  const [newPassword, setNewPassword] = useState('');

  const onSubmitPressed = () => {
    console.warn("You updated your password..");
  }

  const onBackToSignInPressed = () => {
    console.warn("Back to the Sign In screen.");
  } 

  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        <Text>Reset your password</Text>
      </Text>
      <CustomInput
        placeholder={'Use the code you received'}
        value={code} 
        setValue={setCode} 
        secureTextEntry={false}
      />
      <CustomInput
        placeholder={'Enter your new password'}
        value={newPassword} 
        setValue={setNewPassword} 
        secureTextEntry={false}
      />
      <CustomButton
        text="Submit" 
        onPress={onSubmitPressed}
        type="PRIMARY"
        fgColor='#505050'
        bgColor='#f5f5f5'
      />
      <CustomButton
        onPress={onBackToSignInPressed}
        text="Back to Sign In"
        type="SECONDARY"
        fgColor='#505050'
        bgColor='transparent'
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container:{
      padding : 50,
  },

  title: {
      fontSize: 28, // You can adjust the font size as needed
      textAlign:'left',
      fontWeight: 'bold',
      marginVertical: 20
  },

  text:{
    margin: 20,
    fontWeight:'bold',
    fontSize: 15,
  }
})

export default NewPasswordScreen