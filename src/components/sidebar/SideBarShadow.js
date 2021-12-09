/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable react/prop-types */
import React from 'react';

// create sidebar shadow component which will occur on mobile scrren size and destructure data from parent component as props
export default function SideBarShadow({ SideBarState, ToggleMenu }) {
  return (
    <div
      className="sidebar-shadow"
      style={{ transform: `${SideBarState.transform}` }}
      onClick={() => ToggleMenu(false)}
    />
  );
}
