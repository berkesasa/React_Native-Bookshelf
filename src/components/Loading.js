import { StyleSheet, View, Text, ActivityIndicator, Pressable } from 'react-native';
import React from 'react';

const Loading = ({changeIsLoading,name}) => {
    return (
        <View style={styles.container}>
            <Pressable
            onPress={()=>changeIsLoading()}
            style={styles.closeContainer}>
                <Text style={styles.close}>X</Text>
            </Pressable>
            <ActivityIndicator
                size='small'
                color='blue'
            />
            <Text style={styles.loginText}>{name} Loading...</Text>
        </View>
    )
}

export default Loading;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        position: 'absolute',
        backgroundColor: 'tomato',
        width: '100%',
        height: '100%',
        alignItems: 'center',
        justifyContent: 'center',
    },
    loginText: {
        fontWeight: 'bold',
        fontSize: 16,
        color: 'white',
        marginTop: 20
    },
    closeContainer: {
        backgroundColor: 'black',
        width: 50,
        height: 50,
        borderRadius: 50,
        justifyContent: 'center',
        alignItems: 'center',
        position: 'absolute',
        top: 50,
        right: 30
    },
    close: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 16,
    }
})