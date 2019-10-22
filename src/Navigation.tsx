import React from 'react';
import PatientSnapshot from './PatientSnapshot';
import './Navigation.css';
import PathwaySelection from './PathwaySelection';

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

const getPatientAddress = (address: Array<Address> = []): string => {
  const entry = address[0];
  return entry ? [entry.city, entry.state].filter(item => !!item).join(', ') : 'No Address';
};

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
      <PathwaySelection pathways={['Breast Cancer Pathway: Early Stage HER2+',
        'Exemplitis Pathway']}/>
    </nav>
  );
};

export default Navigation;
