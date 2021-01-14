import {notify} from '../../utils/notification';

export const getSubjectsErrorNotify = () => {
  notify('error', 'Error', 'Sorry, something went wrong and we can`t load the list of all subjects. Please, try one more time later.');
};

export const createSubjectSuccessNotify = () => {
  notify('success', 'Success', 'The new subject was successfully created!');
};

export const createSubjectErrorNotify = () => {
  notify('error', 'Error', 'Sorry, something went wrong and new subject was not created. Please, try one more time later.');
};

export const updateSubjectSuccessNotify = () => {
  notify('success', 'Success', 'The subject was successfully updated!');
};

export const updateSubjectErrorNotify = () => {
  notify('error', 'Error', 'Sorry, something went wrong and subject was not updated. Please, try one more time later.');
};

export const removeSubjectSuccessNotify = () => {
  notify('success', 'Success', 'The subject was successfully removed!');
};

export const removeSubjectErrorNotify = () => {
  notify('error', 'Error', 'Sorry, something went wrong and subject was not removed. Please, try one more time later.');
};
