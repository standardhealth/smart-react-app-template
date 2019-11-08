import React, { FC } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import classes from './Header.module.scss';

interface HeaderProps {
  title: string;
  logo: string;
}

const Header: FC<HeaderProps> = (props: HeaderProps) => {
  return (
    <header className={classes.header}>
      <img src={props.logo} className="header__logo" alt="logo" />
      <h1 className="header__title header-item">{props.title}</h1>
      <FontAwesomeIcon icon="cog" className="settings-logo header-right" />
    </header>
  );
};

export default Header;
