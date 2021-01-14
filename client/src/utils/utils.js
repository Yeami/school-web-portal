export const isEmpty = (obj) => Object.keys(obj).length === 0;

export const getAuthRequestHeaders = () => {
  return {
    headers: {
      'Authorization': localStorage.getItem('token'),
    }
  }
};
