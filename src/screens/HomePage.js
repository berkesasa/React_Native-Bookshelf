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


const HomePage = () => {

  const [data, setData] = useState([]);
  const [isSaved, setIsSaved] = useState(false);
  const [bookTitle, setBookTitle] = useState('');
  const [bookPage, setBookPage] = useState('');
  const [bookAuthor, setBookAuthor] = useState('');
  const [bookYear, setBookYear] = useState('');
  const [modalVisible, setModalVisible] = useState(false);
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

    if (data.length > 20) {
      setModalVisible(true);
      return;
    }

    try {
      const docRef = await addDoc(collection(db, "bookStore"), {
        title: bookTitle,
        page: bookPage,
        author: bookAuthor,
        year: bookYear
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

  const groupData = (data, groupSize) => {
    let groups = [];
    for (let i = 0; i < data.length; i += groupSize) {
      groups.push(data.slice(i, i + groupSize));
    }
    return groups;
  };

  useEffect(() => {

  }, [data]);

  // Kitapları 6'lı gruplara ayır
  const bookGroups = groupData(data, 7);
  return (
    <View style={styles.container}>
      <StatusBar style='auto' />
      <ImageBackground source={require('../../assets/welcomebg.jpg')} className="w-full h-full flex-1 items-center justify-start">
        <View className="px-5 mt-20 flex items-center">
          {bookGroups.map((group, groupIndex) => (
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

        <View className="flex items-center justify-center px-5">
          <View className="flex flex-row">
            <TextInput
              value={bookTitle}
              onChangeText={setBookTitle}
              placeholder='enter your data'
              className="h-12 text-white border-white border-b border-x rounded-b px-4 mt-2 bg-transparent w-2/3"
            />
            <TextInput
              keyboardType='number-pad'
              value={bookPage}
              onChangeText={setBookPage}
              placeholder='enter your data'
              placeholderTextColor="white"
              className="h-12 text-white border-white border-b border-x rounded-b px-4 mt-2 bg-transparent w-1/3"
            />
          </View>
          <View className="flex flex-row">
            <TextInput
              value={bookAuthor}
              onChangeText={setBookAuthor}
              placeholder='enter your data'
              className="h-12 text-white border-white border-b border-x rounded-b px-4 mt-2 bg-transparent w-2/3"
            />
            <TextInput
              keyboardType='number-pad'
              value={bookYear}
              onChangeText={setBookYear}
              placeholder='enter your data'
              className="h-12 text-white border-white border-b border-x rounded-b px-4 mt-2 bg-transparent w-1/3"
            />
          </View>
        </View>

        {/* <Animated.FlatList
          entering={StretchInX}
          style={styles.flatlist}
          data={data}
          renderItem={renderItem}
          keyExtractor={item => item.id}
        /> */}

        <View className="flex items-center justify-center mt-10">
          <CustomButton
            buttonText="Save"
            handleOnPress={() => {
              { sendData(), setIsSaved(isSaved === false ? true : false) }
            }}
          />

          <CustomButton
            buttonText="Reload My Books"
            handleOnPress={getData}
          />

          {/* <CustomButton
            buttonText="Delete Data"
            handleOnPress={deleteData}
          /> */}

          <CustomButton
            extraClasses="bg-[#AE003C] mt-5"
            buttonText="Logout"
            handleOnPress={handleLogout}
          />
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