import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import DropDown from './DropDown';

const label = 'drop down options';
const idText = 'fakeId';
const name = 'fakeName';
const options = [{ text: 'cat', value: 'feline' }, { text: 'dog', value: 'canine' }, { text: 'lion', value: 'simba' }];

it('renders the options', () => {
  const { getByLabelText, getAllByRole, getByText } = render(
    <DropDown id={idText} name={name} options={options} label={label} />
  );
  expect(getByLabelText(label)).toBeVisible();

  const optionsRendered = getAllByRole('option');
  expect(optionsRendered.length).toEqual(options.length);

  options.forEach(option => {
    const element = getByText(option.text);
    expect(element).toBeDefined();
    expect(element).toHaveValue(option.value);
  });
});

it('calls the onChange callback when a change occurs', () => {
  const myCallback = jest.fn().mockImplementation(() => {
    console.log('changeHandler mock triggered');
  });
  const { getByLabelText } = render(
    <DropDown id={idText} name={name} options={options} label={label} onChange={myCallback} />
  );
  fireEvent.change(getByLabelText(label), { target: { value: options[1] } });
  expect(myCallback).toHaveBeenCalled();
});
