import { produce } from "immer";

import { GET_ALL_STUDENT, SET_ALL_STUDENT } from "./constants";

export const initialState = {
    students: []
}

export const storedKey = ['students']

const allStudentReducer = (state = initialState, action) =>
    produce(state, (draft) => {
        switch (action.type) {
            case GET_ALL_STUDENT:
                draft.students = action.students
                break;
            case SET_ALL_STUDENT:
                draft.students = action.data
                break
            default:
                break;
        }
    })

export default allStudentReducer