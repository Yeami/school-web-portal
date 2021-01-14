const defaultState = {
  user: {},
};

const userReducer = (state = defaultState, action) => {
  switch (action.type) {
    case 'SET_USER':
      return {
        ...state,
        user: action.payload,
      };
    case 'LOG_OUT':
      localStorage.clear();
      return {
        ...state,
        user: {},
      };
    default:
      return state;
  }
};

export default userReducer;
