import { View, Text, Image } from 'react-native'
import React, { useEffect } from 'react'
import { LinearGradient } from 'expo-linear-gradient';
import Animated, {
    useSharedValue,
    useAnimatedStyle,
    withTiming,
    withRepeat,
    Easing,
} from 'react-native-reanimated';
import { CustomButton } from '../components';

const Welcome = ({ navigation }) => {

    // Shared value for vertical position
    const translateY = useSharedValue(0);

    // Define the animated style
    const animatedStyle = useAnimatedStyle(() => {
        return {
            transform: [{ translateY: translateY.value }],
        };
    });

    useEffect(() => {
        // Run the animation
        translateY.value = withRepeat(
            withTiming(5, {
                duration: 2000,
                easing: Easing.linear,
            }),
            -1,
            true
        );
    }, [translateY]);

    return (
        <View className="w-full h-full flex items-center justify-start">
            <LinearGradient
                className="absolute top-0 left-0 right-0 h-full"
                colors={['#392467', '#5D3587', '#A367B1']}

            />
            <Animated.View className="w-[70%] flex items-center justify-center" style={[animatedStyle]}>
                <Image
                    style={{
                        resizeMode: 'contain',
                    }}
                    className="w-full"
                    source={require('../../assets/welcome.png')}
                />
            </Animated.View>

            <Text className="text-white text-xl text-center">

                {`
Didn't you find anyone in space?
Let's take a look at this
`}
            </Text>

            <CustomButton
                buttonText="Login"
                setWidth="80%"
                handleOnPress={() => navigation.navigate('Login')}
                buttonColor="blue"
                pressButtonColor="lightblue"
            />

            <CustomButton
                buttonText="Sign Up"
                setWidth="30%"
                handleOnPress={() => navigation.navigate('Signup')}
                buttonColor="red"
                pressButtonColor="pink"
            />
        </View>
    )
}

export default Welcome