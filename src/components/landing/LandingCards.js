/* eslint-disable react/prop-types */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */

// Import all necessary libraries and components for this component

import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import * as Icon from 'react-feather';
import { v4 as uuidv4 } from 'uuid';
import { useDispatch, useSelector } from 'react-redux';
import { fetchAllCountries, handlePath } from '../../redux';
import LandingSkeleton from '../skeleton/LandingSkeleton';

// Create landing page cards component and destucture data from parent as props
const LandingCard = ({ ActiveTheme }) => {
  // Declare react libraries, react states and redux states
  const history = useHistory();
  const dispatch = useDispatch();
  const getAllCountries = useSelector((state) => state.getAllCountries);
  const getCountriesByRegion = useSelector((state) => state.getCountriesByRegion);
  const getCountriesBySearch = useSelector((state) => state.getCountriesBySearch);
  const [Result, setResult] = useState([]);
  const [ResultStatus, setResultStatus] = useState('loading');

  // Create Effects which will trigger redux function to fetch data when window reload
  useEffect(() => {
    dispatch(fetchAllCountries());
  }, []);

  // Create Effects which will listen to redux states in case api return return response and change react state according to response from api
  useEffect(() => {
    if (getAllCountries.success === true) {
      setResult(getAllCountries.informations);
      setResultStatus('success');
    } else {
      setResultStatus('error');
    }
  }, [getAllCountries]);

  useEffect(() => {
    if (getCountriesByRegion.loading === true) {
      setResultStatus('loading');
    }
    if (getCountriesByRegion.success === true) {
      setResult(getCountriesByRegion.informations);
      setResultStatus('success');
    } else {
      setResultStatus('error');
    }
  }, [getCountriesByRegion]);

  useEffect(() => {
    if (getCountriesBySearch.loading === true) {
      setResultStatus('loading');
    }
    if (getCountriesBySearch.success === true) {
      setResult(getCountriesBySearch.informations);
      setResultStatus('success');
    } else {
      setResultStatus('error');
    }
  }, [getCountriesBySearch]);

  // Create function which will handle navigation when card clicked
  // this function also trigger redux function which change navbar and display go back link
  const HandleLink = (CountryName) => {
    dispatch(handlePath(`/details/${CountryName}`));
    history.push(`/details/${CountryName}`);
  };
  return (
    // In Jsx we first check if have data from api and with react state and then diplay page according to response status
    <div className="landing-wrapper2">
      {ResultStatus === 'success'
        ? Result.map((el) => (
          <div
            className="country-card"
            key={uuidv4()}
            onClick={() => HandleLink(el.name.common)}
          >
            <img src={el.flags.png} alt=" " />
            <h3 disabled style={{ color: `${ActiveTheme.ModeTextColor}` }}>
              {el.name.common}
            </h3>
            <p>
              Population :
              {el.population}
            </p>
            <p>
              Capital :
              {el.capital}
            </p>
            <p>
              Currency :
              {el.currencies !== undefined ? (
                <>{Object.keys(el.currencies)[0]}</>
              ) : (
                <>None</>
              )}
            </p>
            <div>
              <span>
                <Icon.Trash2 className="delete-icon" size={16} />
              </span>
              <span>
                <Icon.Check className="check-icon" size={16} />
              </span>
            </div>
          </div>
        )) : <LandingSkeleton />}

    </div>
  );
};

export default LandingCard;
