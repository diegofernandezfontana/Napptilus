import { combineReducers } from 'redux';
import mainReducer from './mainReducer';
import oompaLompasReducer from '../Pages/Main/reducer';

const rootReducer = combineReducers({
  mainReducer,
  oompaLompasReducer,
});

export default rootReducer;
