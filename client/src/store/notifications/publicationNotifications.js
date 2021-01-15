import {notify} from '../../utils/notification';

export const getPublicationsErrorNotify = () => {
  notify('error', 'Error', 'Sorry, something went wrong and we can`t load the list of all publications. Please, try one more time later.');
};

export const createPublicationSuccessNotify = () => {
  notify('success', 'Success', 'The new publication was successfully created!');
};

export const createPublicationErrorNotify = () => {
  notify('error', 'Error', 'Sorry, something went wrong and new publication was not created. Please, try one more time later.');
};
