import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isLoggdeIn: false,
  email: null,
  userName: null,
  userID: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    SET_ACTIVE_USER: (state, action) => {
      console.log(action.payload);
      const { email, userName, userID } = action.payload;
      state.isLoggdeIn = true;
      state.email = email;
      state.userName = userName;
      state.userId = userID;
    },
    REMOVE_ACTIVE_USER:(state,action)=>{
        state.isLoggdeIn = false;
      state.email = null;
      state.userName = null;
      state.userId = null;
    }
  },
});

export const { SET_ACTIVE_USER,REMOVE_ACTIVE_USER } = authSlice.actions;
export const selectIsLoggedIn = (state) => state.auth.isLoggdeIn;
export const selectEmail = (state) => state.auth.email;
export const selectUserName = (state) => state.auth.userName;
export const selectUserID = (state) => state.auth.userID;

export default authSlice.reducer;
