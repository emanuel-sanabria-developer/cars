import * as React from 'react';
import mockAxios from '../../../utils/test/mockAxios';

import { cleanup, waitForElement } from '@testing-library/react';

// import { flushPromises } from '../../../utils/test/test';
import renderWithRouter from '../../../utils/test/renderWithRouter';
import {
  carsResponse,
  colors,
  manufacturers
} from '../../../utils/test/dataSets';

// import { getAllCars } from '../../../api';

import Index from './Index';

// this commented code it's how I would actually mock the api functions
// this doesn't work in codesandbox but works perfectly in other env
// https://github.com/codesandbox/codesandbox-client/issues/513
// jest.mock('../../../api');
// let mockGetAllCars: jest.Mock;

beforeEach(() => {
  mockAxios.onGet('/api/colors').reply(200, colors);
  mockAxios.onGet('/api/manufacturers').reply(200, manufacturers);
  mockAxios.onGet('/api/cars?page=1').reply(200, carsResponse.data);
});

afterEach(cleanup);

afterAll(() => {
  mockAxios.reset();
});

// const load = async () => {
//   await flushPromises();
// };

const render = () =>
  renderWithRouter(
    <Index match={{ params: { pageNumber: '1' } }} location={{ search: '' }} />
  );

describe('<Index />', () => {
  it('should not render Welcome!', () => {
    const { queryByText } = render();
    expect(queryByText('Welcome')).toBeNull();
  });

  it('should render <NavFilter />', async () => {
    const { getByTestId } = render();
    const navFilter = await waitForElement(() => getByTestId('navFilter'));
    expect(navFilter).toBeDefined();
  });

  it('should render sort <Select /> by manufacturer or color', async () => {
    const { getByTestId } = render();
    const select = await waitForElement(() => getByTestId('sortSelect'));
    expect(select).toBeDefined();
  });

  it('should render "10 of 100 results"', async () => {
    const { getByText } = render();
    const result = await waitForElement(() =>
      getByText('Showing 10 of 14 results')
    );

    expect(result).toBeDefined();
  });

  it('should render <List /> of cars', async () => {
    const { getByTestId } = render();
    const list = await waitForElement(() => getByTestId('list'));

    expect(list).toBeDefined();
  });

  // I would test this using Visual Regression tests or browser based test
  // describe('should stick elements on scroll or resize', () => {
  //   it('should stick <Header /> always on top', () => {
  //     expect(false).toBe(true);
  //   });
  //   it('should stick <FilterNav /> always on left top side', () => {
  //     expect(false).toBe(true);
  //   });
  // });
});
