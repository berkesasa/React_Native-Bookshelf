import { Pressable, StyleSheet, Text, TextInput, View, FlatList, SafeAreaView, ImageBackground, Modal } from 'react-native'
import React, { useState } from 'react'
import { StatusBar } from 'expo-status-bar'
import { doc, collection, getDocs, deleteDoc } from "firebase/firestore";
import { db } from '../../firebase/firebaseConfig';
import { useDispatch } from 'react-redux';
import { logout } from '../redux/userSlice';
import {Book, Shelf, AddBook, CustomButton} from '../components'
import { Image } from 'expo-image';

const HomePage = () => {

  const [data, setData] = useState([]);
  const dispatch = useDispatch()

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
      getData()
      console.log("Delete successful");
    } catch (error) {
      console.log(error);
    }
  }

  // LOGOUT
  const handleLogout = () => {
    dispatch(logout())
  }

  const groupData = (data, groupSize) => {
    let groups = [];
    for (let i = 0; i < data.length; i += groupSize) {
      groups.push(data.slice(i, i + groupSize));
    }
    return groups;
  };

  const bookGroups = groupData(data, 7);
  return (
    <View className="flex-1 justify-center items-start">
      <StatusBar style='light' />
      <ImageBackground source={require('../../assets/homepage-bg.png')} className="w-full h-full flex-1 items-center justify-between">
        {/* Books */}
        <View className="px-5 mt-10 flex items-center">
          {bookGroups.length == 0 ? (
            <View>
              <Image
                className="w-60 h-40"
                source={require('../../assets/nobook.png')}
                contentFit="contain"
                transition={1000}
              />
              <Text className="text-white text-center">You have no book. Please add!</Text>
            </View>
          ) : bookGroups.map((group, groupIndex) => (
            <View key={groupIndex} className="w-full mt-10">
              <View className="flex-row flex-wrap items-start justify-start w-full relative z-10 px-12">
                {group.map((item, index) => (
                  <Book key={index} data={item} bookIndex={groupIndex * 7 + index} deleteData={deleteData} />
                ))}
              </View>
              <View className="-translate-y-3 relative">
                <Shelf />
              </View>
            </View>
          ))}
        </View>

        {/* Buttons */}
        <View className="flex items-center justify-center my-10 w-full px-5">

          <View className="flex flex-row w-full justify-between">
            {/* Synchronice Book in Database */}
            <CustomButton
              buttonText="Reload My Books"
              handleOnPress={getData}
            />

            {/* Add Book */}
            <AddBook data={data} getData={getData} />

          </View>

          {/* Logout */}
          <Pressable
            onPress={handleLogout}
            className={`rounded-full px-10 py-3 flex items-center justify-center bg-[#AE003C] mt-5 w-full`}
          >
            <Text className="text-white font-bold text-lg">Logout</Text>
          </Pressable>
        </View>

      </ImageBackground>
    </View>
  )
}

export default HomePage
