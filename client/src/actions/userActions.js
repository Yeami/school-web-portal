import axios from 'axios';

const setUser = (payload) => ({type: 'SET_USER', payload})

export const logUserOut = () => ({type: 'LOG_OUT'})

export const fetchUser = (user) => dispatch => {
  axios.post(`http://localhost:3100/users/login`, {user})
    .then(res => {
      localStorage.setItem('token', `Bearer ${res.data.token}`);
      dispatch(setUser(res.data.user));
    });
};

export const getUserInfo = () => dispatch => {
  axios.get(`http://localhost:3100/users/me`, {
    headers: {
      'Authorization': localStorage.getItem('token'),
    }
  })
    .then(res => {
      dispatch(setUser(res.data));
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