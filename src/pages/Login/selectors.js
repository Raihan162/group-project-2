import { createSelector } from 'reselect';
import { initialState } from '@containers/Client/reducer';

const selectLoginState = (state) => state.login || initialState;

export const selectLogin = createSelector(selectLoginState, (state) => state.login);
export const selectData = createSelector(selectLoginState, (state) => state.data);
