import { produce } from "immer";

import { GET_MY_STUDENT, SET_MY_STUDENT } from "./constants";

export const initialState = {
    myStudents: []
}

export const storedKey = ['myStudents']

const myStudentReducer = (state = initialState, action) =>
    produce(state, (draft) => {
        switch (action.type) {
            case GET_MY_STUDENT:
                draft.myStudents = action.myStudents
                break;
            case SET_MY_STUDENT:
                draft.myStudents = action.data
                break
            default:
                break;
        }
    })

export default myStudentReducer