import { createSelector } from 'reselect';
import { initialState } from './reducer';

const selectStudentDetailState = (state) => state.modify || initialState;

export const selectStudentDetail = createSelector(selectStudentDetailState, (state) => state.studentDetailData);
