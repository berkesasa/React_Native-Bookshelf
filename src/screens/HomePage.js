import { Pressable, StyleSheet, Text, TextInput, View, FlatList, SafeAreaView, ImageBackground } from 'react-native'
import React, { useEffect, useState } from 'react'
import { StatusBar } from 'expo-status-bar'
import { doc, collection, addDoc, getDocs, deleteDoc, updateDoc } from "firebase/firestore";
import { db } from '../../firebase/firebaseConfig';
import { CustomButton } from '../components';
import { useDispatch } from 'react-redux';
import { logout } from '../redux/userSlice';
import Animated, { FlipInYRight, StretchInX } from 'react-native-reanimated';
import Book from '../components/Book';
import Shelf from '../components/Shelf';
import { Image } from 'expo-image';


const HomePage = () => {

  const [data, setData] = useState([]);
  const [isSaved, setIsSaved] = useState(false);
  const [bookTitle, setBookTitle] = useState('');
  const [bookPage, setBookPage] = useState('');
  const dispatch = useDispatch()

  console.log(isSaved);

  useEffect(() => {
    getData()
  }, [isSaved])

  // SEND DATA TO FIREBASE
  // const sendData = async () => {
  //   try {
  //     const docRef = await addDoc(collection(db, "reactNativeLesson"), {
  //       title: "Zero To Hero",
  //       content: "React Native tutorial for beginner",
  //       lesson: 95
  //     });
  //     console.log("Document written with ID: ", docRef.id);
  //   } catch (e) {
  //     console.error("Error adding document: ", e);
  //   }
  // }
  const sendData = async () => {
    try {
      const docRef = await addDoc(collection(db, "bookStore"), {
        title: bookTitle,
        page: bookPage
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
      const querySnapshot = await getDocs(collection(db, "bookStore"));
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
      await deleteDoc(doc(db, "bookStore", value));
      console.log("Delete successful");
    } catch (error) {
      console.log(error);
    }
  }

  //UPDATE DATA FROM FIREBASE
  const updateData = async (value) => {
    try {
      const lessonData = doc(db, "bookStore", value);

      await updateDoc(lessonData, {
        content: bookTitle
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
    <View style={styles.container}>
      <StatusBar style='auto' />
      <ImageBackground source={require('../../assets/background.jpg')} className="w-full h-full flex-1 items-center justify-center">

        <Text className="my-10">Bookshelf</Text>

        <View className="flex-row flex-wrap justify-center items-end">
          {data.map((item, index) => {
            return(
              <Book key={index} data={item} bookIndex={index}/>
            )
          })}
        </View>
        <View>
          <Shelf />
        </View>

        <View className="flex-row items-center justify-center">
          <TextInput
            value={bookTitle}
            onChangeText={setBookTitle}
            placeholder='enter your data'
            className="border border-white px-2 py-2"
          />
          <TextInput
            keyboardType='number-pad'
            value={bookPage}
            onChangeText={setBookPage}
            placeholder='enter your data'

            className="border border-white px-2 py-2"
          />
        </View>

        <Animated.FlatList
          entering={StretchInX}
          style={styles.flatlist}
          data={data}
          renderItem={renderItem}
          keyExtractor={item => item.id}
        />

        <View className=" items-center justify-center">
          <CustomButton
            buttonText="Save"
            handleOnPress={() => {
              { sendData(), setIsSaved(isSaved === false ? true : false) }
            }}
          />

          <CustomButton
            buttonText="Get Data"
            handleOnPress={getData}
          />

          <CustomButton
            buttonText="Delete Data"
            handleOnPress={deleteData}
          />

          <CustomButton
            buttonText="Update Data"
            handleOnPress={updateData}
          />

          <CustomButton
            buttonText="Logout"
            buttonColor="red"
            handleOnPress={handleLogout}
          />
        </View>
      </ImageBackground>
    </View>
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