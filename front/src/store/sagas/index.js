import { all, takeLatest } from 'redux-saga/effects';

import { Types as LoginTypes } from '../ducks/login';

import { checkLogin, logout } from './login';

export default function* rootSaga() {
  yield all([
    takeLatest(LoginTypes.REQUEST, checkLogin),
    takeLatest(LoginTypes.LOGOUT, logout),
  ]);
}
