import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import DropDown from '../DropDown';

const label = 'drop down options';
const idText = 'fakeId';
const name = 'fakeName';
const options = [
  { label: 'cat', value: 'feline' },
  { label: 'dog', value: 'canine' },
  { label: 'lion', value: 'simba' }
];

describe('<DropDown />', () => {
  it('renders the options', () => {
    const { container, getByLabelText, getByText } = render(
      <DropDown id={idText} name={name} options={options} label={label} />
    );
    expect(getByLabelText(label)).toBeVisible();

    fireEvent.keyDown(getByLabelText(label, { selector: 'input' }), { keyCode: 40 });

    const optionsRendered = container.querySelectorAll('.DropDown__option');
    expect(optionsRendered.length).toEqual(options.length);

    options.forEach(option => {
      expect(getByText(option.label)).toBeDefined();
    });
  });

  it('calls the onChange callback when a change occurs', () => {
    const myCallback = jest.fn();
    const { getByLabelText, getByText } = render(
      <DropDown id={idText} name={name} options={options} label={label} onChange={myCallback} />
    );

    fireEvent.keyDown(getByLabelText(label, { selector: 'input' }), { keyCode: 40 });
    fireEvent.click(getByText('cat'));

    expect(myCallback).toHaveBeenCalledWith({ label: 'cat', value: 'feline' });
  });
});
