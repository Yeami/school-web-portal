import axios from "axios";
import {notify} from "../../utils/notification";

const setAllTeachers = (payload) => ({type: 'SET_TEACHERS', payload});
const pushNewTeacher = (payload) => ({type: 'PUSH_NEW_TEACHER', payload});

export const getAllTeachers = () => dispatch => {
  axios.get(`http://localhost:3100/teachers/all`)
    .then(res => {
      dispatch(setAllTeachers(res.data));
    })
    .catch(() => {
      notify('error', 'Error', 'Sorry, something went wrong and we can`t load the list of all teacher. Please, try one more time later.');
    });
};

export const createTeacher = (teacher) => dispatch => {
  axios.post(`http://localhost:3100/teachers/`, {teacher}, {
    headers: {
      'Authorization': localStorage.getItem('token'),
    }
  })
    .then(res => {
      notify('success', 'Success', 'The new teacher was successfully added!');
      dispatch(pushNewTeacher(res.data.user));
    })
    .catch(() => {
      notify('error', 'Error', 'Sorry, something went wrong and new teacher was not added. Please, try one more time later.');
    });
};
