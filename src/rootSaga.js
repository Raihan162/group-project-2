import { all } from 'redux-saga/effects';

import appSaga from '@containers/App/saga';
import enrollSaga from '@pages/Enroll/saga';
import modifySaga from '@pages/Modify/saga';
import homeSaga from '@pages/Home/saga';
import myStudentSaga from '@pages/MyStudent/saga';
import allStudentSaga from '@pages/allStudent/saga';
import registerSaga from '@pages/Register/saga';
import loginSaga from '@pages/Login/saga';

export default function* rootSaga() {
  yield all([appSaga(), homeSaga(),loginSaga(),registerSaga(), myStudentSaga(), allStudentSaga(), enrollSaga(), modifySaga()]);
}
