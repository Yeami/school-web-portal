import React from 'react';
import './App.css';
import RouterWrapper from './components/RouterWrapper';

import 'antd/dist/antd.css';
import {useDispatch, useSelector} from 'react-redux';
import {isEmpty} from './utils/utils';
import {getUserInfo} from './store/actions/userActions';

function App() {
  const dispatch = useDispatch();

  const user = useSelector(state => state.userReducer.user);
  const token = localStorage.getItem('token');
  const isEmptyUser = isEmpty(user) && user.constructor === Object;

  console.log('\n[INFO] User: ', user);
  console.log('[INFO] Token: ', token);

  if (isEmptyUser && !token) {
    console.log('[INFO] User info and token are empty');
  } else if (isEmptyUser && token) {
    console.log('[INFO] User info is empty, but token exists');
    dispatch(getUserInfo());
  } else {
    console.log('[INFO] User info and token exists');
  }

  const isAuthenticated = (!isEmptyUser && Boolean(token));

  return (
    <div className="App">
      <RouterWrapper isAuthenticated={isAuthenticated}/>
    </div>
  );
}

export default App;
