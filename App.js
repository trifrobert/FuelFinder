import React from 'react';
import { SafeAreaView, StyleSheet } from 'react-native'
import Navigation from './src/navigation';
import { Amplify } from 'aws-amplify';
import config from './src/amplifyconfiguration.json';

Amplify.configure(config);

const App = () => {
  return (
    <SafeAreaView style={styles.root}>
      <Navigation/>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  root:{
    flex: 1,
    backgroundColor: 'white'
  }
})

export default App;

