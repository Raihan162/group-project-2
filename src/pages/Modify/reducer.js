import { produce } from 'immer';

import { SET_STUDENT_DETAIL } from './constants';

export const initialState = {
  studentDetailData: {},
};

export const storedStudentState = ['studentDetailData'];

const modifyReducer = (state = initialState, action) =>
  produce(state, (draft) => {
    switch (action.type) {
      case SET_STUDENT_DETAIL:
        draft.studentDetailData = action.studentDetailData;
    }
  });

export default modifyReducer;
