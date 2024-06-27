import { View, Text, Modal, Pressable, TouchableHighlight } from 'react-native'
import React, { useState } from 'react'
import { Image } from 'expo-image'
import Svg, { G, Path, Rect } from "react-native-svg";


const Book = ({ bookIndex, data, deleteData }) => {
  toString(bookIndex)

  const handleDelete = () => {
    deleteData(data.id);
    setModalVisible(!modalVisible)
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
        <View className="absolute bottom-0 h-auto w-full">
          <View className="bg-white rounded-t-xl relative p-7 h-full flex items-start">
            {/* Book Data */}
            <View className="relative flex justify-start items-start">
              {/* Book Name */}
              <View className="flex-row items-center mb-2">
                <Svg
                  fill="black"
                  className=""
                  width="32px"
                  height="32px"
                  viewBox="0 0 36 36"
                  preserveAspectRatio="xMidYMid meet"
                  xmlns="http://www.w3.org/2000/svg"
                  xmlnsXlink="http://www.w3.org/1999/xlink"
                >
                  <Rect
                    className="clr-i-solid clr-i-solid-path-1"
                    x={10}
                    y={5.2}
                    width={18}
                    height={1.55}
                  />
                  <Path
                    className="clr-i-solid clr-i-solid-path-2"
                    d="M29,8H9.86A1.89,1.89,0,0,1,8,6,2,2,0,0,1,9.86,4H29a1,1,0,1,0,0-2H9.86A4,4,0,0,0,6,6a4.14,4.14,0,0,0,0,.49,1,1,0,0,0,0,.24V30a4,4,0,0,0,3.86,4H29a1,1,0,0,0,1-1V9.25s0-.06,0-.09,0-.06,0-.09A1.07,1.07,0,0,0,29,8Z"
                  />
                  <Rect x={0} y={0} width={36} height={36} fillOpacity={0} />
                </Svg>
                <Text className="ml-2 font-bold">Book Name:</Text>
                <Text className="ml-1">{data.title}</Text>
              </View>
              {/* Book Author */}
              <View className="flex-row items-center mb-2">
                <Svg
                  fill="black"
                  className=""
                  width="32px"
                  height="32px"
                  id="Capa_1"
                  xmlns="http://www.w3.org/2000/svg"
                  xmlnsXlink="http://www.w3.org/1999/xlink"
                  x="0px"
                  y="0px"
                  viewBox="0 0 964.07 964.07"
                  style={{
                    enableBackground: "new 0 0 964.07 964.07",
                  }}
                  xmlSpace="preserve"
                >
                  <G>
                    <Path d="M850.662,877.56c-0.77,0.137-4.372,0.782-10.226,1.831c-230.868,41.379-273.337,48.484-278.103,49.037 c-11.37,1.319-19.864,0.651-25.976-2.042c-3.818-1.682-5.886-3.724-6.438-4.623c0.268-1.597,2.299-5.405,3.539-7.73 c1.207-2.263,2.574-4.826,3.772-7.558c7.945-18.13,2.386-36.521-14.51-47.999c-12.599-8.557-29.304-12.03-49.666-10.325 c-12.155,1.019-225.218,36.738-342.253,56.437l-57.445,45.175c133.968-22.612,389.193-65.433,402.622-66.735 c11.996-1.007,21.355,0.517,27.074,4.4c3.321,2.257,2.994,3.003,2.12,4.997c-0.656,1.497-1.599,3.264-2.596,5.135 c-3.835,7.189-9.087,17.034-7.348,29.229c1.907,13.374,11.753,24.901,27.014,31.626c8.58,3.78,18.427,5.654,29.846,5.654 c4.508,0,9.261-0.292,14.276-0.874c9.183-1.065,103.471-17.67,280.244-49.354c5.821-1.043,9.403-1.686,10.169-1.821 c9.516-1.688,15.861-10.772,14.172-20.289S860.183,875.87,850.662,877.56z" />
                    <Path d="M231.14,707.501L82.479,863.005c-16.373,17.127-27.906,38.294-33.419,61.338l211.087-166.001 c66.081,29.303,118.866,38.637,159.32,38.637c71.073,0,104.065-28.826,104.065-28.826c-66.164-34.43-75.592-98.686-75.592-98.686 c50.675,21.424,156.235,46.678,156.235,46.678c140.186-93.563,213.45-296.138,213.45-296.138 c-14.515,3.99-28.395,5.652-41.475,5.652c-65.795,0-111-42.13-111-42.13l183.144-39.885C909.186,218.71,915.01,0,915.01,0 L358.176,495.258C295.116,551.344,250.776,625.424,231.14,707.501z" />
                  </G>
                </Svg>
                <Text className="ml-2 font-bold">Book Author:</Text>
                <Text className="ml-1">{data.author}</Text>
              </View>
              {/* Book Year */}
              <View className="flex-row items-center mb-2">
                <Svg
                  fill="black"
                  width="32px"
                  height="32px"
                  viewBox="-2 -3 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                  preserveAspectRatio="xMinYMin"
                >
                  <Path d="M18 7V5a1 1 0 0 0-1-1h-1v1a1 1 0 0 1-2 0V4H6v1a1 1 0 1 1-2 0V4H3a1 1 0 0 0-1 1v2h16zm0 2H2v6a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1V9zm-2-7h1a3 3 0 0 1 3 3v10a3 3 0 0 1-3 3H3a3 3 0 0 1-3-3V5a3 3 0 0 1 3-3h1V1a1 1 0 1 1 2 0v1h8V1a1 1 0 0 1 2 0v1z" />
                </Svg>
                <Text className="ml-2 font-bold">Book Year:</Text>
                <Text className="ml-1">{data.year}</Text>
              </View>
              {/* Book Page */}
              <View className="flex-row items-center">
                <Svg
                  fill="black"
                  className=""
                  width="32px"
                  height="32px"
                  viewBox="0 0 15 15"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <Path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M1 1.5C1 0.671573 1.67157 0 2.5 0H10.7071L14 3.29289V13.5C14 14.3284 13.3284 15 12.5 15H2.5C1.67157 15 1 14.3284 1 13.5V1.5ZM10.5 9C9.67159 9 9.00001 9.67157 9.00001 10.5H10C10 10.2239 10.2239 10 10.5 10H10.7929C10.9073 10 11 10.0927 11 10.2071C11 10.262 10.9782 10.3147 10.9394 10.3536L9.14646 12.1464C9.00346 12.2894 8.96068 12.5045 9.03807 12.6913C9.11547 12.8782 9.29778 13 9.50001 13H12V12H10.7071L11.6465 11.0607C11.8728 10.8343 12 10.5273 12 10.2071C12 9.54044 11.4596 9 10.7929 9H10.5Z"
                    fill="#000000"
                  />
                </Svg>
                <Text className="ml-2 font-bold">Book Page Number:</Text>
                <Text className="ml-1">{data.page}</Text>
              </View>
            </View>

            {/* Delete Book */}
            <Pressable
            onPress={handleDelete}
            className={`rounded-full px-10 py-3 flex items-center justify-center bg-[#AE003C] mt-5 mx-auto`}
          >
            <Text className="text-white font-bold text-lg">Delete Book</Text>
          </Pressable>
            <Pressable
              className="absolute top-3 right-3 bg-black rounded-full w-10 h-10 flex items-center justify-center"
              onPress={() => setModalVisible(!modalVisible)}>
              <Text className="text-white">X</Text>
            </Pressable>
          </View>
        </View>
      </Modal>

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
