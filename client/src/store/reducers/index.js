import {combineReducers} from 'redux';

import userReducer from './userReducer';
import publicationReducer from './publicationReducer';
import teacherReducer from './teacherReducer';
import positionReducer from './positionReducer';

const rootReducer = combineReducers({
  userReducer,
  publicationReducer,
  teacherReducer,
  positionReducer,
});

export default rootReducer;
