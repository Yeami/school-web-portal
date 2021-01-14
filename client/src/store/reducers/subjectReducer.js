const defaultState = {
  subjects: [],
};

const subjectReducer = (state = defaultState, action) => {
  switch (action.type) {
    case 'SET_SUBJECTS':
      return {
        ...state,
        subjects: action.payload,
      };
    case 'SET_UPDATED_SUBJECT':
      return {
        ...state,
        subjects: [...state.subjects.filter((s) => s._id !== action.payload._id), action.payload],
      };
    case 'SET_REMOVED_SUBJECT':
      return {
        ...state,
        subjects: [...state.subjects.filter((s) => s._id !== action.payload)],
      };
    default:
      return state;
  }
};

export default subjectReducer;
