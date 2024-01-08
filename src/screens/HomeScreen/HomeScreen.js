import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import CustomButton from '../../components/CustomButton/CustomButton'
import { Auth } from 'aws-amplify';

const HomeScreen = () => {

  const signOut = () => {
    Auth.signOut();
  };

  return (
    <View>
      <Text>We love you, Darian!</Text>
      <CustomButton
        onPress={signOut}
        text="Sign Out" 
        type="PRIMARY"
        fgColor='black'
        bgColor='red'
      />
    </View>
  )
}

const styles = StyleSheet.create({
})

export default HomeScreen