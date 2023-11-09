import React, {useState} from 'react'
import { View, Text, StyleSheet, Image, useWindowDimensions } from 'react-native'
import FuelLogo from '../../../assets/fuel_logo.png'
import CustomInput from '../../components/CustomInput/CumstomInput'
import CustomButton from '../../components/CustomButton/CustomButton'

const SignInScreen = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const {height} = useWindowDimensions(); // retrieves automatically the dimension of device's display 

    return(
        <View style={styles.container}>
            <Image source={FuelLogo} style={[styles.logo , {height:height * 0.17}]} resizeMode="contain"/>
            <Text style={styles.title}>
              <Text style={{fontWeight : 'bold', color : '#c0c0c0'}}>Fuel </Text>
              <Text style={{color: '#c0c0c0'}}>Finder</Text>
            </Text>
            <View style={{marginVertical: 10}}>
                <Text style={{color:'black', fontWeight:'bold', fontSize: 20}}>Sign In</Text>
            </View>
            <Text style={{color: '#c0c0c0'}}>Hi there! Nice to see you!</Text>
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
            <CustomButton/>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        // alignItems: 'center',
        padding : 40,
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
    
})

export default SignInScreen