import React from 'react'
import { HomePage } from '../screens'
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

const UserStack = () => {
    return (
        <Stack.Navigator
            initialRouteName='Home'
            screenOptions={{ headerShown: false }}
        >
            <Stack.Screen
                name="Home"
                component={HomePage}
            />
        </Stack.Navigator>
    )
}

export default UserStack