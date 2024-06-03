import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import AuthStack from './AuthStack';
import UserStack from './UserStack';
import { UseSelector, useSelector } from 'react-redux';
import app from '../../firebase/firebaseConfig';


const rootNavigation = () => {

    const {isAuth} = useSelector((state) => state.user)

    return (
        <NavigationContainer>
            {
                !isAuth
                    ? <AuthStack />
                    : <UserStack /> 
            }
        </NavigationContainer>
    )
}

export default rootNavigation

const styles = StyleSheet.create({})