import { combineReducers } from 'redux';

import appReducer, { storedKey as storedAppState } from '@containers/App/reducer';
import clientReducer, { storedKey as storedClientState } from '@containers/Client/reducer';
import languageReducer from '@containers/Language/reducer';
import modifyReducer, { storedStudentState } from '@pages/Modify/reducer';
import homeReducer, { storedKey as storedHomeState } from '@pages/Home/reducer';
import myStudentReducer, { storedKey as storedMyStudentState } from '@pages/MyStudent/reducer';
import allStudentReducer, { storedKey as storedAllStudentState } from '@pages/allStudent/reducer';

import { mapWithPersistor } from './persistence';
import registerReducer,{storedKey as storedUser} from '@pages/Register/reducer';
import loginReducer, {storedKey as storedLogin} from '@pages/Login/reducer';

const storedReducers = {
  app: { reducer: appReducer, whitelist: storedAppState },
  client: { reducer: clientReducer, whitelist: storedClientState },
  register: { reducer: registerReducer, whitelist: storedUser},
  login: {reducer: loginReducer, whitelist: storedLogin},
  modify: { reducer: modifyReducer, whitelist: storedStudentState },
  home: { reducer: homeReducer, whitelist: storedHomeState },
  allStudent: { reducer: allStudentReducer, whitelist: storedAllStudentState },
  myStudent: { reducer: myStudentReducer, whitelist: storedMyStudentState },
};

const temporaryReducers = {
  language: languageReducer,
};

const createReducer = () => {
  const coreReducer = combineReducers({
    ...mapWithPersistor(storedReducers),
    ...temporaryReducers,
  });
  const rootReducer = (state, action) => coreReducer(state, action);
  return rootReducer;
};

export default createReducer;
