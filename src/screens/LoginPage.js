import { StatusBar } from 'expo-status-bar';
import { Text, View, Image, ImageBackground } from 'react-native';
import { Loading, CustomTextInput, CustomButton } from '../components';
import { useDispatch, useSelector } from 'react-redux';
import { setEmail, setPassword, setIsLoading, setLogin, login, autoLogin } from '../redux/userSlice';
import { useState, useEffect } from 'react';
import { BlurView } from 'expo-blur';


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

        <View className="items-center justify-center rounded-xl overflow-hidden relative w-full">

          <Text className="text-[30px] font-bold mb-5 text-white">Welcome</Text>
          <Image
            className="w-32 h-32 mb-5"
            source={require('../../assets/images/loginIcon.png')}
          />

          <CustomTextInput
            title="Email"
            isSecureText={false}
            handleOnChangeText={(text) => setEmail(text)}
            handleValue={email}
            handlePlaceholder="Enter Your Email"
          />

          <CustomTextInput
            title="Password"
            isSecureText={true}
            handleOnChangeText={(password) => setPassword(password)}
            handleValue={password}
            handlePlaceholder="Enter Your Password"
          />

          {error && <Text>Kullanıcı adı ve ya şifre hatalı</Text>}

          <CustomButton
            buttonText="Login"
            setWidth="80%"
            handleOnPress={() => dispatch(login({ email, password }))}
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
      </ImageBackground>



      {isLoading
        ? <Loading name="Login" changeIsLoading={() => dispatch(setIsLoading(false))} />
        : null}
    </View>
  );
}
