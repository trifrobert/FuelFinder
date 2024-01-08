import React from 'react'
import { View, Text, StyleSheet, Alert} from 'react-native'
import CustomInput from '../../components/CustomInput/CustomInput'
import CustomButton from '../../components/CustomButton/CustomButton'
import { useNavigation } from '@react-navigation/native'
import { useForm } from 'react-hook-form'
import { Auth } from 'aws-amplify';

const code_regex = /^\d+$/;

const NewPasswordScreen = () => {

  const navigation = useNavigation();
  const {control, handleSubmit} = useForm();

  const onSubmitPressed = async data => {
    try {
      await Auth.forgotPasswordSubmit(data.username, data.code, data.password);
      navigation.navigate('SignInScreen');
    } catch (e) {
      Alert.alert('Error!', e.message);
    }
  };

  const onBackToSignInPressed = () => {
    navigation.navigate('SignInScreen');
  } 

  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        <Text>Reset your password</Text>
      </Text>
      <CustomInput
          placeholder="Username"
          name="username"
          control={control}
          rules={{required: 'Username is required!'}}
        />
      <CustomInput
        name="code"
        placeholder={'Code'}
        secureTextEntry={false}
        control={control}
        rules={{
          required: "Input the code you received on your email...",
          pattern :{
            value: code_regex,
            message: "Incorrect code format!"
          }
        }}
      />
      <CustomInput
        name='password'
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