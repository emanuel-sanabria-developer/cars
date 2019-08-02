// ETA: 1-2 hours
import * as React from 'react';
import { cleanup } from '@testing-library/react';
import renderWithRouter from '../../utils/test/renderWithRouter';

import Pagination, { PaginationProps } from './Pagination';

afterEach(cleanup);

const defaultProps: PaginationProps = {
  currentPage: 1,
  totalPageCount: 10,
  queryParams: ''
};

describe('<Pagination />', () => {
  it('should render "First" page link', () => {
    const { getByText } = renderWithRouter(<Pagination {...defaultProps} />);
    expect(getByText('First')).toBeTruthy();
  });

  it('should render "Previous" page link', () => {
    const { getByText } = renderWithRouter(<Pagination {...defaultProps} />);
    expect(getByText('Previous')).toBeTruthy();
  });

  it('should render "Page 2 of 10"', () => {
    const { getByText } = renderWithRouter(
      <Pagination {...defaultProps} currentPage={2} />
    );
    expect(getByText('Page 2 of 10')).toBeTruthy();
  });

  it('should render "Next" page link', () => {
    const { getByText } = renderWithRouter(<Pagination {...defaultProps} />);
    expect(getByText('Next')).toBeTruthy();
  });

  it('should render "Last" page link', () => {
    const { getByText } = renderWithRouter(<Pagination {...defaultProps} />);
    expect(getByText('Next')).toBeTruthy();
  });

  describe('on first page', () => {
    it('should disable "First" page link', () => {
      const { getByText } = renderWithRouter(<Pagination {...defaultProps} />);
      const first = getByText('First');
      expect(first.getAttribute('disabled')).toBeDefined();
    });
    it('should disable "Previous" page link', () => {
      const { getByText } = renderWithRouter(<Pagination {...defaultProps} />);
      const prev = getByText('Previous');
      expect(prev.getAttribute('disabled')).toBeDefined();
    });

    it('should enable "Next" page link', () => {
      const { getByText } = renderWithRouter(<Pagination {...defaultProps} />);
      const prev = getByText('Next');
      expect(prev.getAttribute('disabled')).toBe(null);
    });
  });

  describe('on not last page and not first page', () => {
    it('should enable "First" page link', () => {
      const { getByText } = renderWithRouter(
        <Pagination {...defaultProps} currentPage={2} />
      );
      const prev = getByText('First');
      expect(prev.getAttribute('disabled')).toBe(null);
    });
    it('should enable "Previous" page link', () => {
      const { getByText } = renderWithRouter(
        <Pagination {...defaultProps} currentPage={2} />
      );
      const prev = getByText('Previous');
      expect(prev.getAttribute('disabled')).toBe(null);
    });
    it('should enable "Next" page link', () => {
      const { getByText } = renderWithRouter(
        <Pagination {...defaultProps} currentPage={2} />
      );
      const prev = getByText('Next');
      expect(prev.getAttribute('disabled')).toBe(null);
    });
    it('should enable "Last" page link', () => {
      const { getByText } = renderWithRouter(
        <Pagination {...defaultProps} currentPage={2} />
      );
      const prev = getByText('Last');
      expect(prev.getAttribute('disabled')).toBe(null);
    });
  });

  describe('on last page', () => {
    it('should disable "Next" page link', () => {
      const { getByText } = renderWithRouter(
        <Pagination {...defaultProps} currentPage={10} />
      );
      const prev = getByText('Next');

      expect(prev.getAttribute('disabled')).toBeDefined();
    });

    it('should disable "Last" page link', () => {
      const { getByText } = renderWithRouter(
        <Pagination {...defaultProps} currentPage={10} />
      );
      const prev = getByText('Last');

      expect(prev.getAttribute('disabled')).toBeDefined();
    });
  });
});
