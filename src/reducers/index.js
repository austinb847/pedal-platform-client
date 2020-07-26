import apiReducer from './api-reducer';
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
  getPedalsResponse: apiReducer
});

export default rootReducer;