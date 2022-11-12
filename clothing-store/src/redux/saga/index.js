import { all, fork } from 'redux-saga/effects'
import { userSaga } from './userSaga'

export function* appSaga() {
  yield all([fork(userSaga)])
}
