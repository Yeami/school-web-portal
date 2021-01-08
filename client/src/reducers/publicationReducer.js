const defaultState = {
  publications: [],
};

const publicationReducer = (state = defaultState, action) => {
  switch (action.type) {
    case 'SET_PUBLICATIONS':
      return {
        ...state,
        publications: action.payload,
      };
    default:
      return state;
  }
};

export default publicationReducer;
