import { createSelector } from "reselect";
import { initialState } from "./reducer";

const selectAllStudentState = (state) => {
    console.log(state)
    return state.allStudent || initialState
}

export const selectStudent = createSelector(selectAllStudentState, (state) => state.students)

export const selectPage = createSelector(selectAllStudentState, (state) => state.studentsPerPage.page)

export const selectPageStudent = createSelector(selectAllStudentState, (state) => state.studentsPerPage.data)