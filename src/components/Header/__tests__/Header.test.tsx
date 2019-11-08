import React from 'react';
import { render } from '@testing-library/react';
import Header from '../Header';

describe('<Header />', () => {
  it('renders a visible header title and logo', () => {
    const { getByText, getByRole } = render(<Header title="Title" logo="logo" />);

    expect(getByText('Title')).toBeVisible();
    expect(getByRole('img')).toBeVisible();
  });
});
