import { collection, getDocs } from 'firebase/firestore'
import React, { useEffect } from 'react'
import { db } from './firebaseConfig'

const firebaseApp = () => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  useEffect(() => {
    const colRef = collection(db, 'products')
    console.log(colRef)
    // 1. Get collection data
    getDocs(colRef)
      .then((snapshot) => {
        console.log(snapshot)
        let products = []
        snapshot.docs.forEach((doc) => {
          console.log(doc.data())
          products.push({
            id: doc.id,
            ...doc.data(),
          })
        })
        console.log(products)
      })
      .catch((err) => {
        console.log(err)
      })
  }, [])
}

export default firebaseApp
