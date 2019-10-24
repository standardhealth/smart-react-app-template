import React, {ChangeEvent} from 'react';
import './DropDown.scss';

interface Props {
  label?: string;
  id: string;
  name: string;
  options: Array<Options>;
  onChange?: OnChangeCallback;
}

interface Options {
  value: string;
  text: string;
}

interface OnChangeCallback {
  (event: ChangeEvent<HTMLSelectElement>): void;
}

const DropDown: React.FC<Props> = ({options, label, id, name, onChange}: Props) => {
  return(
    <div className='selection'>
      <label htmlFor={id}>{label}</label>
      <select id={id} name={name} onChange={onChange}>
        {options.map((option, index) => <option value={option.value}
                                                key={index}>{option.text}</option>)}
      </select>
    </div>
  );
};

export default DropDown;
