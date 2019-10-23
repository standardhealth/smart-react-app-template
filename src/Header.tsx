import React from 'react';
import './Header.css';
import logo from './logo.svg';

type HeaderProps = {title: string};

const Header: React.FunctionComponent<HeaderProps> = (props: HeaderProps) => {
  return (
    <header className="header">
      <img src={logo} className="header__logo header-item" alt="logo" />
      <h1 className="header__title header-item">{props.title}</h1>
      <i className="material-icons md-light header-right header-item">settings_applications</i>
    </header>
  );
};

export default Header;
