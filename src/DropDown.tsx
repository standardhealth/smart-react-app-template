import React from 'react';
import './DropDown.css';

interface Props {
  label?: string;
  id: string;
  name: string;
  options: Array<string>;
}

const DropDown: React.FC<Props> = ({options, label, id, name}: Props) => {
  return(
    <div className='selection'>
      <label htmlFor={id}>{label}</label>
      <select id={id} name={name}>
        {options.map((option) => <option value='s'>{option}</option>)}
      </select>
    </div>
  );
};

export default DropDown;
