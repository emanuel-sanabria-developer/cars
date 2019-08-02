// ETA: 30 minutes
import * as React from 'react';
import { render } from '@testing-library/react';
import Footer from './Footer';

describe('<Footer />', () => {
  it('should render "©Auto1 Group 2019"', () => {
    const { findAllByText } = render(<Footer />);
    expect(findAllByText('©Auto1 Group 2019')).toBeTruthy();
  });
});
