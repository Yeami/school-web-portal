import {notify} from '../../utils/notification';

export const userSuccessfulAuthorizationNotify = () => {
  notify('success', 'Successful authorization', 'The credentials you entered are correct. So logging into the system...');
};

export const userUnsuccessfulAuthorizationNotify = () => {
  notify('error', 'Unsuccessful authorization', 'The credentials you entered did not match our records. Please double-check and try again.');
};

export const userLogOutSuccessNotify = () => {
  notify('info', 'Single device log out', 'You have been log out from the system on this device successfully');
};

export const userLogOutAllDevicesSuccessNotify = () => {
  notify('info', 'Multiple device log out', 'You have been log out from the system on all your devices successfully');
};

export const userUpdateSuccessNotify = () => {
  notify('success', 'Successful update', 'You have successfully updated your personal information');
};

export const userUpdateErrorNotify = () => {
  notify('error', 'Unsuccessful update', 'Oops, something went wrong and your personal information was not updated. Please, try one more time later');
};

export const userAvatarUpdateSuccessNotify = () => {
  notify('success', 'Successful update', 'You have successfully updated your avatar!');
};

export const userAvatarUpdateErrorNotify = () => {
  notify('error', 'Unsuccessful update', 'Oops, something went wrong and your avatar was not updated. Please, try one more time later');
};
