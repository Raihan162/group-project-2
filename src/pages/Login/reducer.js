import { produce } from 'immer';

import { SET_LOGIN, SET_DATA } from './constants';

export const initialState = {
  login: false,
  data: {},
};

export const storedKey = ['login', 'data'];

const loginReducer = (state = initialState, action) =>
  produce(state, (draft) => {
    switch (action.type) {
      case SET_LOGIN:
        draft.login = action.login;
        break;
      case SET_DATA:
        draft.data = action.data;
        break;
    }
  });

export default loginReducer;
