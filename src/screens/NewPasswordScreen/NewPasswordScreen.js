import React from 'react'
import { View, Text, StyleSheet} from 'react-native'
import CustomInput from '../../components/CustomInput/CustomInput'
import CustomButton from '../../components/CustomButton/CustomButton'
import { useNavigation } from '@react-navigation/native'
import { useForm } from 'react-hook-form'

const code_regex = /^\d{4}$/;

const NewPasswordScreen = () => {

  const navigation = useNavigation();
  const {control, handleSubmit} = useForm();

  const onSubmitPressed = data => {
    console.log(data);
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
        name="code"
        placeholder={'Code'}
        secureTextEntry={false}
        control={control}
        rules={{
          required: "Input the code you received on your email..",
          minLength:{
            value: 4,
            message: "Your code has to be 4 digits long!"
          },
          maxLength:{
              value: 4,
              message: "Your code has to be 4 digits long!"
          },
          pattern:{
            value: code_regex,
            message: "Your code has to be made just by 4 DIGITS!"
          }
        }}
      />
      <CustomInput
        name='new-password'
        placeholder={'Enter your new password'}
        secureTextEntry={true}
        control={control}
        rules={{
            required: "New password is required!",
            minLength:{
                value: 8,
                message: "Minimum of 8 characters for the new password!"
            },
            maxLength:{
                value: 25,
                message: "Maximum of 25 characters for the new password!"
            }
        }}
      />
      <CustomButton
        text="Submit" 
        onPress={handleSubmit(onSubmitPressed)}
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