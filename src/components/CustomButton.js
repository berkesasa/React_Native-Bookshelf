import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Pressable } from 'react-native'

const CustomButton = ({buttonText, setWidth, handleOnPress, pressButtonColor, buttonColor}) => {
    return (
        <Pressable
            onPress={handleOnPress}
            style={({ pressed }) => [{
                backgroundColor: pressed ? pressButtonColor : buttonColor,
                width: setWidth
            }, styles.button]}
        >
            <Text style={styles.buttonText}>{buttonText}</Text>
        </Pressable>
    )
}

export default CustomButton

const styles = StyleSheet.create({
    button: {
        height: 50,
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 20,
    },
    buttonText: {
        color: 'white',
        fontWeight: 'bold'
    },
})