import { takeLatest, call, put } from 'redux-saga/effects';
import { setLoading, showPopup } from '@containers/App/actions';
import { getStudentDetail, updateStudent } from '@domain/api';
import { setStudentDetail } from './actions';
import { GET_STUDENT_DETAIL, UPDATE_STUDENT } from './constants';

function* doFetchStudentDetail({ id, callback }) {
  yield put(setLoading(true));
  try {
    const res = yield call(getStudentDetail, id);
    if (res.length === 0) {
      yield put(showPopup('Student Not Found'));
      callback && callback();
    }
    yield put(setStudentDetail(res));
  } catch (error) {
    yield put(showPopup('Error', error.message));
  }
  yield put(setLoading(false));
}

function* doUpdateStudent({ id, studentData }) {
  yield put(setLoading(true));
  try {
    const res = yield call(updateStudent, id, studentData);

    yield put(setStudentDetail(res));
    yield put(showPopup('Berhasil!', `Selamat data murid dengan nama ${studentData.name}  berhasil diperbaharui`));
  } catch (error) {
    yield put(showPopup('Error', error.message));
  }
  yield put(setLoading(false));
}

export default function* modifySaga() {
  yield takeLatest(GET_STUDENT_DETAIL, doFetchStudentDetail);
  yield takeLatest(UPDATE_STUDENT, doUpdateStudent);
}
