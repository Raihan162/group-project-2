import { setLoading } from "@containers/App/actions";
import { call, put, takeLatest } from "redux-saga/effects";
import { GET_ALL_STUDENT } from "./constants";
import { getStudents } from "@domain/api";

function* getAllStudentSaga() {
    yield put(setLoading(true))
    try {
        const response = yield call(getStudents)
        console.log(response)
    } catch (error) {
        console.log(error)
    }
    yield put(setLoading(false))
}

export default function* homeSaga() {
    yield takeLatest(GET_ALL_STUDENT, getAllStudentSaga)
}