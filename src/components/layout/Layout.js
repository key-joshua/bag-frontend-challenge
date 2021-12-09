/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable react/prop-types */
import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { handleTheme } from '../../redux';
import Navbar from '../navbar/Navbar';
import Sidebar from '../sidebar/Sidebar';
import SideBarShadow from '../sidebar/SideBarShadow';

// Create parent component for other childeren and passing data to children as props
const Layout = ({ children }) => {
  const dispatch = useDispatch();
  const ActiveTheme = useSelector((state) => state.ActiveTheme);
  const [ActiveMode, setActiveMode] = useState('light');
  const [SideBarState, setSideBarState] = useState({ transform: '' });

  // Effect to handle theme when window reload
  useEffect(() => {
    const mode = localStorage.getItem('theme');
    if (mode === 'dark') {
      setActiveMode('dark');
      dispatch(handleTheme('dark'));
    }
  }, []);

  // function to change theme according to activated mode
  const ToggleTheme = (mode) => {
    setActiveMode(mode);
    dispatch(handleTheme(mode));
  };

  // function to display menu on small screen when menu icon clicked
  const ToggleMenu = (status) => {
    if (status === true) {
      return setSideBarState({ transform: 'translateX(0%)' });
    }
    return setSideBarState({ transform: '' });
  };

  return (
    <div
      className="app-container"
      style={{ backgroundColor: `${ActiveTheme.ModeColor}` }}
    >
      <div className="sidebar-container">
        <SideBarShadow SideBarState={SideBarState} ToggleMenu={ToggleMenu} />
        <Sidebar SideBarState={SideBarState} ActiveTheme={ActiveTheme} />
      </div>
      <div className="content-container">
        <Navbar
          ToggleMenu={ToggleMenu}
          ToggleTheme={ToggleTheme}
          ActiveMode={ActiveMode}
          ActiveTheme={ActiveTheme}
        />
        <div>{children}</div>
      </div>
    </div>
  );
};

export default Layout;
