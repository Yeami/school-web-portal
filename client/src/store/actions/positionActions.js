import axios from 'axios';
import {getAuthRequestHeaders} from '../../utils/utils';

const setAllPositions = (payload) => ({type: 'SET_POSITIONS', payload});

export const getAllPositions = () => dispatch => {
  axios.get(`http://localhost:3100/positions/all`, getAuthRequestHeaders())
    .then(res => {
      dispatch(setAllPositions(res.data));
    })
};