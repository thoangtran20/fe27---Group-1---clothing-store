import { configureStore } from '@reduxjs/toolkit'
import createSagaMiddleware from 'redux-saga'
import { appSaga } from './saga'
import { userReducer } from './slice/userSlice'

const sagaMiddleware = createSagaMiddleware()

const rootReducer = {
  user: userReducer,
}

export const appStore = configureStore({
  reducer: rootReducer,
  // lấy mảng middleware gọi saga, ẩn thunk
  middleware: (getDefaultMiddleware) =>
    // console.log(getDefaultMiddleware())
    [
      ...getDefaultMiddleware({
        thunk: false,
      }), // [redux-thunk-middleware, redux-devtool compose,...]
      ...sagaMiddleware,
    ],
})

sagaMiddleware.run(appSaga)
