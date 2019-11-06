import React from 'react';
import { render } from '@testing-library/react';
import Header from './Header';

it('renders a visible header title and logo', () => {
  const { getByText, getByRole } = render(<Header title="fake_title" logo="fake logo" />);
  expect(getByText('fake_title')).toBeVisible();
  expect(getByRole('img')).toBeVisible();
});
