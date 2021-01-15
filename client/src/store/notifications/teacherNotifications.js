import {notify} from '../../utils/notification';

export const getTeachersErrorNotify = () => {
  notify('error', 'Error', 'Sorry, something went wrong and we can`t load the list of all teacher. Please, try one more time later.');
};

export const createTeacherSuccessNotify = () => {
  notify('success', 'Success', 'The new teacher was successfully added!');
};

export const createTeacherErrorNotify = () => {
  notify('error', 'Error', 'Sorry, something went wrong and new teacher was not added. Please, try one more time later.');
};
