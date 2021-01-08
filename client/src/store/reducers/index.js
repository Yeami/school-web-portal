import {combineReducers} from 'redux';

import userReducer from './userReducer';
import publicationReducer from './publicationReducer';
import teacherReducer from './teacherReducer';

const rootReducer = combineReducers({
  userReducer,
  publicationReducer,
  teacherReducer,
});

export default rootReducer;
