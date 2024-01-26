import { GET_MY_STUDENT, SET_DELETE_MY_STUDENT, SET_MY_STUDENT } from "./constants";

export const getMyStudents = (id) => ({
    type: GET_MY_STUDENT,
    id
})

export const setMyStudent = (data) => ({
    type: SET_MY_STUDENT,
    data
})

export const setDeleteMyStudent = (id) => ({
    type: SET_DELETE_MY_STUDENT,
    id
})