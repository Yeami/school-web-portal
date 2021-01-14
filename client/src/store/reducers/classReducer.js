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
    case 'SET_NEW_CLASS':
      return {
        ...state,
        classes: [...state.classes, action.payload],
      };
    case 'SET_NEW_STUDENT_TO_CLASS':
      return {
        ...state,
        classes: [action.payload, ...state.classes.filter((s) => s._id !== action.payload._id)],
      };
    default:
      return state;
  }
};

export default classReducer;
