import { View, Text, ImageBackground } from 'react-native'
import React, { useEffect } from 'react'
import { StatusBar } from 'expo-status-bar';
import { Image } from 'expo-image';
import { CustomButton } from '../components';

const Welcome = ({ navigation }) => {
    return (
        <View className="w-full h-full relative">
            <StatusBar style="light" />
            <ImageBackground source={require('../../assets/welcomebg.jpg')} className="w-full h-full flex-1 items-center justify-end">
                <View className="self-start px-5">
                    <Text className="text-white font-medium text-2xl">Explore your</Text>
                    <Text className="text-white font-extrabold text-5xl mt-1">Book World</Text>
                </View>

                <Image
                    contentFit="contain"
                    transition={1000}
                    className="h-[45%] w-full my-5"
                    source={require('../../assets/welcome.png')}
                />

                <View className="w-full py-3 relative bg-white/30 mb-5">
                    <Text className="text-white text-center font-medium text-lg">Lorem ipsum dolor sit amet.</Text>
                </View>

                <CustomButton
                    buttonText="Let's get started!"
                    extraClasses="mb-[15%] w-[70%]"
                    handleOnPress={() => navigation.navigate('Login')}
                />

            </ImageBackground>

        </View>
    )
}

export default Welcome