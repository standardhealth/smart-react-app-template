import React, { FC, useCallback } from 'react';
import Select from 'react-select';

import classes from './DropDown.module.scss';

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
    <div className={classes.dropdown}>
      <label htmlFor={id}>{label}</label>

      <Select
        classNamePrefix="DropDown"
        inputId={id}
        selectValue={selectedValue}
        onChange={onChangeCallback}
        options={options}
        aria-label={label}
      />
    </div>
  );
};

export default DropDown;
