import React, {useState} from 'react'
import { View, Text, StyleSheet, Image, useWindowDimensions } from 'react-native'
import CustomInput from '../../components/CustomInput/CumstomInput'
import CustomButton from '../../components/CustomButton/CustomButton'

const ForgotPasswordScreen = () => {

  const [email, setEmail] = useState('');

  const onSendPressed = () => {
    console.warn("You are going to receive a verification link..");
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
        placeholder={'Enter your email..'}
        value={email} 
        setValue={setEmail} 
        secureTextEntry={false}
      />
      <CustomButton
        text="Send" 
        onPress={onSendPressed}
        type="TERTIARY"
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
      fontSize: 30, // You can adjust the font size as needed
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

export default ForgotPasswordScreen