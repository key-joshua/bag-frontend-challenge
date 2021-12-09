import { NAVBAR_REDIRECT } from '../actionTypes';

export const handlePath = (path) => ({
  type: NAVBAR_REDIRECT,
  payload: path,
});
