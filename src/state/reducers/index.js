import { combineReducers } from 'redux';
import carsReducer from './data';
import utilReducer from './utils';
import userReducer from './user';
import appoimentsReducer from './appoiments';

const reducers = combineReducers({
  carsData: carsReducer,
  utils: utilReducer,
  user: userReducer,
  appoiments: appoimentsReducer,
});

export default reducers;