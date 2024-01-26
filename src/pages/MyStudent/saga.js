import { setLoading } from "@containers/App/actions";
import { getMyStudent } from "@domain/api";
import { call, put, takeLatest } from "redux-saga/effects";
import { GET_MY_STUDENT } from "./constants";
import { setMyStudent } from "./actions";

function* getMyStudentSaga() {
    yield put(setLoading(true))
    try {
        const response = yield call(getMyStudent, '2')
        yield put(setMyStudent(response))
    } catch (error) {
        console.log(error)
    }
    yield put(setLoading(false))
}

export default function* myStudentSaga() {
    yield takeLatest(GET_MY_STUDENT, getMyStudentSaga)
}