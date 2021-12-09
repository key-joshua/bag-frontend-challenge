import { NAVBAR_REDIRECT } from '../actionTypes';

const defaultState = { navigation: false };
const reducer = (state = defaultState, action) => {
  switch (action.type) {
    case NAVBAR_REDIRECT:
      if (action.payload !== '/') {
        return { navigation: true };
      }
      return { navigation: false };
    default:
      return state;
  }
};

export default reducer;
