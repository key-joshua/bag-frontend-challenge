/* eslint-disable import/named */
import {
  FETCH_ALL_COUNTRIES_REQUEST,
  FETCH_ALL_COUNTRIES_SUCCESS,
  FETCH_ALL_COUNTRIES_FAILURE,
} from '../actionTypes';

const initialState = {
  loading: false,
  informations: [],
  success: false,
  error: '',
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_ALL_COUNTRIES_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case FETCH_ALL_COUNTRIES_SUCCESS:
      return {
        loading: false,
        informations: action.payload,
        success: true,
        error: '',
      };

    case FETCH_ALL_COUNTRIES_FAILURE:
      return {
        loading: false,
        informations: [],
        success: false,
        error: action.payload,
      };

    default:
      return state;
  }
};

export default reducer;
