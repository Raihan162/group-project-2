import { createSelector } from "reselect";
import { initialState } from "./reducer";

const selectHomeState = (state) => {
    // console.log(state.home)
    return state.home || initialState
}

export const selectStudent = createSelector(selectHomeState, (state) => state.students)