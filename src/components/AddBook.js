import { View, Text, Modal, Pressable } from 'react-native'
import CustomButton from './CustomButton'
import AddBookTextInput from './AddBookTextInput'
import React, { useState, useEffect } from 'react'
import { doc, collection, addDoc } from "firebase/firestore";
import { db } from '../../firebase/firebaseConfig';

const AddBook = ({ data, getData }) => {
    const [modalAddBook, setModalAddBook] = useState(false);
    const [bookTitle, setBookTitle] = useState('');
    const [bookPage, setBookPage] = useState('');
    const [bookAuthor, setBookAuthor] = useState('');
    const [bookYear, setBookYear] = useState('');
    const [modalVisible, setModalVisible] = useState(false);
    const [isSaved, setIsSaved] = useState(false);

    const sendData = async () => {
        if (data.length > 13) {
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
    useEffect(() => {
        getData()
    }, [isSaved])
    return (
        <View>
            <CustomButton
                extraClasses='px-5'
                buttonText="Add Book"
                handleOnPress={() => setModalAddBook(true)}
            />
            <Modal
                animationType="slide"
                transparent={true}
                statusBarTranslucent={true}
                visible={modalAddBook}
                onRequestClose={() => {
                    setModalAddBook(!modalAddBook);
                }}>
                <View className="absolute bottom-0 h-[90%] w-full">
                    <View className="bg-white rounded-t-xl relative p-7 h-full">
                        <Text className="text-center text-bold text-xl mb-5">Your Book Infos</Text>
                        <AddBookTextInput
                            title="Book Name"
                            keyboardType="default"
                            value={bookTitle}
                            onChangeText={setBookTitle}
                            placeholder="name"
                        />
                        <AddBookTextInput
                            title="Book Page Number"
                            keyboardType="number-pad"
                            value={bookPage}
                            onChangeText={setBookPage}
                            placeholder="number"
                        />
                        <AddBookTextInput
                            title="Book Author"
                            keyboardType="default"
                            value={bookAuthor}
                            onChangeText={setBookAuthor}
                            placeholder="author"
                        />
                        <AddBookTextInput
                            title="Book Year"
                            keyboardType="number-pad"
                            value={bookYear}
                            onChangeText={setBookYear}
                            placeholder="year"
                        />
                        <CustomButton
                            buttonText="Save"
                            extraClasses='bg-blue-200'
                            handleOnPress={() => {
                                { sendData(), setIsSaved(isSaved === false ? true : false), setModalAddBook(!modalAddBook) }
                            }}
                        />
                    </View>
                    <Pressable
                        className="absolute top-3 right-3 bg-black rounded-full w-10 h-10 flex items-center justify-center"
                        onPress={() => setModalAddBook(!modalAddBook)}>
                        <Text className="text-white">X</Text>
                    </Pressable>
                </View>
            </Modal>
            <Modal
                animationType="slide"
                transparent={true}
                visible={modalVisible}
                onRequestClose={() => {
                    setModalVisible(!modalVisible);
                }}
            >
                <View className="bg-white m-5 rounded-2xl p-8 justify-start items-center relative">
                    <Text className="pr-7">You can add up to 14 books to your library!</Text>
                    <Pressable
                        className="absolute top-3 right-3 bg-black rounded-full w-10 h-10 flex items-center justify-center"
                        onPress={() => setModalVisible(!modalVisible)}>
                        <Text className="text-white">X</Text>
                    </Pressable>
                </View>
            </Modal>
        </View>
    )
}

export default AddBook
