import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import CustomInput from '../../components/CustomInput/CustomInput'
import CustomButton from '../../components/CustomButton/CustomButton'
import { useNavigation } from '@react-navigation/native'
import { useForm } from 'react-hook-form'
import { useRoute } from '@react-navigation/native';
import { Auth } from 'aws-amplify';

const code_regex = /^\d+$/;

const ConfirmEmailScreen = () => {

  const navigation = useNavigation();
  const route = useRoute();
  const {control, handleSubmit, watch} = useForm({
    defaultValues: {username: route?.params?.username},
  });
  const username = watch('username');

  const onConfirmPressed = async data => {
    try {
      await Auth.confirmSignUp(data.username, data.code);
      navigation.navigate('SignInScreen');
    } catch (e) {
      Alert.alert('Error', e.message);
    }
  };

  const onResendPressed = async () => {
    try {
      await Auth.resendSignUp(username);
      Alert.alert('Success', 'Code was resent to your email');
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
        <Text>Confirm Email</Text>
      </Text>
      <CustomInput
          name="username"
          control={control}
          placeholder="Username"
          rules={{
            required: 'Username code is required',
          }}
        />
      <CustomInput
        name="code"
        placeholder={'Enter your code..'}
        secureTextEntry={false}
        control={control}
        rules={{
          required: "Code is required!",
          pattern :{
              value: code_regex,
              message: "Incorrect code format!"
          }
        }}
      />
      <CustomButton
        text="Confirm" 
        onPress={handleSubmit(onConfirmPressed)}
        type="PRIMARY"
        fgColor='white'
        bgColor='black'
      />
      <CustomButton
        text="Resend code" 
        onPress={handleSubmit(onResendPressed)}
        type="TERTIARY"
        fgColor='black'
        bgColor='transparent'
      />
      <CustomButton
        onPress={onBackToSignInPressed}
        text="Back to Sign In"
        type="SECONDARY"
        fgColor='black'
        bgColor='transparent'
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

export default ConfirmEmailScreen