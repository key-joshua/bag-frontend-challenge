import { combineReducers } from 'redux';
import AllCountriesReducer from './AllCountriesReducer';
import CountriesByRegionReducer from './CountriesByRegionReducer';
import CountriesBySearchReducer from './CountriesBySearchReducer';
import ThemeReducer from './ThemesReducer';
import NavbarRedirectReducer from './NavbarRedirectReducer';

const rootReducer = combineReducers({
  getAllCountries: AllCountriesReducer,
  getCountriesByRegion: CountriesByRegionReducer,
  getCountriesBySearch: CountriesBySearchReducer,
  ActiveTheme: ThemeReducer,
  navigationResponse: NavbarRedirectReducer
});
export default rootReducer;
