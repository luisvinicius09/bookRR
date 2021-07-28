import { combineReducers } from 'redux';
import carsReducer from './data';
import utilReducer from './utils';
import userReducer from './user';

const reducers = combineReducers({
  carsData: carsReducer,
  utils: utilReducer,
  user: userReducer,
});

export default reducers;