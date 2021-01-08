import {combineReducers} from 'redux';

import userReducer from './userReducer';
import publicationReducer from './publicationReducer';

const rootReducer = combineReducers({
  userReducer,
  publicationReducer,
});

export default rootReducer;
