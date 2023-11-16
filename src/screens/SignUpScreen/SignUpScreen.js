import React, {useState} from 'react'
import { View, Text, StyleSheet} from 'react-native'
import CustomInput from '../../components/CustomInput/CumstomInput'
import CustomButton from '../../components/CustomButton/CustomButton'

const SignUpScreen = () => {

    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [repeatPassword, setRepeatPassword] = useState('');

    const onRegisterPressed = () => {
        console.warn("You registered!");
    }

    const onTermsAndConditionsPressed = () => {
        console.warn("Check Terms and Conditions!");
    }

    const onSignInPressed = () => {
        console.warn("Back to the SignIn screen..");
    }

    return(
        <View style={styles.container}>
            <Text style={styles.title}>
              <Text>Sign Up </Text>
            </Text>
            <View style = {styles.nameContainer}>
                <CustomInput
                    width={'45%'}
                    placeholder="First Name" 
                    value={firstName} 
                    setValue={setFirstName} 
                    secureTextEntry={false}
                />
                <CustomInput
                    width={'45%'}
                    placeholder="Last Name" 
                    value={lastName} 
                    setValue={setLastName} 
                    secureTextEntry={false}
                />
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
            <CustomInput
                placeholder="Repeat password"
                value={repeatPassword}
                setValue={setRepeatPassword}
                secureTextEntry={true}
            />
            <Text style={styles.text}>
                By pressing the register button, I agree to the <Text style={styles.link} onPress={onTermsAndConditionsPressed}>Terms of Service</Text> and{' '}
                <Text style={styles.link} onPress={onTermsAndConditionsPressed}>Privacy Policy</Text>.
            </Text>
            <CustomButton 
                text="Register" 
                onPress={onRegisterPressed}
                type="PRIMARY"
                bgColor='black'
                fgColor='white'
            />
            <View style={{alignItems:'center'}}>
                <Text>Have an account? <Text style={{fontWeight:'bold'}} onPress={onSignInPressed}>Sign In</Text></Text>
            </View>
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
    
    nameContainer:{
        flexDirection: 'row', // Arrange children horizontally
        justifyContent: 'space-between', // Add space between the buttons
    },

    text:{
        alignItems:'center',
        fontSize:15,
        marginTop:25,
        marginHorizontal: 10
    },

    link:{
        fontWeight:'bold'
    }
})

export default SignUpScreen 