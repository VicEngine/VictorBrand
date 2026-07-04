import { View, Text } from 'react-native'
import React from 'react'
import Card from '../screen/Auth/Card';
import Password from '../screen/Auth/Password';
import Recoverypass from '../screen/Auth/Recoverypass';
import Smscode from '../screen/Auth/Smscode';
import NewPassword from '../screen/Auth/NewPassword';
import Shoppe from '../screen/Auth/Shoppe';
import CreateAccount from '../screen/Auth/CreateAccount';
import Login from '../screen/Auth/Login';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


const Auth = () => {
    const Stack = createNativeStackNavigator();
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Shoppe" component={Shoppe} />
        <Stack.Screen name="CreateAccount" component={CreateAccount} />
        <Stack.Screen name="Card" component={Card} />
        <Stack.Screen name="Password" component={Password} />
        <Stack.Screen name="Recoverypass" component={Recoverypass} />
        <Stack.Screen name="Smscode" component={Smscode} />
        <Stack.Screen name="NewPassword" component={NewPassword} />
        <Stack.Screen name="Login" component={Login} />
    </Stack.Navigator>
  )
}

export default Auth