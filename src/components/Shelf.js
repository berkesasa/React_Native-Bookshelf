import { View, Text } from 'react-native'
import React from 'react'
import { Image } from 'expo-image'


const Shelf = () => {
    return (
        <View className="relative w-full">
            <Image
            className="w-[70vw] h-6"
            source={require('../../assets/raflık.png')}
            contentFit="contain"
            transition={1000}
          />
        </View>
    )
}

export default Shelf