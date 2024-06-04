import { Pressable, StyleSheet, Text, TextInput, View, FlatList, SafeAreaView } from 'react-native'
import React, { useEffect, useState } from 'react'
import { StatusBar } from 'expo-status-bar'
import { doc, collection, addDoc, getDocs, deleteDoc, updateDoc } from "firebase/firestore";
import { db } from '../../firebase/firebaseConfig';
import { CustomButton } from '../components';
import { useDispatch } from 'react-redux';
import { logout } from '../redux/userSlice';
import Animated, {FlipInYRight,StretchInX } from 'react-native-reanimated';


const HomePage = () => {

  const [data, setData] = useState([]);
  const [isSaved, setIsSaved] = useState(false);
  const [updateTheData, setUpdateTheData] = useState('');
  const dispatch = useDispatch()

  console.log(isSaved);

  useEffect(() => {
    getData()
  }, [isSaved])

  // SEND DATA TO FIREBASE
  const sendData = async () => {
    try {
      const docRef = await addDoc(collection(db, "reactNativeLesson"), {
        title: "Zero To Hero",
        content: "React Native tutorial for beginner",
        lesson: 95
      });
      console.log("Document written with ID: ", docRef.id);
    } catch (e) {
      console.error("Error adding document: ", e);
    }
  }

  // GET DATA FROM FIREBASE
  const getData = async () => {
    const allData = []

    try {
      const querySnapshot = await getDocs(collection(db, "reactNativeLesson"));
      querySnapshot.forEach((doc) => {
        allData.push({ ...doc.data(), id: doc.id })
      });
      setData(allData)

    } catch (error) {
      console.log(error);
    }
  }

  //DELETE DATA FROM FIREBASE
  const deleteData = async (value) => {
    try {
      await deleteDoc(doc(db, "reactNativeLesson", value));
      console.log("Delete successful");
    } catch (error) {
      console.log(error);
    }
  }

  //UPDATE DATA FROM FIREBASE
  const updateData = async (value) => {
    try {
      const lessonData = doc(db, "reactNativeLesson", value);

      await updateDoc(lessonData, {
        content: updateTheData
      });

    } catch (error) {
      console.log(error);
    }
  }

  // LOGOUT
  const handleLogout = () => {
    dispatch(logout())
  }

  const renderItem = ({ item, index }) => {
    return (
      <Animated.View
        entering={FlipInYRight.delay((1 + index) * 100)}
        style={styles.flatlistContainer}>
        <Text>{item.id}</Text>
        <Text>{item.title}</Text>
        <Text>{item.content}</Text>
        {/* <Text>{item.lesson}</Text> */}
      </Animated.View>
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style='auto' />
      <Text>HomePage</Text>

      <TextInput
        value={updateTheData}
        onChangeText={setUpdateTheData}
        placeholder='enter your data'
        style={{ borderWidth: 1, width: '50%', paddingVertical: 10, textAlign: 'center', marginBottom: 20 }}
      />

      <Animated.FlatList
        entering={StretchInX}
        style={styles.flatlist}
        data={data}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      />

      <CustomButton
        buttonText="Save"
        setWidth="40%"
        buttonColor="blue"
        pressButtonColor="gray"
        handleOnPress={() => {
          { sendData(), setIsSaved(isSaved === false ? true : false) }
        }}
      />

      <CustomButton
        buttonText="Get Data"
        setWidth="40%"
        buttonColor="blue"
        pressButtonColor="gray"
        handleOnPress={getData}
      />

      <CustomButton
        buttonText="Delete Data"
        setWidth="40%"
        buttonColor="blue"
        pressButtonColor="gray"
        handleOnPress={deleteData}
      />

      <CustomButton
        buttonText="Update Data"
        setWidth="40%"
        buttonColor="blue"
        pressButtonColor="gray"
        handleOnPress={updateData}
      />

      <CustomButton
        buttonText="Logout"
        setWidth="40%"
        buttonColor="red"
        pressButtonColor="gray"
        handleOnPress={handleLogout}
      />

    </SafeAreaView>
  )
}

export default HomePage

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'tomato'
  },
  flatlistContainer: {
    borderWidth: 1,
    marginVertical: 5,
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  },
  flatlist: {
    backgroundColor: "white",
    width: "90%",
    padding: 10
  }
})