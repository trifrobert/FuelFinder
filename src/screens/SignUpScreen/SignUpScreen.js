import React, {useState} from 'react'
import { View, Text, StyleSheet, ScrollView, Alert} from 'react-native'
import CustomInput from '../../components/CustomInput/CustomInput'
import CustomButton from '../../components/CustomButton/CustomButton'
import { useNavigation } from '@react-navigation/native'
import { useForm } from 'react-hook-form'
import { Auth } from 'aws-amplify'

const email_regex = /^\w+([\._-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})$/;
const username_regex = /^[a-z0-9_.-]+$/;

const SignUpScreen = () => {

    const navigation = useNavigation();
    const {control, handleSubmit, watch} = useForm();
    const [loading, setLoading] = useState(false);
    const pwd = watch('password');

    const onRegisterPressed = async(data) => {

        const {username, name, email, password} = data;
        if(loading){
            return;
        }

        setLoading(true);
        try{
            await Auth.signUp({
                username,
                password,
                attributes:{name, email}
            });
            navigation.navigate('ConfirmEmailScreen', {username});
        }catch(e){
            Alert.alert("Error!", e.message);
        }
        setLoading(false);
    }

    const onSignInPressed = () => {
        navigation.navigate('SignInScreen');
    }

    return(
        <ScrollView showsVerticalScrollIndicator={false}>
            <View style={styles.container}>
                <Text style={styles.title}>
                    <Text>Sign Up </Text>
                </Text>
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
                <View style = {styles.nameContainer}>
                    <CustomInput
                        name="name"
                        placeholder="Enter your name.." 
                        secureTextEntry={false}
                        control={control}
                        rules={{
                            required: "Please, input your entire name!",
                        }}
                    />
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
                <CustomInput
                    name="repeated_password"
                    placeholder="Repeat password"
                    secureTextEntry={true}
                    control={control}
                    rules={{
                        required: "Please, repeat the password!",
                        validate: value => value == pwd || "Password doesn't match!"
                    }}
                />
                <Text style={styles.text}>
                    By pressing the register button, I agree to the <Text style={styles.link}>Terms of Service</Text> and{' '}
                    <Text style={styles.link}>Privacy Policy</Text>.
                </Text>
                <CustomButton 
                    text={loading ? "Loading..." : "Register"}
                    onPress={handleSubmit(onRegisterPressed)}
                    type="PRIMARY"
                    bgColor='black'
                    fgColor='white'
                />
                <View style={{alignItems:'center'}}>
                    <Text>Have an account? <Text style={{fontWeight:'bold'}} onPress={onSignInPressed}>Sign In</Text></Text>
                </View>
            </View>
        </ScrollView>
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
    
    nameContainer:{
        flexDirection: 'row', // Arrange children horizontally
        justifyContent: 'space-between', // Add space between the buttons
    },

    text:{
        alignItems:'center',
        fontSize:15,
        marginVertical:25,
        marginHorizontal: 10
    },

    link:{
        fontWeight:'bold'
    }
})

export default SignUpScreen 