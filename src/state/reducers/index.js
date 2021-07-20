import { combineReducers } from 'redux';
import carsReducer from './data';

const reducers = combineReducers({
  carsData: carsReducer,
});

export default reducers;