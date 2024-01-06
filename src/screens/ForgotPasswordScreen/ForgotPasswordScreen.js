import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import CustomInput from '../../components/CustomInput/CustomInput'
import CustomButton from '../../components/CustomButton/CustomButton'
import { useNavigation } from '@react-navigation/native'
import { useForm } from 'react-hook-form'

const email_regex = /^\w+([\._-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})$/;

const ForgotPasswordScreen = () => {

  const navigation = useNavigation();
  const {control, handleSubmit} = useForm();

  const onSendPressed = data => {
    console.log(data);
    navigation.navigate('NewPasswordScreen');
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
        name="email"
        placeholder={'Enter your email..'}
        secureTextEntry={false}
        control={control}
        rules={{
          required: "Email address is required!",
          pattern :{
              value: email_regex,
              message: "Incorrect email format!"
          }
        }}
      />
      <CustomButton
        text="Send" 
        onPress={handleSubmit(onSendPressed)}
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
      // backgroundColor: "blue",
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

export default ForgotPasswordScreen