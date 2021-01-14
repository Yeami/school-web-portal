import {notify} from '../../utils/notification';

export const getClassesErrorNotify = () => {
  notify('error', 'Error', 'Sorry, something went wrong and we can`t load the list of all classes. Please, try one more time later.');
};

export const createClassSuccessNotify = () => {
  notify('success', 'Success', 'The new class was successfully created!');
};

export const createClassErrorNotify = () => {
  notify('error', 'Error', 'Sorry, something went wrong and new class was not created. Please, try one more time later.');
};

export const addStudentToClassSuccessNotify = () => {
  notify('success', 'Success', 'The student was successfully added to the class!');
};

export const addStudentToClassErrorNotify = () => {
  notify('error', 'Error', 'Sorry, something went wrong and student was not added to the class. Please, try one more time later.');
};
