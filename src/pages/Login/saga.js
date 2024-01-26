import { takeLatest, call, put } from 'redux-saga/effects';
import { login } from '@domain/api';
import { setLoading } from '@containers/App/actions';
import { DO_LOGIN } from './constants';
import { setData, setLogin } from './actions';

function* doLogin({formData, cb}) {
    setLoading(true);
    try {
      const response = yield call(login, formData);
      console.log(response)
      yield put(setLogin(true));
      yield put(setData(response));
      cb();
    } catch (error) {
      console.log(error);
    }
    setLoading(false);
  }
  
  export default function* loginSaga() {
    yield takeLatest(DO_LOGIN, doLogin);
  }
  