import axios from 'axios';
import {
  createPublicationErrorNotify,
  createPublicationSuccessNotify,
  getPublicationsErrorNotify
} from '../notifications/publicationNotifications';
import {getAuthRequestHeaders} from '../../utils/utils';

const setPublications = (payload) => ({type: 'SET_PUBLICATIONS', payload});
const addNewPublication = (payload) => ({type: 'PUSH_NEW_PUBLICATION', payload});

export const getPublications = () => dispatch => {
  axios.get(`http://localhost:3100/publications/all`)
    .then(res => {
      dispatch(setPublications(res.data));
    })
    .catch(() => getPublicationsErrorNotify());
};

export const createPublication = (publication) => dispatch => {
  axios.post(`http://localhost:3100/publications/new`, {publication}, getAuthRequestHeaders())
    .then(res => {
      createPublicationSuccessNotify();
      dispatch(addNewPublication(res.data));
    })
    .catch(() => createPublicationErrorNotify());
};