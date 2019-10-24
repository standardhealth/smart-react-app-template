import React from 'react';
import './Header.scss';

type HeaderProps = {
  title: string;
  logo: string;
};

/**
 * Basic Header Element.
 *
 * @param props - contains the title and logo to be used in the header
 * @constructor
 */
const Header: React.FunctionComponent<HeaderProps> = (props: HeaderProps) => {
  return (
    <header className="header">
      <img src={props.logo} className="header__logo" alt="logo" />
      <h1 className="header__title header-item">{props.title}</h1>
      <i className="material-icons md-light header-right">settings_applications</i>
    </header>
  );
};

export default Header;
