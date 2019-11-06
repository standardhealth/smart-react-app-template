import React from 'react';
import { render } from '@testing-library/react';
import Navigation from './Navigation';

it('renders a visible header title and logo', () => {
  const name = 'fakeName',
    birthDate = 'fakeBirthDate',
    gender = 'fakeGender',
    address = [{ city: 'fakeCity', state: 'fakeState' }];
  const { getByText } = render(<Navigation name={name} birthDate={birthDate} gender={gender} address={address} />);
  expect(getByText(name)).toBeVisible();
});
