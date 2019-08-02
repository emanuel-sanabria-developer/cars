import capitalize from 'lodash-es/capitalize';
import { CarManufacturer } from '../../../../types';

export const getColorsOptions = (colors: string[]) =>
  [
    {
      label: 'All car colors',
      value: ''
    }
  ].concat(
    colors.map(color => ({
      value: color,
      label: capitalize(color)
    }))
  );

export const getManufacturerOptions = (ms: CarManufacturer[]) =>
  [
    {
      label: 'All car manufacturers',
      value: ''
    }
  ].concat(
    ms.map(m => ({
      value: m.name,
      label: m.name
    }))
  );
