/* eslint-disable import/named */
import {
  FILTER_COUNTRIES_BY_SEARCH_REQUEST,
  FILTER_COUNTRIES_BY_SEARCH_SUCCESS,
  FILTER_COUNTRIES_BY_SEARCH_FAILURE,
} from '../actionTypes';

const initialState = {
  loading: false,
  informations: [],
  success: false,
  error: '',
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case FILTER_COUNTRIES_BY_SEARCH_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case FILTER_COUNTRIES_BY_SEARCH_SUCCESS:
      return {
        loading: false,
        informations: action.payload,
        success: true,
        error: '',
      };
    case FILTER_COUNTRIES_BY_SEARCH_FAILURE:
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
