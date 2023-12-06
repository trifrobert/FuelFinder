import React, {useState} from 'react'
import { View, Text, StyleSheet, Image, useWindowDimensions } from 'react-native'
import FuelLogo from '../../../assets/fuel_logo.png'
import CustomInput from '../../components/CustomInput/CumstomInput'
import CustomButton from '../../components/CustomButton/CustomButton'
import { useNavigation } from '@react-navigation/native'

const SignInScreen = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const {height} = useWindowDimensions(); // retrieves automatically the dimension of device's display
    const navigation = useNavigation();

    const onSignInPressed = () => {
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
                placeholder="Example@example.com" 
                value={email} 
                setValue={setEmail} 
                secureTextEntry={false}
            />
            <CustomInput
                placeholder="Password" 
                value={password} 
                setValue={setPassword} 
                secureTextEntry={true}
            />
            <CustomButton 
                text="Sign In" 
                onPress={onSignInPressed}
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