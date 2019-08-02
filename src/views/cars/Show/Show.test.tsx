// ETA: 2 hours
import * as React from 'react';
import mockAxios from '../../../utils/test/mockAxios';

import { cleanup, waitForElement } from '@testing-library/react';
// import { flushPromises, getMock } from '../../../utils/test/test';
import renderWithRouter from '../../../utils/test/renderWithRouter';

import Show from './Show';

// this commented code it's how I would actually mock the api functions
// this doesn't work in codesandbox but works perfectly in other env
// https://github.com/codesandbox/codesandbox-client/issues/513
// import * as api from '../../../api';
import { singleCarResponse } from '../../../utils/test/dataSets';

// let mockGetCarByStockNumber: jest.Mock;
// jest.mock('../../../api');

beforeEach(() => {
  mockAxios.onGet('/api/cars/0').reply(200, singleCarResponse.data);
});

afterEach(cleanup);

afterAll(() => {
  mockAxios.reset();
});

const render = () =>
  renderWithRouter(<Show match={{ params: { stockNumber: '0' } }} />);

describe('<Show />', () => {
  it('should redirect to 404 if car is not found', async () => {
    mockAxios.onGet().reply(404, null);

    const { queryByTestId } = render();
    expect(queryByTestId('notFound')).toBeDefined();
  });

  it('should render car manufacturer name', async () => {
    const { getByTestId } = render();

    const carHeading = await waitForElement(() =>
      getByTestId('carDetailsHeading')
    );
    expect(carHeading.textContent).toContain('Audi');
  });

  it('should render car model name', async () => {
    const { getByTestId } = render();

    const carHeading = await waitForElement(() =>
      getByTestId('carDetailsHeading')
    );
    expect(carHeading.textContent).toContain('TT');
  });

  it('should render car stock number', async () => {
    const { getByTestId } = render();

    const carBody = await waitForElement(() => getByTestId('carDetailsBody'));
    expect(carBody.textContent).toContain('Stock # 867');
  });

  it('should render car mileage', async () => {
    const { getByTestId } = render();

    const carBody = await waitForElement(() => getByTestId('carDetailsBody'));
    expect(carBody.textContent).toContain('1468 km');
  });

  it('should render car fuel type', async () => {
    const { getByTestId } = render();

    const carBody = await waitForElement(() => getByTestId('carDetailsBody'));
    expect(carBody.textContent).toContain('Petrol');
  });

  it('should render car color', async () => {
    const { getByTestId } = render();

    const carBody = await waitForElement(() => getByTestId('carDetailsBody'));
    expect(carBody.textContent).toContain('red');
  });

  it('should render "Save" favorites <Button />', async () => {
    const { getByTestId } = render();

    const saveButton = await waitForElement(() => getByTestId('save'));
    expect(saveButton.textContent).toBeDefined();
  });
});
