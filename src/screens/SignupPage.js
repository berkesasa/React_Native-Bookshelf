import { StyleSheet, Text, View, SafeAreaView, Pressable, Image } from 'react-native'
import React from 'react'
import { useState } from 'react'
import { CustomButton, CustomTextInput, Loading } from '../components'
import { useDispatch, useSelector } from 'react-redux'
import { register } from '../redux/userSlice'

const SignupPage = ({navigation}) => {

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch()
  const { isLoading } = useSelector(state => state.user)

  const handleRegister = () => {
    dispatch(register({email, password}))
  }

  if (isLoading) {
    return <Loading/>
  }

  return (
    <SafeAreaView style={styles.container}>


      <View style={styles.title}>
        {/* <Image
          style={styles.image}
          source={require('../../assets/images/signupIcon.png')}
        /> */}
        <Text style={styles.signUp}>Sign Up</Text>
      </View>

      <View style={styles.textInputContainer}>
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

      <View style={styles.signUpOptions}>
        <CustomButton
          buttonText="Sign Up"
          setWidth="80%"
          buttonColor="blue"
          pressButtonColor="lightblue"
          handleOnPress={handleRegister}
        />
        <View className="mt-5">
            <Text className="text-white">Already have an account? <Text className="text-white underline" onPress={() => navigation.navigate('Login')}>Login</Text></Text>
          </View>
      </View>

    </SafeAreaView>
  )
}

export default SignupPage

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'tomato'
  },
  signUp: {
    fontSize: 30,
    fontWeight: 'bold',
    marginBottom: 20,
    color: 'white',
  },
  textInputContainer: {
    flex: 2,
    paddingVertical: 20,
    width: "100%",
    alignItems: "center",
    justifyContent: 'space-between',
  },
  title: {
    flex: 2,
    paddingTop: 50,
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  signUpOptions: {
    flex: 2,
    width: "100%",
    alignItems: "center",
    alignItems: "center",
    justifyContent: "space-between"
  },
  image: {
    width: 80,
    height: 80,
    marginBottom: 20,
  },
})