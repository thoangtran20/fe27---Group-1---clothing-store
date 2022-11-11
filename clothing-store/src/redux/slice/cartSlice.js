import { createSlice } from '@reduxjs/toolkit'
import { toast } from 'react-toastify'
// import { localStorageKey } from '../../constants'
// import { localStorageUtil } from '../../utils'

// const { set, get } = localStorageUtil(localStorageKey.cartItems, [])
// const cartInfoList = JSON.parse(get())
// console.log(cartInfoList)

const initialState = {
  cartItem: localStorage.getItem('cartItem')
    ? JSON.parse(localStorage.getItem('cartItem'))
    : [],
  totalQuantity: 0,
  totalAmount: 0,
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
          productName: newItem.productName,
          imgUrl: newItem.imgUrl,
          price: newItem.price,
          quantity: 1,
          totalPrice: newItem.price,
        })
      } else {
        existingItem.quantity++
        existingItem.totalPrice =
          Number(existingItem.totalPrice) + Number(newItem.price)

        toast.info('Increased product quantity', {
          position: 'bottom-left',
        })
      }

      // state.totalAmount = state.cartItem.reduce(
      //   (total, item) => total + Number(item.price) * Number(item.quantity),
      //   0,
      // )

      console.log(state.totalQuantity)
      console.log(state.cartItem)
      console.log(newItem)

      localStorage.setItem('cartItem', JSON.stringify(state.cartItem))
    },

    decreaseCart: (state, action) => {
      const itemIndex = state.cartItem.findIndex(
        (item) => item.id === action.payload.id,
      )

      state.totalQuantity--

      if (state.cartItem[itemIndex].quantity > 1) {
        state.cartItem[itemIndex].quantity -= 1

        toast.info('Decreased product quantity', {
          position: 'bottom-left',
        })
      } else if (state.cartItem[itemIndex].quantity === 1) {
        const nextCartItem = state.cartItem.filter(
          (item) => item.id !== action.payload.id,
        )
        state.cartItem = nextCartItem

        // state.totalAmount = state.cartItem.reduce(
        //   (total, item) => total + Number(item.price) * Number(item.quantity),
        //   0,
        // )

        // state.cartItem[itemIndex].totalPrice =
        //   Number(state.cartItem[itemIndex].totalPrice) +
        //   Number(state.cartItem[itemIndex].price)

        toast.error('Product removed from cart', {
          position: 'bottom-left',
        })
      }
      localStorage.setItem('cartItem', JSON.stringify(state.cartItem))
    },

    deleteItem: (state, action) => {
      const id = action.payload
      const existingItem = state.cartItem.find((item) => item.id === id)

      state.totalQuantity--

      if (existingItem) {
        state.cartItem = state.cartItem.filter((item) => item.id !== id)
        state.totalQuantity = state.totalQuantity - existingItem.quantity
      }

      toast.error('Product removed from cart', {
        position: 'bottom-left',
      })

      state.totalAmount = state.cartItem.reduce(
        (total, item) => total + Number(item.price) * Number(item.quantity),
        0,
      )
      localStorage.setItem('cartItem', JSON.stringify(state.cartItem))
    },
    getTotal(state, action) {
      let { total, quantity } = state.cartItem.reduce(
        (cartTotal, cartItem) => {
          const { price, quantity } = cartItem
          const itemTotal = price * quantity

          cartTotal.total += itemTotal
          cartTotal.quantity += quantity

          return cartTotal
        },
        {
          total: 0,
          quantity: 0,
        },
      )
      total = parseFloat(total.toFixed(2))
      state.totalQuantity = quantity
      state.totalAmount = total
    },
    clearCart(state, action) {
      state.cartItem = []
      localStorage.setItem('cartItem', JSON.stringify(state.cartItem))
      toast.error('Cart cleared', { position: 'bottom-left' })
    },
  },
})

export const cartActions = cartSlice.actions

export const cartReducer = cartSlice.reducer
