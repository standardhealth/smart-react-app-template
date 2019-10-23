import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import PatientSnapshot from './PatientSnapshot';

it('renders a visible header title and logo', () => {
  const props: { [key: string]: string } = { name: 'fakeName',
                                             birthDate: 'fakeBirthDate',
                                             gender: 'fakeGender',
                                             address: 'fakeCity, fakeState'};
  const { getByText } = render(<PatientSnapshot name={props.name}
                                                birthDate={props.birthDate}
                                                gender={props.gender}
                                                address={props.address}/>);
  for (const patientAttribute in props) {
    expect(getByText(props[patientAttribute]));
  }
});
