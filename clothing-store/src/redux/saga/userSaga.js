import { takeEvery } from 'redux-saga/effects'
import { loginAction } from '../slice/userSlice'


export function* login(action) {}
export function* userSaga() {
  yield takeEvery(loginAction, login)
}
