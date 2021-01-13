import axios from 'axios';
import {notify} from '../../utils/notification';

const setClasses = (payload) => ({type: 'SET_CLASSES', payload});

export const getClasses = () => dispatch => {
  axios.get(`http://localhost:3100/classes/all`)
    .then(res => {
      dispatch(setClasses(res.data));
    })
    .catch(() => {
      notify('error', 'Error', 'Sorry, something went wrong and we can`t load the list of all classes. Please, try one more time later.');
    });
};

export const createClass = (name) => dispatch => {
  console.log(name);
  axios.post(`http://localhost:3100/classes/new`, {class: {name}}, {
    headers: {
      'Authorization': localStorage.getItem('token'),
    }
  })
    .then(res => {
      notify('success', 'Success', 'The new class was successfully created!');
      // dispatch();
    })
    .catch(() => {
      notify('error', 'Error', 'Sorry, something went wrong and new class was not created. Please, try one more time later.');
    });
};