import { View, Text, Modal, Pressable, TouchableHighlight } from 'react-native'
import React, { useState } from 'react'
import { Image } from 'expo-image'


const Book = ({ bookIndex, data }) => {

  print(data.id)
  toString(bookIndex)
  var sourcee = ""
  var widthHeight = ""

  if (bookIndex % 3 == 1) {
    sourcee = require(`../../assets/kitap-1.png`)
    widthHeight = ""
  } else if (bookIndex % 3 == 2) {
    sourcee = require(`../../assets/kitap-4.png`)
  } else {
    sourcee = require(`../../assets/kitap-2.png`)
  }

  print(sourcee)

  const [modalVisible, setModalVisible] = useState(false);

  return (
    <View className="relative">
      <Modal
        animationType="fade"
        transparent={true}
        statusBarTranslucent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert('Modal has been closed.');
          setModalVisible(!modalVisible);
        }}>
        <View className="flex-1 items-center justify-center h-full bg-black">
          <View className="w-52 h-52 bg-white rounded-xl">
            <Text>Hello World!</Text>
            <Pressable

              onPress={() => setModalVisible(!modalVisible)}>
              <Text>Hide Modal</Text>
            </Pressable>
          </View>
        </View>
      </Modal>
      <TouchableHighlight onPress={() => setModalVisible(true)}>
        <Image
          className="w-10 h-[120px]"
          source={sourcee}
          contentFit="contain"
          transition={1000}
        />
      </TouchableHighlight>

    </View>
  )
}

export default Book



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