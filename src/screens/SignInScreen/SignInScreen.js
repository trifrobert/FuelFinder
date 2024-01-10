import React, { useState } from 'react'
import { View, Text, StyleSheet, Image, useWindowDimensions, Alert } from 'react-native'
import FuelLogo from '../../../assets/fuel_logo.png'
import CustomInput from '../../components/CustomInput/CustomInput'
import CustomButton from '../../components/CustomButton/CustomButton'
import { useNavigation } from '@react-navigation/native'
import { useForm } from 'react-hook-form'
import { Auth } from 'aws-amplify'

const username_regex = /^[a-z0-9_.-]+$/;

const SignInScreen = () => {

    const {height} = useWindowDimensions(); // retrieves automatically the dimension of device's display
    const navigation = useNavigation();
    const {control, handleSubmit} = useForm();
    const [loading, setLoading] = useState(false);

    const onSignInPressed = async(data) => {
        if(loading){
            return;
        }

        setLoading(true);
        try{
            const response = await Auth.signIn(data.username, data.password);
        }catch(e){
            Alert.alert('Error!', e.message);
        }
        setLoading(false);
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
                name="username"
                placeholder="Username" 
                secureTextEntry={false}
                control={control}
                rules={{
                    required: "Username is required!",
                    minLength:{
                        value:5,
                        message: "Username should consist of at least 5 characters!"
                    },
                    pattern:{
                        value: username_regex,
                        message: "Only lower letters, digits, '.' and '-' allowed.."
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
                text={loading ? "Loading..." : "Sign In"} 
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