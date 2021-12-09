import { CHANGE_THEME } from '../actionTypes';

const defaultState = {
  ModeColor: '#fff',
  ModeTextColor: '#000',
  ModeDropColor: '#000',
  mode: 'light',
};
const reducer = (state = defaultState, action) => {
  switch (action.type) {
    case CHANGE_THEME:
      localStorage.setItem('theme', action.payload);
      if (action.payload === 'dark') {
        return {
          ModeColor: '#010409',
          ModeTextColor: '#aaaaaa',
          ModeDropColor: '#fff',
          mode: 'dark'
        };
      }
      return {
        ModeColor: '#fff',
        ModeTextColor: '#000',
        ModeDropColor: '#000',
        mode: 'light'
      };
    default:
      return state;
  }
};

export default reducer;
