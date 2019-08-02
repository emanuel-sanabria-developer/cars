import * as React from 'react';
import { cleanup, render, fireEvent } from '@testing-library/react';
import { getAll } from '../../../utils/test/query';
import renderWithRouter from '../../../utils/test/renderWithRouter';
import { cars } from '../../../utils/test/dataSets';
import List, { bem } from './List';
import { Switch, Route, MemoryRouter } from 'react-router';

afterEach(cleanup);

const el = {
  specs: `.${bem('specs')}`,
  item: `.${bem('item')}`
};

describe('<List />', () => {
  // it('should render favorite cars first', () => {
  //   expect(false).toBe(true);
  // });
  it('should render cars manufacturer and model name', () => {
    const { getByText } = renderWithRouter(<List cars={cars} />);
    const carEls = getAll(el.item);

    expect(carEls.length).toBe(10);
    expect(getByText('Audi TT')).toBeDefined();
  });

  it('should render cars stock number, mileage, fuel type and color', () => {
    const { getByText } = renderWithRouter(<List cars={cars} />);
    expect(getByText('Stock # 867 - 1468 km - Petrol - red')).toBeDefined();
  });

  it('when click on "View details" should navigate to show car page', () => {
    const MockComp = () => <div data-testid="showCar" />;
    const { queryByTestId, getAllByTestId } = render(
      <MemoryRouter>
        <div>
          <List cars={cars} />
          <Switch>
            <Route path="/car/867" component={MockComp} />
          </Switch>
        </div>
      </MemoryRouter>
    );

    const link = getAllByTestId('carLink')[0];

    fireEvent.click(link);

    expect(queryByTestId('showCar')).toBeDefined();
  });
});
