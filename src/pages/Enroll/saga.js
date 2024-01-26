import { takeLatest, call, put } from 'redux-saga/effects';
import { setLoading, showPopup } from '@containers/App/actions';
import { createStudent } from '@domain/api';

import { CREATE_STUDENT } from './constants';

function* doCreateStudent({ studentData, callback }) {
  yield put(setLoading(true));
  try {
    yield call(createStudent, studentData);
    yield put(showPopup('Berhasil!', `Selamat data untuk murid dengan nama ${studentData.name} berhasil dibuat`));
    callback && callback();
  } catch (error) {
    yield put(showPopup('Error', error.message));
  }
  yield put(setLoading(false));
}

export default function* enrollSaga() {
  yield takeLatest(CREATE_STUDENT, doCreateStudent);
}
