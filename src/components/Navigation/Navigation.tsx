import React, { FC, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import PatientSnapshot from 'components/PatientSnapshot';
import DropDown from 'components/DropDown';

import classes from './Navigation.module.scss';

type Option = {
  label: string;
  value: string;
};

const pathwayOptions = [
  { label: 'Medications', value: 'meds' },
  { label: 'Chart', value: 'chart' }
];

const Navigation: FC<{}> = () => {
  const [pathway, setPathway] = useState<Option | ReadonlyArray<Option> | null>(null);

  const onChangeHandler = (pathway: Option | ReadonlyArray<Option> | null): void => {
    setPathway(pathway);
  };

  return (
    <nav className={classes.navigation}>
      <div className={classes['navigation__left-panel']}>
        <FontAwesomeIcon icon="chevron-left" className={classes.navigation__back} />

        <PatientSnapshot />
      </div>

      <div className={classes['navigation__right-panel']}>
        <DropDown
          label="Pathway:"
          id="patient-view"
          options={pathwayOptions}
          selectedValue={pathway}
          onChange={onChangeHandler}
        />
      </div>
    </nav>
  );
};

export default Navigation;
