// ETA: 2 hours
import * as React from 'react';
import { cleanup, fireEvent } from '@testing-library/react';
import { get } from '../../../utils/test/query';
import renderWithRouter from '../../../utils/test/renderWithRouter';

import NavFilter, { bem, NavFilterProps } from './NavFilter';

const defaultProps: NavFilterProps = {
  colorOptions: [
    {
      value: '',
      label: 'All car colors'
    },
    {
      value: 'black',
      label: 'Black'
    }
  ],
  manufacturerOptions: [
    {
      value: '',
      label: 'All car manufacturers'
    },
    {
      value: 'bmw',
      label: 'BMW'
    }
  ]
};

const el = {
  button: `.${bem('button')}`
};

afterEach(cleanup);

describe('<NavFilter />', () => {
  it('should render "Color" label', () => {
    const { getByText } = renderWithRouter(<NavFilter {...defaultProps} />);
    expect(getByText('Color')).toBeTruthy();
  });
  it('should render colors <Select />', () => {
    renderWithRouter(<NavFilter {...defaultProps} />);
    const select = get('#auto1-filter-color');
    expect(select).toBeTruthy();
    expect(select.childNodes.length).toBe(2);
    expect(select.textContent).toBe('All car colorsBlack');
  });
  it('should render "Manufacturer" label', () => {
    const { getByText } = renderWithRouter(<NavFilter {...defaultProps} />);
    expect(getByText('Manufacturer')).toBeTruthy();
  });
  it('should render manufacturers <Select />', () => {
    renderWithRouter(<NavFilter {...defaultProps} />);
    const select = get('#auto1-filter-manufacturer');
    expect(select).toBeTruthy();
    expect(select.childNodes.length).toBe(2);
    expect(select.textContent).toBe('All car manufacturersBMW');
  });
  it('should render "Filter" <ButtonLink />', () => {
    renderWithRouter(<NavFilter {...defaultProps} />);
    const button = get(el.button);
    expect(button).toBeTruthy();
    expect(button.textContent).toBe('Filter');
  });

  it('should change address bar to selected values on "Filter" press', () => {
    /* Valid combinations:
     ?color=black
     ?manufacturer=BMW
     ?color=
     ?manufacturer=
     ?
    */

    renderWithRouter(<NavFilter {...defaultProps} />);

    const button = get(el.button);
    const selectMan = get('#auto1-filter-manufacturer');
    const selectColor = get('#auto1-filter-color');

    expect(button.getAttribute('href')).toBe('/');

    fireEvent.change(selectColor, { target: { value: 'black' } });
    expect(button.getAttribute('href')).toBe('/?color=black');

    fireEvent.change(selectColor, { target: { value: 'none' } });
    fireEvent.change(selectMan, { target: { value: 'bmw' } });
    expect(button.getAttribute('href')).toBe('/?color=&manufacturer=bmw');

    // fireEvent.change(selectColor, { target: { value: "" } });
    // fireEvent.change(selectMan, { target: { value: "" } });
    // expect(button.getAttribute("href")).toBe("/?color=&manufacturer=");

    // fireEvent.change(selectColor, { target: { value: "" } });
    // fireEvent.change(selectMan, { target: { value: "bmw" } });
    // expect(button.getAttribute("href")).toBe("/?color=&manufacturer=bmw");

    // fireEvent.change(selectColor, { target: { value: "black" } });
    // fireEvent.change(selectMan, { target: { value: "" } });
    // expect(button.getAttribute("href")).toBe("/?color=black&manufacturer=");

    // fireEvent.change(selectColor, { target: { value: "black" } });
    // fireEvent.change(selectMan, { target: { value: "bmw" } });
    // expect(button.getAttribute("href")).toBe("/?color=black&manufacturer=bmw");
  });
});
