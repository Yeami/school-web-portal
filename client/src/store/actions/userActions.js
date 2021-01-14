import axios from 'axios';
import {
  userAvatarUpdateErrorNotify,
  userAvatarUpdateSuccessNotify,
  userLogOutAllDevicesSuccessNotify,
  userLogOutSuccessNotify,
  userSuccessfulAuthorizationNotify,
  userUnsuccessfulAuthorizationNotify,
  userUpdateErrorNotify,
  userUpdateSuccessNotify,
} from '../notifications/userNotifications';
import {getAuthRequestHeaders} from '../../utils/utils';

const setUser = (payload) => ({type: 'SET_USER', payload});

export const logInUser = (user) => dispatch => {
  axios.post(`http://localhost:3100/users/login`, {user})
    .then(res => {
      localStorage.setItem('token', `Bearer ${res.data.token}`);
      dispatch(setUser(res.data.user));
      userSuccessfulAuthorizationNotify();
    })
    .catch(() => userUnsuccessfulAuthorizationNotify());
};

export const getUserInfo = () => dispatch => {
  axios.get(`http://localhost:3100/users/me`, getAuthRequestHeaders())
    .then(res => {
      dispatch(setUser(res.data));
    });
};

export const logOutUser = () => dispatch => {
  axios.post(`http://localhost:3100/users/me/logout`, {}, getAuthRequestHeaders())
    .then(() => {
      dispatch({type: 'LOG_OUT'});
      userLogOutSuccessNotify();
    });
};

export const logOutUserAllDevices = () => dispatch => {
  axios.post(`http://localhost:3100/users/me/logoutall`, {}, getAuthRequestHeaders())
    .then(() => {
      dispatch({type: 'LOG_OUT'});
      userLogOutAllDevicesSuccessNotify();
    });
};

export const updateUserInfo = (user) => dispatch => {
  axios.post(`http://localhost:3100/users/me/update`, {user}, getAuthRequestHeaders())
    .then(res => {
      dispatch(setUser(res.data));
      userUpdateSuccessNotify();
    })
    .catch(() => userUpdateErrorNotify());
};

export const updateAvatar = (avatarUrl) => dispatch => {
  axios.post(`http://localhost:3100/users/me/avatar`, {avatarUrl}, getAuthRequestHeaders())
    .then(res => {
      dispatch(setUser(res.data));
      userAvatarUpdateSuccessNotify();
    })
    .catch(() => userAvatarUpdateErrorNotify());
};
