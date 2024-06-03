import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';
import { Loading, CustomTextInput, CustomButton } from '../components';
import { useDispatch, useSelector } from 'react-redux';
import { setEmail, setPassword, setIsLoading, setLogin, login, autoLogin } from '../redux/userSlice';
import { useState, useEffect } from 'react';

export default function LoginPage({ navigation }) {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const {isLoading, error} = useSelector((state) => state.user)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(autoLogin())
  }, []);

  return (
    <View style={styles.container}>

      <StatusBar style="auto" />

      <Text style={styles.welcome}>Welcome</Text>
      <Image
        style={styles.image}
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
        handleOnPress={() => dispatch(login({email, password}))}
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

      {isLoading
        ? <Loading name="Login" changeIsLoading={() => dispatch(setIsLoading(false))} />
        : null}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: '100%',
    width: '100%',
    flex: 1,
    backgroundColor: 'tomato',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputContainer: {
    width: '80%',
  },

  signUpButton: {
    width: '30%',
    height: 50,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    width: 100,
    height: 100,
    marginBottom: 20,
  },
  welcome: {
    fontSize: 30,
    fontWeight: 'bold',
    marginBottom: 20,
    color: 'white',
  },
});
