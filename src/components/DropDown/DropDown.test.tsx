import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import DropDown from "./DropDown";

it('renders the options', () => {
  const label = 'drop down options';
  const idText = 'fakeId';
  const name = 'fakeName';
  const options = ['cat', 'dog', 'lion'];

  const { getByLabelText, getAllByRole, getByText } = render(<DropDown id={idText}
                                                    name={name}
                                                    options={options}
                                                    label={label} />);
  expect(getByLabelText(label)).toBeVisible();
  const optionsRendered = getAllByRole('option');
  expect(optionsRendered.length).toEqual(options.length);
  options.forEach(option => {
    expect(getByText(option)).toBeDefined();
  });
});
