import { combineReducers } from 'redux';

import linesReducer from './linesReducer';

const reducers = combineReducers({
  lines: linesReducer,
});

export default reducers;
