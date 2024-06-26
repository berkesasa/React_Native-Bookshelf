import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { TextInput } from 'react-native'

const CustomTextInput = ({ keyboardType, value, onChangeText, placeholder, title }) => {
    return (
        <View className="w-full mb-5">
            <Text className="font-bold flex-start">{title}</Text>
            <TextInput
                keyboardType={keyboardType}
                value={value}
                onChangeText={onChangeText}
                placeholder={placeholder}
                className="h-12 text-black border-black border-b border-x rounded-b px-4 mt-2 bg-transparent w-full"
            />
        </View>
    )
}

export default CustomTextInput
