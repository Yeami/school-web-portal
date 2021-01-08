const defaultState = {
  // loggedIn: false,
  user: {},
  users: {},
};

const userReducer = (state = defaultState, action) => {
  switch (action.type) {
    case 'SET_USER':
      return {
        // loggedIn: true,
        ...state,
        user: action.payload,
      };
    case 'LOG_OUT':
      localStorage.clear();
      return {
        // loggedIn: false,
        ...state,
        user: {},
      };
    case 'SET_USERS':
      return {
        ...state,
        users: action.payload,
      };
    default:
      return state;
  }
};

export default userReducer;
