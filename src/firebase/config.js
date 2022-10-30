// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth"
import {getFirestore} from "firebase/firestore"
import {getStorage} from "firebase/storage"

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
export const firebaseConfig = {
  apiKey: "AIzaSyBUsen2orDdHqjNVjXzCPoWtAdXZ0STZCM",
  authDomain: "clothing-store-4b9c0.firebaseapp.com",
  projectId: "clothing-store-4b9c0",
  storageBucket: "clothing-store-4b9c0.appspot.com",
  messagingSenderId: "516145624339",
  appId: "1:516145624339:web:bdd631092ba0ab7cdb56e6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth= getAuth(app);
export const db= getFirestore(app);
export const storage= getStorage(app);
export default app