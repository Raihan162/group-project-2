import { setLoading, showPopup } from "@containers/App/actions";
import { call, put, takeLatest } from "redux-saga/effects";
import { GET_ALL_STUDENT, GET_ALL_STUDENT_PER_PAGE, SET_ALL_STUDENT_PER_PAGE } from "./constants";
import { getStudents, getStudentsPerPage } from "@domain/api";
import { getAllStudentPage, setAllStudendt, setAllStudentPage } from "./actions";

function* getAllStudentSaga() {
    yield put(setLoading(true))
    try {
        const response = yield call(getStudents)
        console.log(response)
        yield put(setAllStudendt(response))
    } catch (error) {
        console.log(error)
    }
    yield put(setLoading(false))
}

function* getAllStudentPageSaga({ page }) {
    yield put(setLoading(true))
    try {
        const response = yield call(getStudentsPerPage, page)
        // console.log(response)
        yield put(setAllStudentPage(response))
    } catch (error) {
        console.log(error)
        yield put(showPopup, error.message)
    }
    yield put(setLoading(false))
}

export default function* allStudentSaga() {
    yield takeLatest(GET_ALL_STUDENT, getAllStudentSaga)
    yield takeLatest(GET_ALL_STUDENT_PER_PAGE, getAllStudentPageSaga)
}