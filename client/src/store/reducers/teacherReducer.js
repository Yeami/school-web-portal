const defaultState = {
  teachers: {},
};

const teacherReducer = (state = defaultState, action) => {
  switch (action.type) {
    case 'SET_TEACHERS':
      return {
        ...state,
        teachers: action.payload,
      };
    default:
      return state;
  }
};

export default teacherReducer;
