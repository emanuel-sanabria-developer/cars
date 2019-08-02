import * as React from 'react';
import queryString from 'query-string';

import { createBem, combineClassNames } from '../../../utils/createBem';

import Select, { SelectOption } from '../../../components/Select/Select';
import Tile from '../../../components/Tile';
import ButtonLink from '../../../components/ButtonLink';

import './NavFilter.scss';

export interface NavFilterProps {
  className?: string;
  initialColorValue?: string;
  initialManufacturerValue?: string;
  colorOptions: SelectOption[];
  manufacturerOptions: SelectOption[];
}

export const bem = createBem('auto1-NavFilter');
export const NavFilter = ({
  className,
  initialColorValue,
  initialManufacturerValue,
  colorOptions,
  manufacturerOptions
}: NavFilterProps) => {
  const [color, setColor] = React.useState(initialColorValue);
  const [manufacturer, setManufacturer] = React.useState(
    initialManufacturerValue
  );

  const filterParams = queryString.stringify({ color, manufacturer });

  return (
    <Tile
      className={combineClassNames(bem(), className)}
      dataTestId="navFilter"
    >
      <Select
        id="auto1-filter-color"
        label="Color"
        value={color}
        options={colorOptions}
        onChange={setColor}
      />
      <Select
        className={bem('manufacturerSelect')}
        id="auto1-filter-manufacturer"
        label="Manufacturer"
        value={manufacturer}
        options={manufacturerOptions}
        onChange={setManufacturer}
      />
      <ButtonLink to={`/?${filterParams}`} className={bem('button')}>
        Filter
      </ButtonLink>
    </Tile>
  );
};

export default NavFilter;
