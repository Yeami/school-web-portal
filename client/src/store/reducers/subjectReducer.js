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
      const data = [...state.subjects.filter((s) => s._id !== action.payload._id), action.payload]
      return {
        ...state,
        subjects: data,
      };
    default:
      return state;
  }
};

export default subjectReducer;
