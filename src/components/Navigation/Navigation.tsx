import React from 'react';
import PatientSnapshot from 'components/PatientSnapshot';
import './Navigation.scss';
import DropDown from 'components/DropDown';

type Props = {
  name: string;
  birthDate: string;
  gender: string;
  address: Array<Address>;
};

interface Address {
  city?: string;
  state?: string;
}

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
const Navigation: React.FC<Props> = ({ name, birthDate, gender, address}) => {
  return (
    <nav className='navigation'>
      <div className='left-panel'>
        <i className="material-icons">keyboard_arrow_left</i>
        <PatientSnapshot name={name}
                         birthDate={birthDate}
                         gender={gender}
                         address={getPatientAddress(address)} />
      </div>
      <DropDown label='Selection: '
                id='patient-view'
                name='available views'
                options={[{text: 'Medications', value: 'meds'},
                          { text: 'Chart', value: 'chart'}]}/>
    </nav>
  );
};

export default Navigation;
