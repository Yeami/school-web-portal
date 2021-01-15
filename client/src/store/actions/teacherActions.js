import axios from 'axios';
import {getAuthRequestHeaders} from '../../utils/utils';
import {
  createTeacherErrorNotify,
  createTeacherSuccessNotify,
  getTeachersErrorNotify
} from '../notifications/teacherNotifications';

const setAllTeachers = (payload) => ({type: 'SET_TEACHERS', payload});
const pushNewTeacher = (payload) => ({type: 'PUSH_NEW_TEACHER', payload});

export const getAllTeachers = () => dispatch => {
  axios.get(`http://localhost:3100/teachers/all`)
    .then(res => {
      dispatch(setAllTeachers(res.data));
    })
    .catch(() => getTeachersErrorNotify());
};

export const createTeacher = (teacher) => dispatch => {
  axios.post(`http://localhost:3100/teachers/`, {teacher}, getAuthRequestHeaders())
    .then(res => {
      createTeacherSuccessNotify();
      dispatch(pushNewTeacher(res.data));
    })
    .catch(() => createTeacherErrorNotify());
};
