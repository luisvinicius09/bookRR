import { combineReducers } from 'redux';
import carsReducer from './data';
import utilReducer from './utils';

const reducers = combineReducers({
  carsData: carsReducer,
  utils: utilReducer,
});

export default reducers;