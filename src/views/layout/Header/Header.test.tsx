// ETA: 1 Hour
import * as React from 'react';
import { cleanup } from '@testing-library/react';
import renderWithRouter from '../../../utils/test/renderWithRouter';
import Header from './Header';

beforeEach(cleanup);

describe('<Header />', () => {
  it('should render <Logo />', () => {
    const { getByAltText } = renderWithRouter(<Header />);
    expect(getByAltText('Auto 1')).toBeTruthy();
  });

  it('should render "My Orders" <Link to="/favorites" />', () => {
    const { getByTestId } = renderWithRouter(<Header />);
    const link = getByTestId('favorites');

    expect(link.textContent).toBe('My Orders');
    expect(link.getAttribute('href')).toBe('/favorites');
  });
});
