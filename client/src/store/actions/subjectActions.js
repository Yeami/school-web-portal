import axios from 'axios';
import {
  createSubjectErrorNotify,
  createSubjectSuccessNotify,
  getSubjectsErrorNotify,
  removeSubjectErrorNotify,
  removeSubjectSuccessNotify,
  updateSubjectErrorNotify,
  updateSubjectSuccessNotify
} from '../notifications/subjectNotifications';
import {getAuthRequestHeaders} from '../../utils/utils';

const setSubjects = (payload) => ({type: 'SET_SUBJECTS', payload});
const setNewSubject = (payload) => ({type: 'SET_NEW_SUBJECT', payload});
const setUpdatedSubject = (payload) => ({type: 'SET_UPDATED_SUBJECT', payload});
const setRemovedSubject = (payload) => ({type: 'SET_REMOVED_SUBJECT', payload});

export const getSubjects = () => dispatch => {
  axios.get(`http://localhost:3100/subjects/all`)
    .then(res => {
      dispatch(setSubjects(res.data));
    })
    .catch(() => getSubjectsErrorNotify());
};

export const createSubject = (subject) => dispatch => {
  axios.post(`http://localhost:3100/subjects/new`, {subject}, getAuthRequestHeaders())
    .then(res => {
      createSubjectSuccessNotify();
      dispatch(setNewSubject(res.data));
    })
    .catch(() => createSubjectErrorNotify());
};

export const updateSubject = (id, name, description) => dispatch => {
  axios.patch(`http://localhost:3100/subjects/update/${id}`, {name, description}, getAuthRequestHeaders())
    .then((res) => {
      updateSubjectSuccessNotify();
      dispatch(setUpdatedSubject(res.data));
    })
    .catch(() => updateSubjectErrorNotify());
};

export const removeSubject = (id) => dispatch => {
  axios.delete(`http://localhost:3100/subjects/remove/${id}`, getAuthRequestHeaders())
    .then(() => {
      removeSubjectSuccessNotify();
      dispatch(setRemovedSubject(id));
    })
    .catch(() => removeSubjectErrorNotify());
};
