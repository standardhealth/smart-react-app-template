import React, { FC, useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import PatientSnapshot from 'components/PatientSnapshot';
import DropDown from 'components/DropDown';

import './Navigation.scss';

interface Props {
  name: string;
  birthDate: string;
  gender: string;
  address: Array<Address>;
}

type Address = {
  city?: string;
  state?: string;
};

type Option = {
  label: string;
  value: string;
};

const pathwayOptions = [
  { label: 'Medications', value: 'meds' },
  { label: 'Chart', value: 'chart' }
];

/***
 * Returns the first patient address provided as a string.
 *
 * @param address - The array of addresses for the patient
 * @returns The address presented as 'city, state'
 */
const getPatientAddress = (address: Array<Address> = []): string => {
  const entry = address[0];
  return entry ? [entry.city, entry.state].filter(item => !!item).join(', ') : 'No Address';
};

/**
 * Basic Navigation Element.
 *
 * Provides a back arrow, a snaphshot of the patient information, and a dropdown menu
 *
 * @param name - The patient's name
 * @param birthDate - The patient's date of birth
 * @param gender - The patient's gender
 * @param address - The patient's address
 * @constructor
 */
const Navigation: FC<Props> = ({ name, birthDate, gender, address }) => {
  const [pathway, setPathway] = useState<Option | ReadonlyArray<Option> | null>(null);

  const onChangeHandler = (pathway: Option | ReadonlyArray<Option> | null) => {
    setPathway(pathway);
  };

  return (
    <nav className="navigation">
      <div className="navigation__left-panel">
        <FontAwesomeIcon icon="chevron-left" className="navigation__back" />

        <PatientSnapshot
          name={name}
          birthDate={birthDate}
          gender={gender}
          address={getPatientAddress(address)}
        />
      </div>

      <div className="navigation__right-panel">
        <DropDown
          label="Pathway: "
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
