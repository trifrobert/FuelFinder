import React from 'react';
import { SafeAreaView, StyleSheet } from 'react-native'
import SignInScreen from './src/screens/SignInScreen';
import StartUpScreen from './src/screens/StartUpScreen';
import SignUpScreen from './src/screens/SignUpScreen';
import ForgotPasswordScreen from './src/screens/ForgotPasswordScreen';

export default function App() {
  return (
    <SafeAreaView style={styles.root}>
      <ForgotPasswordScreen/>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  root:{
    flex: 1,
    backgroundColor: 'white'
  }
})

