import React, { useEffect, useState } from 'react'
import { View, ActivityIndicator } from 'react-native';
import SignInScreen from '../screens/SignInScreen';
import StartUpScreen from '../screens/StartUpScreen';
import SignUpScreen from '../screens/SignUpScreen';
import ForgotPasswordScreen from '../screens/ForgotPasswordScreen';
import NewPasswordScreen from '../screens/NewPasswordScreen';
import ConfirmEmailScreen from '../screens/ConfirmEmailScreen/ConfirmEmailScreen';
import HomeScreen from '../screens/HomeScreen';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import {Auth, Hub} from 'aws-amplify';

const Stack = createNativeStackNavigator();

const Navigation = () => {

  const [user, setUser] = useState(undefined);

  const checkUser = async () => {
    try {
      const authUser = await Auth.currentAuthenticatedUser({bypassCache: true});
      setUser(authUser);
    } catch (e) {
      setUser(null);
    }
  };

  useEffect(() => {
    checkUser();
  }, []);

  useEffect(() => {
    const listener = data => {
      if (data.payload.event === 'signIn' || data.payload.event === 'signOut') {
        checkUser();
      }
    };

    Hub.listen('auth', listener);
    return () => Hub.remove('auth', listener);
  }, []);

  if (user === undefined) {
    return (
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <ActivityIndicator />
      </View>
    );
  }

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown : false}}>
        {user ? (
          <>
            <Stack.Screen name='HomeScreen' component={HomeScreen}/>
          </>
        ) : (
          <>
            <Stack.Screen name='StartUpScreen' component={StartUpScreen}/>
            <Stack.Screen name='SignInScreen' component={SignInScreen}/>
            <Stack.Screen name='SignUpScreen' component={SignUpScreen}/>
            <Stack.Screen name='NewPasswordScreen' component={NewPasswordScreen}/>
            <Stack.Screen name='ForgotPasswordScreen' component={ForgotPasswordScreen}/>
            <Stack.Screen name='ConfirmEmailScreen' component={ConfirmEmailScreen}/>
          </>
        )}
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default Navigation