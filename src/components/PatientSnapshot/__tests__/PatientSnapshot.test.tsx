import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import PatientSnapshot from '../PatientSnapshot';
import MockedPatientProvider from 'testUtils/MockedPatientProvider';

describe('<PatientSnapshot />', () => {
  const renderComponent = (props = {}) =>
    render(
      <MockedPatientProvider>
        <PatientSnapshot {...props} />
      </MockedPatientProvider>
    );

  it('renders a visible header title and logo', () => {
    const { getByText } = renderComponent();

    expect(getByText('Jane Doe')).toBeInTheDocument();
  });
});
