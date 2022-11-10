import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  cartItem: [],
  totalAmount: 0,
  totalQuantity: 0,
}

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addItem: (state, action) => {
      const newItem = action.payload
      const existingItem = state.cartItem.find((item) => item.id === newItem.id)

      state.totalQuantity++

      if (!existingItem) {
        state.cartItem.push({
          id: newItem.id,
          productName: newItem.imgUrl,
          price: newItem.price,
          quantity: 1,
          totalPrice: newItem.price,
        })
      } else {
        existingItem.quantity++
        existingItem.totalPrice =
          Number(existingItem.totalPrice) + Number(newItem.price)
      }

      state.totalAmount = state.cartItem.reduce(
        (total, item) => total + Number(item.price) * Number(item.quantity),
      )

      console.log(state.totalQuantity)
      console.log(state.cartItem)
      console.log(newItem)
    },
  },
})

export const cartActions = cartSlice.actions

export const cartReducer = cartSlice.reducer
