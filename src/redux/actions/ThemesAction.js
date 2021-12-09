import { CHANGE_THEME } from '../actionTypes';

export const handleTheme = (mode) => ({
  type: CHANGE_THEME,
  payload: mode,
});
