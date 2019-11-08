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
      <img src={props.logo} alt="logo" />
      <h1>{props.title}</h1>
      <FontAwesomeIcon
        icon="cog"
        className={`${classes['settings-logo']} ${classes['header-right']}`}
      />
    </header>
  );
};

export default Header;
