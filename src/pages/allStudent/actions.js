import {
    GET_ALL_STUDENT,
    SET_ALL_STUDENT,
    SET_ALL_STUDENT_PER_PAGE,
    GET_ALL_STUDENT_PER_PAGE
} from "./constants";

export const getAllStudent = () => ({
    type: GET_ALL_STUDENT,
})

export const setAllStudendt = (data) => ({
    type: SET_ALL_STUDENT,
    data
})

export const getAllStudentPage = (page) => ({
    type: GET_ALL_STUDENT_PER_PAGE,
    page
})


export const setAllStudentPage = (data) => ({
    type: SET_ALL_STUDENT_PER_PAGE,
    data
})
