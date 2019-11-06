import React, { FC } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import './Header.scss';

interface HeaderProps {
  title: string;
  logo: string;
}

/**
 * Basic Header Element.
 *
 * @param props - contains the title and logo to be used in the header
 * @constructor
 */
const Header: FC<HeaderProps> = (props: HeaderProps) => {
  return (
    <header className="header">
      <img src={props.logo} className="header__logo" alt="logo" />
      <h1 className="header__title header-item">{props.title}</h1>
      <FontAwesomeIcon icon="cog" className="md-light header-right" />
    </header>
  );
};

export default Header;
