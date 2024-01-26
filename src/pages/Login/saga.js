import { takeLatest, call, put } from 'redux-saga/effects';
import { login } from '@domain/api';
import { setLoading, showPopup } from '@containers/App/actions';
import { DO_LOGIN } from './constants';
import { setData, setLogin } from './actions';

import toast, { Toaster } from 'react-hot-toast';

function* doLogin({ formData, cb }) {
  setLoading(true);
  try {
    const res = yield call(login, formData);
    console.log(res, 'res');
    if (res.length === 0) {
      toast.error("Username atau password salah");
      return;
    }
    yield put(setLogin(true));
    yield put(setData(res));
    yield put(showPopup("app_login_success", "app_login_success_desc"));
    cb();
  } catch (error) {
    console.log(error);
  }
  setLoading(false);
}

export default function* loginSaga() {
  yield takeLatest(DO_LOGIN, doLogin);
}
