// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app'
import { getAuth } from 'firebase/auth'
import { getFirestore } from 'firebase/firestore'
import { getStorage } from 'firebase/storage'

export const firebaseConfig = {
  apiKey: 'AIzaSyBn4H7DmwQnhXSj4-goKqUakdEnqmj2LZo',
  authDomain: 'clothing-store-project-5ca69.firebaseapp.com',
  projectId: 'clothing-store-project-5ca69',
  storageBucket: 'clothing-store-project-5ca69.appspot.com',
  messagingSenderId: '613631657169',
  appId: '1:613631657169:web:e44ec7283ae193ade831f0',
  measurementId: 'G-NYLY8C7T5Z',
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)
export const auth = getAuth(app)
export const db = getFirestore(app)
export const storage = getStorage(app)

export default app
