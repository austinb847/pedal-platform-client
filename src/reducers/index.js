import apiReducer from './api-reducer';
import selectedPedalReducer from './selected-pedal-reducer';
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
  getPedalsResponse: apiReducer,
  getSelectedPedal: selectedPedalReducer
});

export default rootReducer;