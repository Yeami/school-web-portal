import axios from 'axios';
import {notify} from '../../utils/notification';

const setSubjects = (payload) => ({type: 'SET_SUBJECTS', payload});

export const getSubjects = () => dispatch => {
  axios.get(`http://localhost:3100/subjects/all`)
    .then(res => {
      dispatch(setSubjects(res.data));
    })
    .catch(() => {
      notify('error', 'Error', 'Sorry, something went wrong and we can`t load the list of all subjects. Please, try one more time later.');
    });
};

export const createSubject = (subject) => dispatch => {
  axios.post(`http://localhost:3100/subjects/new`, {subject}, {
    headers: {
      'Authorization': localStorage.getItem('token'),
    }
  })
    .then(res => {
      notify('success', 'Success', 'The new subject was successfully created!');
      // dispatch();
    })
    .catch(() => {
      notify('error', 'Error', 'Sorry, something went wrong and new subject was not created. Please, try one more time later.');
    });
};