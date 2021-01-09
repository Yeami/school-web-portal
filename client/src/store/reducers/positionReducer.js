const defaultState = {
  positions: [],
};

const positionReducer = (state = defaultState, action) => {
  switch (action.type) {
    case 'SET_POSITIONS':
      return {
        ...state,
        positions: action.payload,
      };
    default:
      return state;
  }
};

export default positionReducer;
