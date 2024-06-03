import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { TextInput } from 'react-native'

const CustomTextInput = ({ title, isSecureText, handleOnChangeText, handleValue, handlePlaceholder }) => {
    return (
        <View style={styles.inputContainer}>
            <Text style={styles.inputBoxText}>{title}</Text>
            <TextInput
                autoCapitalize='none'
                placeholder={handlePlaceholder}
                secureTextEntry={isSecureText}
                style={styles.textInputStyle}
                onChangeText={handleOnChangeText}
                value={handleValue}
            />
        </View>
    )
}

export default CustomTextInput

const styles = StyleSheet.create({
    inputContainer: {
        width: '80%',
    },
    inputBoxText: {
        fontWeight: 'bold',
        alignSelf: 'flex-start',
        color: 'white',

    },
    textInputStyle: {
        borderBottomWidth: 0.5,
        width: '100%',
        height: 50,
        color: 'white',
        borderRadius: 10,
        marginVertical: 10,
        textAlign: 'center',
        borderColor: 'white',
    },
})