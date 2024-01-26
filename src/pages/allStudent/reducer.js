import { produce } from "immer";

import { GET_ALL_STUDENT, GET_ALL_STUDENT_PER_PAGE, SET_ALL_STUDENT, SET_ALL_STUDENT_PER_PAGE } from "./constants";

export const initialState = {
    students: [],
    studentsPerPage: {
        data: [],
        page: 1
    }
}

export const storedKey = ['students', 'studentsPerPage']

const allStudentReducer = (state = initialState, action) =>
    produce(state, (draft) => {
        switch (action.type) {
            case GET_ALL_STUDENT:
                draft.students = action.students
                break;
            case SET_ALL_STUDENT:
                draft.students = action.data
                break;

            case GET_ALL_STUDENT_PER_PAGE:
                draft.studentsPerPage.page = action.page
                break

            case SET_ALL_STUDENT_PER_PAGE:
                draft.studentsPerPage.data = action.data
                break;

            default:
                break;
        }
    })

export default allStudentReducer