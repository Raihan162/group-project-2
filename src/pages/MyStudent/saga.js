import { setLoading } from "@containers/App/actions";
import { deleteMyStudent, getMyStudent } from "@domain/api";
import { call, put, takeLatest } from "redux-saga/effects";
import { GET_MY_STUDENT, SET_DELETE_MY_STUDENT } from "./constants";
import { setMyStudent } from "./actions";

function* getMyStudentSaga({ id }) {
    yield put(setLoading(true))
    try {
        const response = yield call(getMyStudent, id)
        console.log(response, '<<< GET MY')
        yield put(setMyStudent(response))
    } catch (error) {
        console.log(error)
    }
    yield put(setLoading(false))
}

function* deleteStudentSaga({ id, callback }) {
    yield put(setLoading(true))
    try {
        // console.log(id)
        yield call(deleteMyStudent, id)
        callback && callback()
    } catch (error) {
        console.log(error)
    }
    yield put(setLoading(false))
}

export default function* myStudentSaga() {
    yield takeLatest(GET_MY_STUDENT, getMyStudentSaga)
    yield takeLatest(SET_DELETE_MY_STUDENT, deleteStudentSaga)
}