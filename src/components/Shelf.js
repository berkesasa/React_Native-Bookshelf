import { View } from 'react-native'
import React from 'react'
import { Image } from 'expo-image'


const Shelf = () => {
    return (
        <View className="relative w-full">
            <Image
            className="w-[80vw] h-7"
            source={require('../../assets/raflık2.png')}
            contentFit="contain"
            transition={1000}
          />
        </View>
    )
}

export default Shelf