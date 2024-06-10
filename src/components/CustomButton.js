import { Text, View } from 'react-native'
import React from 'react'
import { Pressable } from 'react-native'

const CustomButton = ({buttonText, handleOnPress, extraClasses=""}) => {
    return (
        <Pressable
            onPress={handleOnPress}
            className={`rounded-full px-10 py-3 flex items-center justify-center bg-white ${extraClasses} shadow-xl`}
        >
            <Text className="text-blue-500 font-bold text-lg">{buttonText}</Text>
        </Pressable>
    )
}

export default CustomButton
