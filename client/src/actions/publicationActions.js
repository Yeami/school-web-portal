import axios from 'axios';
import {notify} from '../utils/notification';

export const createPublication = (publication) => dispatch => {
  axios.post(`http://localhost:3100/publications/new`, {publication}, {
    headers: {
      'Authorization': localStorage.getItem('token'),
    }
  })
    .then(res => {
      notify('success', 'Success', 'The new publication was successfully created!');
      // dispatch();
    })
    .catch(() => {
      notify('error', 'Error', 'Sorry, something went wrong and new publication was not created. Please, try one more time later.');
    });
};