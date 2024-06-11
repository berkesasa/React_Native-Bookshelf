import { StatusBar } from 'expo-status-bar';
import { Text, View, ImageBackground, Pressable } from 'react-native';
import { Loading, CustomTextInput, CustomButton } from '../components';
import { useDispatch, useSelector } from 'react-redux';
import { setIsLoading, login, autoLogin } from '../redux/userSlice';
import { useState, useEffect } from 'react';
import { Image } from 'expo-image';

export default function LoginPage({ navigation }) {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { isLoading, error } = useSelector((state) => state.user)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(autoLogin())
  }, []);

  return (
    <View className="w-full h-full">

      <StatusBar style="auto" />

      <ImageBackground source={require('../../assets/background.jpg')} className="w-full h-full flex-1 items-center justify-center">

          <Text className="text-4xl font-bold mb-5 text-white">Welcome!</Text>
          <Image
            className="w-full h-32 mb-5"
            source={require('../../assets/loginicon.png')}
            contentFit="contain"
            transition={1000}
          />

          <CustomTextInput
            title="Email"
            keyboardType="email-address"
            isSecureText={false}
            handleOnChangeText={(text) => setEmail(text)}
            handleValue={email}
            handlePlaceholder="Enter Your Email"
          />

          <CustomTextInput
            title="Password"
            keyboardType="default"
            isSecureText={true}
            handleOnChangeText={(password) => setPassword(password)}
            handleValue={password}
            handlePlaceholder="Enter Your Password"
          />

          {error && <Text>Kullanıcı adı ve ya şifre hatalı</Text>}

          <CustomButton
            buttonText="Login"
            extraClasses='mt-2'
            handleOnPress={() => dispatch(login({ email, password }))}
          />

          <View className="mt-5">
            <Text className="text-white">Don't have an account? <Text className="text-white underline" onPress={() => navigation.navigate('Signup')}>Sign Up</Text></Text>
          </View>

      </ImageBackground>

      {isLoading
        ? <Loading name="Login" changeIsLoading={() => dispatch(setIsLoading(false))} />
        : null}
    </View>
  );
}
