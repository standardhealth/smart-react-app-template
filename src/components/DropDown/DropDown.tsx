import React, { FC, useCallback } from 'react';
import Select from 'react-select';

import './DropDown.scss';

interface Props {
  label?: string;
  id: string;
  options: Array<Option>;
  onChange?: (value: Option | ReadonlyArray<Option> | null) => void;
  selectedValue: Option | ReadonlyArray<Option> | null;
}

type Option = {
  label: string;
  value: string;
};

const DropDown: FC<Props> = ({ options, label, id, onChange, selectedValue }: Props) => {
  const onChangeCallback = useCallback(
    (value: Option | ReadonlyArray<Option> | null | undefined) => {
      if (onChange) onChange(value == null ? null : value);
    },
    [onChange]
  );

  return (
    <div className="dropdown">
      <label htmlFor={id}>{label}</label>

      <Select selectValue={selectedValue} onChange={onChangeCallback} options={options} />
    </div>
  );
};

export default DropDown;
