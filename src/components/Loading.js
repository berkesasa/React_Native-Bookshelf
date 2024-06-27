import { View, Text, Pressable } from 'react-native';
import { Image } from 'expo-image';

import React from 'react';

const Loading = ({ changeIsLoading }) => {
    return (
        <View className="flex-1 absolute w-full h-full">
            <Pressable
                onPress={() => changeIsLoading()}
                className="absolute top-12 right-8 z-10 rounded-full w-10 h-10 bg-blue-500 flex items-center justify-center"
                >
                <Text className="text-white font-bold text-lg">X</Text>
            </Pressable>

            <Image
                className="w-full h-full absolute top-0 left-0"
                source={require('../../assets/loading.gif')}
                contentFit="cover"
                transition={1000}
            />
        </View>
    )
}

export default Loading;
