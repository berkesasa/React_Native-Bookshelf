// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { initializeAuth, getReactNativePersistence } from 'firebase/auth';
import ReactNativeAsyncStorage from '@react-native-async-storage/async-storage';
import { getFirestore } from "firebase/firestore";


const firebaseConfig = {
  apiKey: "AIzaSyCBYl53euSWgG_yihjT7WLOJFwha84U4CQ",
  authDomain: "test-app-30132.firebaseapp.com",
  projectId: "test-app-30132",
  storageBucket: "test-app-30132.appspot.com",
  messagingSenderId: "212403183152",
  appId: "1:212403183152:web:e97409a4875446792b97f5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = initializeAuth(app, {
  persistence: getReactNativePersistence(ReactNativeAsyncStorage)
});

export const db = getFirestore(app);

export default app