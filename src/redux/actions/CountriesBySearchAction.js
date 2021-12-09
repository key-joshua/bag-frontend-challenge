import BaseUrl from '../../base_url/BaseUrl';
import {
  FILTER_COUNTRIES_BY_SEARCH_REQUEST,
  FILTER_COUNTRIES_BY_SEARCH_SUCCESS,
  FILTER_COUNTRIES_BY_SEARCH_FAILURE,
} from '../actionTypes';

const filterCountriesBySearchRequest = () => ({ type: FILTER_COUNTRIES_BY_SEARCH_REQUEST, });
const filterCountriesBySearchSuccess = (informations) => ({
  type: FILTER_COUNTRIES_BY_SEARCH_SUCCESS,
  payload: informations,
});

const filterCountriesBySearchFailure = (error) => ({
  type: FILTER_COUNTRIES_BY_SEARCH_FAILURE,
  payload: error,
});

export const filterCountriesBySearch = (slug) => (dispatch) => {
  dispatch(filterCountriesBySearchRequest());
  BaseUrl.get(`v3.1/name/${slug}`)
    .then((response) => {
      const informations = response.data;
      dispatch(filterCountriesBySearchSuccess(informations));
    })
    .catch((error) => {
      const errorMsg = error.message;
      dispatch(filterCountriesBySearchFailure(errorMsg));
    });
};
