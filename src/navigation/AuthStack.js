import React from 'react'
import { LoginPage, SignupPage, Welcome } from '../screens'
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

const AuthStack = () => {
    return (
        <Stack.Navigator
            initialRouteName='Welcome'
            screenOptions={{ headerShown: false, animation: 'slide_from_right' }}
        >
            <Stack.Screen
                name="Welcome"
                component={Welcome}
            />
            <Stack.Screen
                name="Login"
                component={LoginPage}
            />
            <Stack.Screen
                name="Signup"
                component={SignupPage}
            />
        </Stack.Navigator>
    )
}

export default AuthStack
