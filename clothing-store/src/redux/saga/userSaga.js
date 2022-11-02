import { delay, put, takeEvery } from 'redux-saga/effects'
import { AuthAPI } from '../../Api'
import {
  loginAction,
  loginActionFailled,
  loginActionSuccess,
} from '../slice/userSlice'

function* login(action) {
  try {
    const loginPayload = action.payload
    yield delay(1000)
    const response = yield AuthAPI.login({
      email: loginPayload.email,
      password: loginPayload.password,
    })
    yield put(loginActionSuccess(response.data.user))
  } catch (error) {
    yield put(loginActionFailled(error.response.data))
  }
}
export function* userSaga() {
  yield takeEvery(loginAction, login)
}
