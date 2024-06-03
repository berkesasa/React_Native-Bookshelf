import { Pressable, StyleSheet, Text, TextInput, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { StatusBar } from 'expo-status-bar'
import { doc, collection, addDoc, getDocs, deleteDoc, updateDoc } from "firebase/firestore";
import { db } from '../../firebase/firebaseConfig';
import { CustomButton } from '../components';


const HomePage = () => {

  const [data, setData] = useState([]);
  const [isSaved, setIsSaved] = useState(false);
  const [updateTheData, setUpdateTheData] = useState('');

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

  return (
    <View style={styles.container}>
      <StatusBar style='auto' />
      <Text>HomePage</Text>

      <TextInput 
      value={updateTheData}
      onChangeText={setUpdateTheData}
      placeholder='enter your data'
      style={{borderWidth:1,width:'50%',paddingVertical:10, textAlign:'center',marginBottom:20}}
      />

      {data.map((value, index) => {
        return (
          <Pressable
          onPress={()=>[updateData(value.id), setIsSaved(isSaved === false ? true : false)]}
          key={index}>
            <Text>{index}</Text>
            <Text>{value.id}</Text>
            <Text>{value.title}</Text>
            <Text>{value.content}</Text>
            <Text>{value.lesson}</Text>
          </Pressable>
        )
      })}

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
  }
})