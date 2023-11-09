//framework was taken from net ninja - react native tutorial for begginers 

import React from 'react';
import { SafeAreaView, StyleSheet } from 'react-native'
import SignInScreen from './src/screens/SignInScreen';
import StartUpScreen from './src/screens/StartUpScreen';

export default function App() {
  return (
    <SafeAreaView style={styles.root}>
      <StartUpScreen />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  root:{
    flex: 1,
    backgroundColor: 'white'
  }
})

