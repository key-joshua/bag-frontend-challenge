/* eslint-disable react/prop-types */
import React from 'react';

// create sidebar component and destructure data from parent component as props
const Sidebar = ({ SideBarState, ActiveTheme }) => (
  <div
    className="sidebar-wrapper"
    style={{
      transform: `${SideBarState.transform}`,
      backgroundColor: `${ActiveTheme.ModeColor}`,
    }}
  >
    <div style={{ color: `${ActiveTheme.ModeTextColor}` }}>BAG</div>
    <ul>
      <li>MY LIST</li>
      <li>VISITED</li>
      <li>TO VISIT</li>
    </ul>
  </div>
);

export default Sidebar;
