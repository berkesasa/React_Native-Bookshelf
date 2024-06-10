import { StyleSheet, View, Text, ActivityIndicator, Pressable } from 'react-native';
import { Image } from 'expo-image';

import React from 'react';

const Loading = ({ changeIsLoading, name }) => {
    return (
        <View className="flex-1 absolute w-full h-full">
            <Pressable
                onPress={() => changeIsLoading()}
                style={styles.closeContainer}
                className="absolute top-12 right-8 z-10 rounded-full w-10 h-10 bg-blue-500 flex items-center justify-center"
                >
                <Text style={styles.close}>X</Text>
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
    close: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 16,
    }
})