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
    default:
      return state;
  }
};

export default subjectReducer;
