import { createSlice } from '@reduxjs/toolkit'

const userSlice = createSlice({
  name: 'user',
  initialState: {
    data: [],
  },
  reducers: {
    loginAction(state, action) {},
    loginActionSuccess(state, action) {},
    loginActionFailled(state, action) {},
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
