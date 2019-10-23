import React from 'react';
import { render } from '@testing-library/react'
import Header from './Header';

it('renders without crashing', () => {
  render(<Header title='fake_title' logo='fake logo'/>);
});
