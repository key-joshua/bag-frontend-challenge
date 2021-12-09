// Import all necessary libraries and components for this component
import React, { useEffect, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { filterCountriesBySearch } from '../../redux';
import DetailsSkeleton from '../skeleton/DetailsSkeleton';

// Create Details page component component
const Details = () => {
  // Declare react  react states and redux states
  const { CountryName } = useParams();
  const dispatch = useDispatch();
  const ActiveTheme = useSelector((state) => state.ActiveTheme);
  const getCountriesBySearch = useSelector((state) => state.getCountriesBySearch);
  const [Result, setResult] = useState([]);
  const [Languages, setLanguages] = useState([]);
  const [ResultStatus, setResultStatus] = useState('loading');

  // Effect to trigger redux function which fetch country match the name when window reload
  useEffect(() => {
    dispatch(filterCountriesBySearch(CountryName));
  }, []);

  // Effect which listen and change react state according to the response from api
  useEffect(() => {
    if (getCountriesBySearch.success === true) {
      setResult(getCountriesBySearch.informations);
      setResultStatus('success');
      const obj = getCountriesBySearch.informations[0].languages;
      const newObj = Object.values(Object.fromEntries(Object.entries(obj).map(([k, v]) => [k, v])));
      setLanguages(newObj);
    } else {
      setResultStatus('error');
    }
  }, [getCountriesBySearch]);
  return (
    // In Jsx we first check if have data from api and with react state and then diplay page according to response status
    <>
      { ResultStatus === 'success' ? Result.map((el) => (
        <div className="details-container">
          <div className="details-wrapper1">
            <img src={el.flags.png} alt=" " />
          </div>

          <div className="details-wrapper2">
            <h3 style={{ color: `${ActiveTheme.ModeTextColor}` }}>{el.name.common}</h3>
            <div className="details-wrapper2-first-div">
              <div className="details-wrapper2-child">
                <div>
                  <h4 style={{ color: `${ActiveTheme.ModeTextColor}` }}>Native Name :</h4>
                  <p>
                    {el.name.official }
                  </p>
                </div>
                <div>
                  <h4 style={{ color: `${ActiveTheme.ModeTextColor}` }}>Population :</h4>
                  <p>{el.population }</p>
                </div>
                <div>
                  <h4 style={{ color: `${ActiveTheme.ModeTextColor}` }}>Region :</h4>
                  <p>{ el.region}</p>
                </div>
                <div>
                  <h4 style={{ color: `${ActiveTheme.ModeTextColor}` }}>Sub Region :</h4>
                  <p>{ el.subregion}</p>
                </div>
                <div>
                  <h4 style={{ color: `${ActiveTheme.ModeTextColor}` }}>Capital :</h4>
                  <p>{ el.capital}</p>
                </div>

              </div>
              <div className="details-wrapper2-child">
                <div>
                  <h4 style={{ color: `${ActiveTheme.ModeTextColor}` }}>Top Level Domain :</h4>
                  {el.tld.map((domain) => (<p key={uuidv4()}>{ domain}</p>))}

                </div>
                <div>
                  <h4 style={{ color: `${ActiveTheme.ModeTextColor}` }}>Currencies :</h4>
                  <p>
                    {Object.keys(el.currencies)}
                  </p>
                </div>
                <div>
                  <h4 style={{ color: `${ActiveTheme.ModeTextColor}` }}>Capital :</h4>
                  <p>{ el.startOfWeek}</p>
                </div>
                <div>
                  <h4 style={{ color: `${ActiveTheme.ModeTextColor}` }}>Languages :</h4>
                  {Languages.length > 0 && (Languages.map((lang) => (
                    <p key={uuidv4()}>
                      { lang}
                      ,
                    </p>
                  )))}
                </div>
              </div>
            </div>
            <div className="details-wrapper2-second-div">
              <h4 style={{ color: `${ActiveTheme.ModeTextColor}` }}>Border Countries :</h4>
              <div>
                {el.borders ? el.borders.map((res) => (
                  <button type="button" key={uuidv4()} style={{ color: `${ActiveTheme.ModeTextColor}` }}>{ res}</button>
                )) : <button type="button" key={uuidv4()} style={{ color: `${ActiveTheme.ModeTextColor}` }}>None</button>}
              </div>
            </div>
          </div>

        </div>
      )) : <DetailsSkeleton />}

    </>
  );
};

export default Details;
