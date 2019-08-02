import * as React from 'react';
import { createBem, combineClassNames } from '../../utils/createBem';

import './Select.scss';

export interface SelectOption {
  label: string;
  value: string;
  disabled?: boolean;
}

interface SelectProps {
  id: string;
  value: string;
  label: React.ReactNode;
  options: SelectOption[];
  className?: string;
  disabled?: boolean;
  dataTestId?: string;
  onChange?(value: string): void;
}

const bem = createBem('auto1-Select');
const Select = ({
  className,
  options,
  onChange,
  disabled,
  value,
  id,
  label,
  dataTestId
}: SelectProps) => (
  <div className={combineClassNames(bem(), className)} data-testid={dataTestId}>
    <label htmlFor={id} className={bem('label')}>
      {label}
    </label>
    <select
      disabled={disabled}
      id={id}
      value={value}
      className={bem('input')}
      onChange={(e: React.ChangeEvent<HTMLSelectElement>) => {
        if (onChange) {
          onChange(e.target.value);
        }
      }}
    >
      {options.map(({ value, label }) => (
        <option key={value} value={value}>
          {label}
        </option>
      ))}
    </select>
  </div>
);

export default Select;
