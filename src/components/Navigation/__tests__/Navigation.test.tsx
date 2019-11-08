import React from 'react';
import { render } from '@testing-library/react';
import Navigation from '../Navigation';
import MockedPatientProvider from 'testUtils/MockedPatientProvider';

describe('<Navigation />', () => {
  const renderComponent = (props = {}) =>
    render(
      <MockedPatientProvider>
        <Navigation {...props} />
      </MockedPatientProvider>
    );

  it('renders a visible header title and logo', () => {
    const { getByText } = renderComponent();

    // expect(getByText(name)).toBeVisible();
  });
});
