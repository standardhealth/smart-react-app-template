import React from 'react';
import './Header.css';
import logo from "./logo.svg";

const Header = () => {
  return (
    <header className="header">
      <img src={logo} className="header__logo header-item" alt="logo" />
      <h1 className="header__title header-item">mCODE pathways</h1>
      <i className="material-icons md-light header-right header-item">settings_applications</i>
    </header>
  );
};

export default Header;
