import {combineReducers} from 'redux';

import userReducer from './userReducer';
import publicationReducer from './publicationReducer';
import teacherReducer from './teacherReducer';
import positionReducer from './positionReducer';
import subjectReducer from './subjectReducer';
import classReducer from './classReducer';

const rootReducer = combineReducers({
  userReducer,
  publicationReducer,
  teacherReducer,
  positionReducer,
  subjectReducer,
  classReducer,
});

export default rootReducer;
