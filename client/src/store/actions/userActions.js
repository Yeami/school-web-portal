import axios from 'axios';
import {notify} from '../../utils/notification';

const setUser = (payload) => ({type: 'SET_USER', payload});
const setAllUsers = (payload) => ({type: 'SET_USERS', payload});

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

export const getAllUsers = () => dispatch => {
  axios.get(`http://localhost:3100/users/all`)
    .then(res => {
      dispatch(setAllUsers(res.data));
    })
    .catch(() => {
      notify('error', 'Error', 'Sorry, something went wrong and we can`t load the list of all teacher. Please, try one more time later.');
    });
};

// export const signUserUp = (userInfo) => dispatch => {
//   fetch(`http://localhost:4000/users`, {
//     method: "POST",
//     headers: {
//       "Content-Type": "application/json",
//       "Accept": "application/json"
//     },
//     body: JSON.stringify(userInfo)
//   })
//     .then(res => res.json())
//     .then(data => {
//       // data sent back will in the format of
//       // {
//       //     user: {},
//       //.    token: "aaaaa.bbbbb.bbbbb"
//       // }
//       localStorage.setItem("token", data.token)
//       dispatch(setUser(data.user))
//     })
// }