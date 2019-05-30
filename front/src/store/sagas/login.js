import { put } from 'redux-saga/effects';

import { Creators as LoginActions } from '~/store/ducks/login';

export function* checkLogin() {
  yield put(LoginActions.requestError());
}

export function* logout() {
  yield put(LoginActions.requestError());
}
