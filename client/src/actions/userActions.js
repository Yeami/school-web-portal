import axios from 'axios';

const setUser = (payload) => ({type: 'SET_USER', payload})

export const logUserOut = () => ({type: 'LOG_OUT'})

export const fetchUser = (user) => dispatch => {
  axios.post(`http://localhost:3100/users/login`, {user})
    .then(res => {
      localStorage.setItem('token', res.data.token)
      dispatch(setUser(res.data.user))
    })
}

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