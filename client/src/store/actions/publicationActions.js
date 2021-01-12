import axios from 'axios';
import {notify} from '../../utils/notification';

const setPublications = (payload) => ({type: 'SET_PUBLICATIONS', payload});

export const getPublications = () => dispatch => {
  axios.get(`http://localhost:3100/publications/all`)
    .then(res => {
      dispatch(setPublications(res.data));
    })
    .catch(() => {
      notify('error', 'Error', 'Sorry, something went wrong and we can`t load the list of all publications. Please, try one more time later.');
    });
};

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