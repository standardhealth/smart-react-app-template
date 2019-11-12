import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Navigation from '../Navigation';
import MockedPatientProvider from 'testUtils/MockedPatientProvider';

describe('<Navigation />', () => {
  const renderComponent = (props = {}) =>
    render(
      <MockedPatientProvider>
        <Navigation {...props} />
      </MockedPatientProvider>
    );

  it('can select a pathway', () => {
    const { getByLabelText, getByText } = renderComponent();

    fireEvent.keyDown(getByLabelText('Pathway:', { selector: 'input' }), { keyCode: 40 });
    fireEvent.click(getByText('Medications'));

    expect(getByText('Medications')).toBeInTheDocument();
  });
});
