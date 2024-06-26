import { Pressable, StyleSheet, Text, TextInput, View, FlatList, SafeAreaView, ImageBackground, Modal } from 'react-native'
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
import AddBook from '../components/AddBook';


const HomePage = () => {

  const [data, setData] = useState([]);
  const [modalVisible, setModalVisible] = useState(false);
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


  // Kitapları 6'lı gruplara ayır
  const bookGroups = groupData(data, 7);
  return (
    <View style={styles.container}>
      <StatusBar style='light' />
      <ImageBackground source={require('../../assets/welcomebg.jpg')} className="w-full h-full flex-1 items-center justify-between">
        {/* Books */}
        <View className="px-5 mt-20 flex items-center">
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
            <View key={groupIndex} className="w-full">
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
        <View className="flex items-center justify-center my-10">
          {/* Add Book */}
          <AddBook data={data} getData={getData} />

          {/* Synchronice Book in Database */}
          <CustomButton
            extraClasses="mt-5"
            buttonText="Reload My Books"
            handleOnPress={getData}
          />

          {/* Logout */}
          <Pressable
            onPress={handleLogout}
            className={`rounded-full px-10 py-3 flex items-center justify-center bg-[#AE003C] mt-5`}
          >
            <Text className="text-white font-bold text-lg">Logout</Text>
          </Pressable>
        </View>


        <Modal
          animationType="slide"
          transparent={true}
          visible={modalVisible}
          onRequestClose={() => {
            setModalVisible(!modalVisible);
          }}
        >
          <View style={styles.modalView}>
            <Text>Data length is greater than 7. Cannot send data.</Text>
            <Pressable title="Close" onPress={() => setModalVisible(!modalVisible)} />
          </View>
        </Modal>
      </ImageBackground>
    </View>
  )
}

export default HomePage

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5
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