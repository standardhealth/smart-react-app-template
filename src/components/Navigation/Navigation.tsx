import React, { FC, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import PatientSnapshot from 'components/PatientSnapshot';
import DropDown from 'components/DropDown';

import './Navigation.scss';

type Option = {
  label: string;
  value: string;
};

const pathwayOptions = [{ label: 'Medications', value: 'meds' }, { label: 'Chart', value: 'chart' }];

const Navigation: FC<{}> = () => {
  const [pathway, setPathway] = useState<Option | ReadonlyArray<Option> | null>(null);

  const onChangeHandler = (pathway: Option | ReadonlyArray<Option> | null): void => {
    setPathway(pathway);
  };

  return (
    <nav className="navigation">
      <div className="navigation__left-panel">
        <FontAwesomeIcon icon="chevron-left" className="navigation__back" />

        <PatientSnapshot />
      </div>

      <div className="navigation__right-panel">
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
