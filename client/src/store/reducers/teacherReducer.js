const defaultState = {
  teachers: [],
};

const teacherReducer = (state = defaultState, action) => {
  switch (action.type) {
    case 'SET_TEACHERS':
      return {
        ...state,
        teachers: action.payload,
      };
    case 'PUSH_NEW_TEACHER':
      state.teachers.push(action.payload)
      return {
        ...state,
      };
    default:
      return state;
  }
};

export default teacherReducer;
