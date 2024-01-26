import { SET_USER } from './constants';
import { takeLatest, call, put } from 'redux-saga/effects';
import { registerUser } from '@domain/api';

function* doRegister({ user,cb }) {
  try {
    yield call(registerUser, user);
    cb();
  } catch (error) {
    console.log(error);
  }
}

export default function* registerSaga() {
  yield takeLatest(SET_USER, doRegister);
}
