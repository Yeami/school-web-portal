const defaultState = {
  classes: [],
};

const classReducer = (state = defaultState, action) => {
  switch (action.type) {
    case 'SET_CLASSES':
      return {
        ...state,
        classes: action.payload,
      };
    default:
      return state;
  }
};

export default classReducer;
