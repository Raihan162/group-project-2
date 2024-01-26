import { all } from 'redux-saga/effects';

import appSaga from '@containers/App/saga';
import enrollSaga from '@pages/Enroll/saga';
import modifySaga from '@pages/Modify/saga';

export default function* rootSaga() {
  yield all([appSaga(), enrollSaga(), modifySaga()]);
}
