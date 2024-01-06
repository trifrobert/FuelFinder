import React from 'react'
import { View, Text, StyleSheet, Image, useWindowDimensions } from 'react-native'
import FuelLogo from '../../../assets/fuel_logo.png'
import CustomInput from '../../components/CustomInput/CustomInput'
import CustomButton from '../../components/CustomButton/CustomButton'
import { useNavigation } from '@react-navigation/native'
import { useForm } from 'react-hook-form'

const email_regex = /^\w+([\._-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})$/;

const SignInScreen = () => {

    const {height} = useWindowDimensions(); // retrieves automatically the dimension of device's display
    const navigation = useNavigation();
    const {control, handleSubmit} = useForm();

    const onSignInPressed = data => {
        console.log(data);
        navigation.navigate('HomeScreen');
    }

    const onForgotPasswordPressed = () => {
        navigation.navigate('ForgotPasswordScreen');
    }

    const onSignUpPressed = () => {
        navigation.navigate('SignUpScreen');
    }

    return(
        <View style={styles.container}>
            <Image source={FuelLogo} style={[styles.logo , {height:height * 0.17}]} resizeMode="contain"/>
            <Text style={styles.title}>
              <Text style={{fontWeight : 'bold', color : 'gray'}}>Fuel </Text>
              <Text style={{color: 'gray'}}>Finder</Text>
            </Text>
            <View style={{marginVertical: 10}}>
                <Text style={{color:'black', fontWeight:'bold', fontSize: 20}}>Sign In</Text>
            </View>
            <Text style={{color: 'gray'}}>Hi there! Nice to see you!</Text>
            <View>
                <Text></Text>
            </View>
            <CustomInput
                name="email"
                placeholder="Example@example.com" 
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
            <CustomInput
                name="password"
                placeholder="Password" 
                secureTextEntry={true}
                control={control}
                rules={{
                    required: "Password is required!",
                    minLength:{
                        value: 8,
                        message: "Minimum of 8 characters for the password!"
                    },
                    maxLength:{
                        value: 25,
                        message: "Maximum of 25 characters for the password!"
                    }
                }}
            />
            <CustomButton 
                text="Sign In" 
                onPress={handleSubmit(onSignInPressed)}
                type="PRIMARY"
                bgColor='black'
                fgColor='white'
            />
            <View style={styles.redirectButtonsContainer}>
                <CustomButton 
                    text='Forgot Password?' 
                    onPress={onForgotPasswordPressed}
                    type="SECONDARY"
                    fgColor='gray'
                    bgColor='transparent'
                />
                <CustomButton 
                    text='Sign Up' 
                    onPress={onSignUpPressed}
                    type="SECONDARY"
                    fgColor='black'
                    bgColor='transparent'

                />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        // alignItems: 'center',
        padding : 50,
    },

    logo:{
        alignSelf: 'center',
        width: '30%',
        maxWidth: 250,
        maxHeight: 250,  
    },

    title: {
        fontSize: 20, // You can adjust the font size as needed
        textAlign: 'center', // Center the text horizontally
    },

    redirectButtonsContainer:{
        flexDirection: 'row', // Arrange children horizontally
        justifyContent: 'space-between', // Add space between the buttons
    }
 
})

export default SignInScreen