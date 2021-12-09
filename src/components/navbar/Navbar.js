/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable react/prop-types */

// Import all necessary libraries and components for this component
import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useLocation, useHistory } from 'react-router-dom';
import * as Icon from 'react-feather';
import { handlePath } from '../../redux';
import avatatar from '../../assets/images/avatar.png';

// Create navbar component and destructure data from parent as props

const Navbar = ({ ToggleMenu, ToggleTheme, ActiveMode, ActiveTheme }) => {
  // Declare react libraries, react states and redux states
  const location = useLocation();
  const history = useHistory();
  const dispatch = useDispatch();
  const status = useSelector((state) => state.navigationResponse);

  // function to check activated mode and send that informations to parent component
  const ChangeMode = () => {
    if (ActiveMode === 'dark') {
      ToggleTheme('light');
    } else {
      ToggleTheme('dark');
    }
  };

  // This effect will trigger redux function which handle navigation when window reload
  useEffect(() => {
    dispatch(handlePath(location.pathname));
  }, []);

  // Function to handle navigation when card clicked
  const handleDirection = () => {
    dispatch(handlePath('/'));
    history.push('/');
  };
  return (
  // Jsx which contain navbar info to be displayed in browser
    <div className="navbar-container">
      <div className="navbar-first-wrapper">
        {status.navigation === false ? (
          <h3>MY LIST</h3>
        ) : (
          <h3 onClick={handleDirection}>
            <Icon.ArrowLeft size={20} />
            Back
          </h3>
        )}
      </div>
      <div className="navbar-second-wrapper">
        <div onClick={() => ToggleMenu(true)}>
          <Icon.Menu />
        </div>
        <div>
          <p>DARK MODE</p>
          <div onClick={ChangeMode} style={ActiveTheme.mode === 'dark' ? { justifyContent: 'flex-start' } : { justifyContent: 'flex-end' }}>
            <label />
          </div>
        </div>
        <div>
          <Icon.Bell size={16} />
        </div>
        <div>
          <p>
            Hey
            <span>Jane</span>
          </p>
          <img
            src={avatatar}
            alt="profile"
          />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
