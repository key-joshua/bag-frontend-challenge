import BaseUrl from '../../base_url/BaseUrl';
import {
  FILTER_COUNTRIES_BY_REGION_REQUEST,
  FILTER_COUNTRIES_BY_REGION_SUCCESS,
  FILTER_COUNTRIES_BY_REGION_FAILURE,
} from '../actionTypes';

const filterCountriesByRegionRequest = () => ({ type: FILTER_COUNTRIES_BY_REGION_REQUEST, });
const filterCountriesByRegionSuccess = (informations) => ({
  type: FILTER_COUNTRIES_BY_REGION_SUCCESS,
  payload: informations,
});

const filterCountriesByRegionFailure = (error) => ({
  type: FILTER_COUNTRIES_BY_REGION_FAILURE,
  payload: error,
});

export const filterCountriesByRegion = (slug) => (dispatch) => {
  dispatch(filterCountriesByRegionRequest());
  BaseUrl.get(`v3.1/region/${slug}`)
    .then((response) => {
      const informations = response.data;
      dispatch(filterCountriesByRegionSuccess(informations));
    })
    .catch((error) => {
      const errorMsg = error.message;
      dispatch(filterCountriesByRegionFailure(errorMsg));
    });
};
