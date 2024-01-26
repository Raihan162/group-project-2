import { GET_ALL_STUDENT, SET_ALL_STUDENT } from "./constants";

export const getAllStudent = () => ({
    type: GET_ALL_STUDENT
})

export const setAllStudendt = (data) => ({
    type: SET_ALL_STUDENT,
    data
})