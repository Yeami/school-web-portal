import axios from 'axios';
import {notify} from '../../utils/notification';

const setUser = (payload) => ({type: 'SET_USER', payload});

export const logInUser = (user) => dispatch => {
  axios.post(`http://localhost:3100/users/login`, {user})
    .then(res => {
      localStorage.setItem('token', `Bearer ${res.data.token}`);
      dispatch(setUser(res.data.user));
      notify('success', 'Successful authorization', 'The credentials you entered are correct. So logging into the system...')
    })
    .catch(() => {
      notify('error', 'Unsuccessful authorization', 'The credentials you entered did not match our records. Please double-check and try again.')
    });
};

export const getUserInfo = () => dispatch => {
  axios.get(`http://localhost:3100/users/me`, {
    headers: {
      'Authorization': localStorage.getItem('token'),
    }
  })
    .then(res => {
      dispatch(setUser(res.data));
    });
};

export const logOutUser = () => dispatch => {
  axios.post(`http://localhost:3100/users/me/logout`, {}, {
    headers: {
      'Authorization': localStorage.getItem('token'),
    }
  })
    .then(() => {
      dispatch({type: 'LOG_OUT'});
      notify('info', 'Single device log out', 'You have been log out from the system on this device successfully');
    });
};

export const logOutUserAllDevices = () => dispatch => {
  axios.post(`http://localhost:3100/users/me/logoutall`, {}, {
    headers: {
      'Authorization': localStorage.getItem('token'),
    }
  })
    .then(() => {
      dispatch({type: 'LOG_OUT'});
      notify('info', 'Multiple device log out', 'You have been log out from the system on all your devices successfully');
    });
};

export const updateUserInfo = (user) => dispatch => {
  axios.post(`http://localhost:3100/users/me/update`, {user}, {
    headers: {
      'Authorization': localStorage.getItem('token'),
    }
  })
    .then(res => {
      dispatch(setUser(res.data));
      notify('success', 'Successful update', 'You have successfully updated your personal information');
    })
    .catch((res) => {
      notify('error', 'Unsuccessful update', 'Oops, something went wrong and your personal information was not updated. Please, try one more time later');
    });
};

export const updateAvatar = (avatarUrl) => dispatch => {
  axios.post(`http://localhost:3100/users/me/avatar`, {avatarUrl}, {
    headers: {
      'Authorization': localStorage.getItem('token'),
    }
  })
    .then(res => {
      dispatch(setUser(res.data));
      notify('success', 'Successful update', 'You have successfully updated your avatar!');
    })
    .catch(() => {
      notify('error', 'Unsuccessful update', 'Oops, something went wrong and your avatar was not updated. Please, try one more time later');
    });
};
