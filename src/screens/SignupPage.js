import { StyleSheet, Text, View, SafeAreaView, ImageBackground } from 'react-native'
import React from 'react'
import { useState } from 'react'
import { CustomButton, CustomTextInput, Loading } from '../components'
import { useDispatch, useSelector } from 'react-redux'
import { register } from '../redux/userSlice'
import { Image } from 'expo-image';


const SignupPage = ({ navigation }) => {

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch()
  const { isLoading } = useSelector(state => state.user)

  const handleRegister = () => {
    dispatch(register({ email, password }))
  }

  if (isLoading) {
    return <Loading />
  }

  return (
    <View className="w-full h-full">

      <ImageBackground source={require('../../assets/background.jpg')} className="w-full h-full flex-1 items-center justify-center">

        <Text className="text-4xl font-bold mb-5 text-white">Sign Up</Text>
        <Image
          className="w-full h-32 mb-5"
          source={require('../../assets/signupicon.png')}
          contentFit="contain"
          transition={1000}
        />

        <View className="flex flex-col justify-center w-full items-center">
          <CustomTextInput
            title="Name"
            isSecureText={false}
            handleOnChangeText={setName}
            handleValue={name}
            handlePlaceholder="Enter Your Name"
          />
          <CustomTextInput
            title="Email"
            isSecureText={false}
            handleOnChangeText={setEmail}
            handleValue={email}
            handlePlaceholder="Enter Your Email"
          />
          <CustomTextInput
            title="Password"
            isSecureText={true}
            handleOnChangeText={setPassword}
            handleValue={password}
            handlePlaceholder="Create Your Password"
          />
        </View>

        <View className style={styles.signUpOptions}>
          <CustomButton
            buttonText="Sign Up"
            extraClasses='mt-5'
            handleOnPress={handleRegister}
          />
          <View className="mt-5">
            <Text className="text-white">Already have an account? <Text className="text-white underline" onPress={() => navigation.navigate('Login')}>Login</Text></Text>
          </View>
          
        </View>
      </ImageBackground>

    </View>
  )
}

export default SignupPage

const styles = StyleSheet.create({
  signUpOptions: {
    width: "100%",
    alignItems: "center",
    alignItems: "center",
    justifyContent: "space-between"
  },
})