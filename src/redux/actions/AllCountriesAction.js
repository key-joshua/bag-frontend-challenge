import BaseUrl from '../../base_url/BaseUrl';
import {
  FETCH_ALL_COUNTRIES_REQUEST,
  FETCH_ALL_COUNTRIES_SUCCESS,
  FETCH_ALL_COUNTRIES_FAILURE,
} from '../actionTypes';

const fetchAllCountriesRequest = () => ({ type: FETCH_ALL_COUNTRIES_REQUEST });
const fetchAllCountriesSuccess = (informations) => ({
  type: FETCH_ALL_COUNTRIES_SUCCESS,
  payload: informations,
});

const fetchAllCountriesFailure = (error) => ({
  type: FETCH_ALL_COUNTRIES_FAILURE,
  payload: error,
});

export const fetchAllCountries = () => (dispatch) => {
  dispatch(fetchAllCountriesRequest());
  BaseUrl.get('v3.1/all')
    .then((response) => {
      const informations = response.data;
      dispatch(fetchAllCountriesSuccess(informations));
    })
    .catch((error) => {
      const errorMsg = error.message;
      dispatch(fetchAllCountriesFailure(errorMsg));
    });
};
