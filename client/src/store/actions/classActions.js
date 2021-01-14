import axios from 'axios';
import {
  addStudentToClassErrorNotify,
  addStudentToClassSuccessNotify,
  createClassErrorNotify,
  createClassSuccessNotify,
  getClassesErrorNotify
} from '../notifications/classNotifications';
import {getAuthRequestHeaders} from '../../utils/utils';

const setClasses = (payload) => ({type: 'SET_CLASSES', payload});
const setNewClass = (payload) => ({type: 'SET_NEW_CLASS', payload});
const setNewStudentToClass = (payload) => ({type: 'SET_NEW_STUDENT_TO_CLASS', payload});

export const getClasses = () => dispatch => {
  axios.get(`http://localhost:3100/classes/all`)
    .then(res => {
      dispatch(setClasses(res.data));
    })
    .catch(() => getClassesErrorNotify());
};

export const createClass = (name) => dispatch => {
  axios.post(`http://localhost:3100/classes/new`, {class: {name}}, getAuthRequestHeaders())
    .then(res => {
      createClassSuccessNotify();
      dispatch(setNewClass(res.data));
    })
    .catch(() => createClassErrorNotify());
};

export const addStudentToClass = (data) => dispatch => {
  axios.post(`http://localhost:3100/classes/student/new`, {data}, getAuthRequestHeaders())
    .then(res => {
      addStudentToClassSuccessNotify();
      dispatch(setNewStudentToClass(res.data));
    })
    .catch(() => addStudentToClassErrorNotify());
};
