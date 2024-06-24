import { View, Text, Modal, Pressable, TouchableHighlight, StyleSheet } from 'react-native'
import React, { useState } from 'react'
import { Image } from 'expo-image'
import CustomButton from './CustomButton'


const Book = ({ bookIndex, data, deleteData }) => {
  toString(bookIndex)

  const handleDelete = () => {
    const bookId = 'someBookId'; // Silmek istediğiniz kitabın ID'si
    deleteData(data.id);
  };

  if (bookIndex % 5 == 1) {
    sourcee = require(`../../assets/kitap-2.png`)
    widthHeight = ""
  } else if (bookIndex % 5 == 2) {
    sourcee = require(`../../assets/kitap-3.png`)
  } else if (bookIndex % 5 == 3) {
    sourcee = require(`../../assets/kitap-4.png`)
  } else if (bookIndex % 5 == 4) {
    sourcee = require(`../../assets/kitap-5.png`)
  } else {
    sourcee = require(`../../assets/kitap-1.png`)
  }

  const [modalVisible, setModalVisible] = useState(false);


  return (
    <View className="relative">
      <Modal
        animationType="slide"
        transparent={true}
        statusBarTranslucent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(!modalVisible);
        }}>
        <View className="absolute bottom-0 h-[40%] w-full">
          <View className="bg-white rounded-t-xl relative p-7 h-full">
            <Text>{data.title}</Text>
            <Text>{data.page}</Text>
            <Text>{data.value}</Text>
            <CustomButton
              buttonText="Delete Data"
              handleOnPress={handleDelete}
            />
            <Pressable
              className="absolute top-3 right-3 bg-black rounded-full w-10 h-10 flex items-center justify-center"
              onPress={() => setModalVisible(!modalVisible)}>
              <Text className="text-white">X</Text>
            </Pressable>
          </View>
        </View>
      </Modal>

      {/* <Modal animationType="slide" transparent={true} visible={isVisible}>
        <View style={styles.modalContent}>
          <View style={styles.titleContainer}>
            <Text style={styles.title}>Choose a sticker</Text>
            <Pressable onPress={onClose}>
              <MaterialIcons name="close" color="#fff" size={22} />
            </Pressable>
          </View>
          {children}
        </View>
      </Modal> */}

      <TouchableHighlight
        underlayColor="transparent"
        onPress={() => setModalVisible(true)}>
        <Image
          className="w-8 h-24"
          source={sourcee}
          contentFit="contain"
          transition={1000}
        />
      </TouchableHighlight>

    </View>
  )
}

export default Book

const styles = StyleSheet.create({
  modalContent: {
    height: '25%',
    width: '100%',
    backgroundColor: '#25292e',
    borderTopRightRadius: 18,
    borderTopLeftRadius: 18,
    position: 'absolute',
    bottom: 0,
  },
  titleContainer: {
    height: '16%',
    backgroundColor: '#464C55',
    borderTopRightRadius: 10,
    borderTopLeftRadius: 10,
    paddingHorizontal: 20,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  title: {
    color: '#fff',
    fontSize: 16,
  },
});




{/* <View className="flex-row flex-wrap justify-center items-end">
<View className="relative">
  <Image
    className="w-10 h-[120px]"
    source={require(`../../assets/kitap-1.png`)}
    contentFit="contain"
    transition={1000}
  />
</View>
<View className="relative">
  <Image
    className="w-10 h-[120px]"
    source={require(`../../assets/kitap-2.png`)}
    contentFit="contain"
    transition={1000}
  />
</View>
<View className="relative right-2.5">
  <Image
    className="w-[52px] h-[156px]"
    source={require(`../../assets/kitap-3-2.png`)}
    contentFit="contain"
    transition={1000}
  />
</View>
<View className="relative">
  <Image
    className="w-10 h-[120px]"
    source={require(`../../assets/kitap-4.png`)}
    contentFit="contain"
    transition={1000}
  />
</View>
</View> */}