import { combineReducers, configureStore } from '@reduxjs/toolkit'
// import thunk from 'redux-thunk'
// import userReducer from './reducer'
import { authReducer } from './slice/authSlice'
import { cartReducer } from './slice/cartSlice'

const rootReducer = combineReducers({
  cart: cartReducer,
  auth: authReducer,
})

// const middleware = [thunk]

export const store = configureStore({
  reducer: rootReducer,
  // middleware: (getDefaultMiddleware) => [
  //   ...getDefaultMiddleware(),
  //   ...middleware,
  // ],
})
