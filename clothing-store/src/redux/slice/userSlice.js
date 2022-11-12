import { createSlice } from '@reduxjs/toolkit'
import { notification } from 'antd'

const USER_INFO_KEY = 'USER_INFO0'

const userInfoFromStorage = localStorage.getItem(USER_INFO_KEY)
  ? JSON.parse(localStorage.getItem(USER_INFO_KEY))
  : null

const initialState = {
  userInfoState: {
    data: userInfoFromStorage,
    loading: false,
    error: null,
  },
}

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    loginAction(state, action) {
      localStorage.removeItem(USER_INFO_KEY)
      state.userInfoState = {
        ...state.userInfoState,
        loading: true,
      }
    },
    loginActionSuccess(state, action) {
      const userInfoResponse = { ...action.payload }
      localStorage.setItem(USER_INFO_KEY, JSON.stringify(userInfoResponse))
      state.userInfoState = {
        ...state.userInfoState,
        loading: false,
        data: userInfoResponse,
      }
    },
    loginActionFailled(state, action) {
      notification.error({
        message: `Login Failed: ${action.payload}`,
      })
      localStorage.removeItem(USER_INFO_KEY)
      state.userInfoState = {
        ...state.userInfoState,
        loading: false,
        error: action.payload,
      }
    },
    logoutAction(state, action) {},
  },
})

export const {
  loginAction,
  loginActionSuccess,
  loginActionFailled,
  logoutAction,
} = userSlice.actions

export const userReducer = userSlice.reducer
