import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { TextInput } from 'react-native'

const CustomTextInput = ({ title, isSecureText, handleOnChangeText, handleValue, handlePlaceholder }) => {
    return (
        <View className="w-[80%] mb-5">
            <Text className="font-bold flex-start text-white">{title}</Text>
            <TextInput
                autoCapitalize='none'
                placeholder={handlePlaceholder}
                placeholderTextColor="#fff"
                secureTextEntry={isSecureText}
                className="w-full h-12 text-white border-white border-b border-x rounded-lg px-4 mt-2 bg-transparent"
                onChangeText={handleOnChangeText}
                value={handleValue}
            />
        </View>
    )
}

export default CustomTextInput

const styles = StyleSheet.create({
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