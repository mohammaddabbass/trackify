import React from 'react';
import './styles.css';

const Header = () => {
  return (
    <nav className="header flex align-center">
      <div className="header-content flex align-center justify-between">
        <div className="header-title">Trackify</div>
        <div className="nav-buttons flex justify-between align-center ">
          <button className="nav-button">Dashboard</button>
          <button className="nav-button">Upload</button>
          <button className="nav-button" style={{ color: '#86868b' }}>•••</button>
        </div>
      </div>
    </nav>
  );
};  

export default Header;
