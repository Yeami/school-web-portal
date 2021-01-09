import axios from 'axios';

const setAllPositions = (payload) => ({type: 'SET_POSITIONS', payload});

export const getAllPositions = () => dispatch => {
  axios.get(`http://localhost:3100/positions/all`, {
    headers: {
      'Authorization': localStorage.getItem('token'),
    }
  })
    .then(res => {
      dispatch(setAllPositions(res.data));
    })
};