import React, {useState} from 'react'
import { View, Text, StyleSheet, Image, useWindowDimensions } from 'react-native'
import CustomInput from '../../components/CustomInput/CumstomInput'
import CustomButton from '../../components/CustomButton/CustomButton'
import { useNavigation } from '@react-navigation/native'

const NewPasswordScreen = () => {

  const [code, setCode] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const navigation = useNavigation();

  const onSubmitPressed = () => {
    navigation.navigate('SignInScreen');
  }

  const onBackToSignInPressed = () => {
    navigation.navigate('SignInScreen');
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
        fgColor='white'
        bgColor='black'
      />
      <CustomButton
        onPress={onBackToSignInPressed}
        text="Back to Sign In"
        type="PRIMARY"
        fgColor='white'
        bgColor='black'
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