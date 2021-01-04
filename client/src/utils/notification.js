import { notification } from 'antd';

export const notify = (type, title, text) => {
  notification[type]({
    message: title,
    description: text,
  });
};
