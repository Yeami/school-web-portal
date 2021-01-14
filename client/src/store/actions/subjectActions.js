import axios from 'axios';
import {notify} from '../../utils/notification';

const setSubjects = (payload) => ({type: 'SET_SUBJECTS', payload});
const setNewSubject = (payload) => ({type: 'SET_NEW_SUBJECT', payload});
const setUpdatedSubject = (payload) => ({type: 'SET_UPDATED_SUBJECT', payload});
const setRemovedSubject = (payload) => ({type: 'SET_REMOVED_SUBJECT', payload});

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
      dispatch(setNewSubject(res.data));
    })
    .catch(() => {
      notify('error', 'Error', 'Sorry, something went wrong and new subject was not created. Please, try one more time later.');
    });
};

export const updateSubject = (id, name, description) => dispatch => {
  axios.patch(`http://localhost:3100/subjects/update/${id}`, {name, description}, {
    headers: {
      'Authorization': localStorage.getItem('token'),
    },
  })
    .then((res) => {
      notify('success', 'Success', 'The subject was successfully updated!');
      dispatch(setUpdatedSubject(res.data));
    })
    .catch(() => {
      notify('error', 'Error', 'Sorry, something went wrong and subject was not updated. Please, try one more time later.');
    });
};

export const removeSubject = (id) => dispatch => {
  axios.delete(`http://localhost:3100/subjects/remove/${id}`, {
    headers: {
      'Authorization': localStorage.getItem('token'),
    },
  })
    .then(() => {
      notify('success', 'Success', 'The subject was successfully removed!');
      dispatch(setRemovedSubject(id));
    })
    .catch(() => {
      notify('error', 'Error', 'Sorry, something went wrong and subject was not removed. Please, try one more time later.');
    });
};