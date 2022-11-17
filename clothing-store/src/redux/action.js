import {
  auth,
  facebookAuthProvider,
  googleAuthProvider,
} from '../firebase/firebaseConfig'
import * as types from './actionType'

const registerStart = () => ({
  type: types.REGISTER_START,
})

const registerSuccess = ({ user, additionalData }) => ({
  type: types.REGISTER_SUCCESS,
  payload: { user, additionalData },
})

const registerError = (error) => ({
  type: types.REGISTER_FAIL,
  payload: error,
})

const loginStart = () => ({
  type: types.LOGIN_START,
})

const loginSuccess = (user) => ({
  type: types.LOGIN_SUCCESS,
  payload: user,
})

const loginError = (error) => ({
  type: types.LOGOUT_FAIL,
  payload: error,
})

const googleSignInStart = () => ({
  type: types.GOOGLE_SIGN_IN_START,
})

const googleSignInSuccess = (user) => ({
  type: types.GOOGLE_SIGN_IN_SUCCESS,
  payload: user,
})

const gooleSignInFail = (error) => ({
  type: types.GOOGLE_SIGN_IN_FAIL,
  payload: error,
})

const fbSignInStart = () => ({
  type: types.FACEBOOK_SIGN_IN_START,
})

const fbSignInSuccess = (user) => ({
  type: types.FACEBOOK_SIGN_IN_SUCCESS,
  payload: user,
})

const fbSignInFail = (error) => ({
  type: types.FACEBOOK_SIGN_IN_FAIL,
  payload: error,
})

const logoutStart = () => ({
  type: types.LOGOUT_START,
})

const logoutSuccess = () => ({
  type: types.LOGIN_SUCCESS,
})

const logoutError = (error) => ({
  type: types.LOGOUT_FAIL,
  payload: error,
})

export const setUser = (user) => ({
  type: types.SET_USER,
  payload: user,
})

export const registerInitiate = (email, password, displayName) => {
  return function (dispatch) {
    dispatch(registerStart())
    auth
      .createUserWithEmailAndPassword(email, password)
      .then(({ user }) => {
        user.updateProfile({
          displayName,
        })
        dispatch(registerSuccess({ user, additionalData: { displayName } }))
      })
      .catch((error) => {
        dispatch(registerError(error.message))
      })
  }
}

export const loginInitiate = (email, password) => {
  return function (dispatch) {
    dispatch(loginStart())
    auth
      .signInWithEmailAndPassword(email, password)
      .then(({ user }) => {
        dispatch(loginSuccess(user))
      })
      .catch((error) => dispatch(loginError(error.message)))
  }
}

export const googleSignInitiate = () => {
  return function (dispatch) {
    dispatch(googleSignInStart())
    auth
      .signInWithPopup(googleAuthProvider)
      .then(({ user }) => {
        dispatch(googleSignInSuccess(user))
      })
      .catch((error) => dispatch(gooleSignInFail(error.message)))
  }
}

export const fbSignInitiate = () => {
  return function (dispatch) {
    dispatch(fbSignInStart())
    auth
      .signInWithPopup(facebookAuthProvider.addScope('user_birthday, email'))
      .then((result) => {
        dispatch(fbSignInSuccess(result.user))
      })
      .catch((error) => dispatch(fbSignInFail(error.message)))
  }
}

export const logoutInitiate = () => {
  return function (dispatch) {
    dispatch(logoutStart())
    auth
      .signOut()
      .then((res) => dispatch(logoutSuccess()))
      .catch((error) => dispatch(logoutError(error.message)))
  }
}
