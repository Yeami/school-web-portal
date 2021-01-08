import axios from "axios";
import {notify} from "../../utils/notification";

const setAllTeachers = (payload) => ({type: 'SET_TEACHERS', payload});

export const getAllTeachers = () => dispatch => {
  axios.get(`http://localhost:3100/teachers/all`)
    .then(res => {
      dispatch(setAllTeachers(res.data));
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