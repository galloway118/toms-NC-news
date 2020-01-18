import React from 'react';
import './sideBarButton.css';

const Sidebutton = ({ click }) => {
  return (
    <button className="sidebarbutton" onClick={click}>
      <div className="buttonline"></div>
      <div className="buttonline"></div>
      <div className="buttonline"></div>
    </button>
  );
};

export default Sidebutton;
