import * as React from 'react';
import { RouteComponentProps } from 'react-router-dom';
import { createBem } from '../../../utils/createBem';

import { getAllCars, getColors, getManufacturers } from '../../../api';
import { Car, CarSorting, CarsRequest } from '../../../types';

import Pagination from '../../../components/Pagination';
import Select, { SelectOption } from '../../../components/Select';
import Placeholder from '../../../components/Placeholder';
import List from '../../layout/List';
import NavFilter from '../../layout/NavFilter';

import { getCarRequestParamsFromProps } from './utils/getQueryParams';
import {
  getColorsOptions,
  getManufacturerOptions
} from './utils/filterHelpers';

import './Index.scss';

interface RouterParams {
  pageNumber?: string;
}

export interface IndexProps extends RouteComponentProps<RouterParams> {}

export interface IndexState {
  cars: Car[];
  totalPageCount: number;
  totalCarsCount: number;
  carsStatus: 'error' | 'success' | 'loading';
  sort: CarSorting;
  colorOptions: SelectOption[];
  manufacturerOptions: SelectOption[];
}

// wrote this as a class and Show as a function + hooks to showcase
// that I can deal with both approaches, although
// in a real production scenario I would be prefer to use hooks + function
export const bem = createBem('auto1-Index');
export class Index extends React.Component<IndexProps, IndexState> {
  state: IndexState = {
    cars: [],
    carsStatus: 'loading',
    totalCarsCount: 0,
    totalPageCount: 0,
    sort: 'none',
    colorOptions: [],
    manufacturerOptions: []
  };

  async componentDidMount() {
    try {
      await Promise.all([
        this.loadFilters(),
        this.loadCars(getCarRequestParamsFromProps(this.props, undefined))
      ]);
    } catch (err) {
      this.setState({
        carsStatus: 'error'
      });
    }
  }

  async loadFilters() {
    try {
      const [
        {
          data: { colors }
        },
        {
          data: { manufacturers }
        }
      ] = await Promise.all([getColors(), getManufacturers()]);

      const colorOptions = colors ? getColorsOptions(colors) : [];
      const manufacturerOptions = manufacturers
        ? getManufacturerOptions(manufacturers)
        : [];

      this.setState({
        colorOptions,
        manufacturerOptions
      });
    } catch (err) {}
  }

  async loadCars({ color, manufacturer, page, sort }: CarsRequest) {
    try {
      const {
        data: { cars, totalPageCount, totalCarsCount }
      } = await getAllCars({
        page,
        sort,
        color,
        manufacturer
      });

      this.setState({
        cars,
        totalPageCount,
        totalCarsCount,
        carsStatus: 'success'
      });
    } catch (err) {
      this.setState({
        carsStatus: 'error'
      });
    }
  }

  async componentDidUpdate(prevProps: IndexProps, prevState: IndexState) {
    const { totalPageCount } = this.state;
    const { color, manufacturer, page } = getCarRequestParamsFromProps(
      this.props,
      totalPageCount
    );
    const {
      color: prevColor,
      manufacturer: prevMan,
      page: prevPageNumber
    } = getCarRequestParamsFromProps(prevProps, totalPageCount);
    const { sort } = this.state;

    if (
      prevColor !== color ||
      prevMan !== manufacturer ||
      prevPageNumber !== page ||
      prevState.sort !== sort
    ) {
      this.setState({ carsStatus: 'loading' }, async () => {
        await this.loadCars({
          color,
          manufacturer,
          page,
          sort
        });
      });
    }
  }

  handleSortingChange = (sortBy: CarSorting) => {
    this.setState({ sort: sortBy });
  };

  render() {
    const {
      cars,
      totalPageCount,
      totalCarsCount,
      carsStatus,
      colorOptions,
      sort,
      manufacturerOptions
    } = this.state;
    const { page, color, manufacturer, search } = getCarRequestParamsFromProps(
      this.props,
      totalPageCount
    );

    const carsIsLoading = carsStatus === 'loading';

    return (
      <div className={bem()}>
        <aside className={bem('sidebar')}>
          {colorOptions.length && manufacturerOptions.length ? (
            <NavFilter
              className={bem('navFilter')}
              colorOptions={colorOptions}
              initialColorValue={color}
              initialManufacturerValue={manufacturer}
              manufacturerOptions={manufacturerOptions}
            />
          ) : null}
        </aside>

        <main className={bem('results')}>
          <div>
            <div className={bem('heading')}>
              <div>
                <h2>Available cars</h2>
                <p className={bem('resultCount')}>
                  {carsIsLoading
                    ? 'Loading results...'
                    : `Showing ${cars.length} of ${totalCarsCount} ${
                        totalCarsCount === 1 ? 'result' : 'results'
                      }`}
                </p>
              </div>
              <Select
                id="auto1-sorting"
                dataTestId="sortSelect"
                className={bem('select')}
                disabled={carsIsLoading}
                label="Sort by"
                value={sort}
                options={[
                  { value: 'none', label: 'None' },
                  { value: 'asc', label: 'Mileage - Ascending' },
                  { value: 'desc', label: 'Mileage - Descending' }
                ]}
                onChange={this.handleSortingChange}
              />
            </div>
            <div>
              {carsIsLoading ? <Placeholder /> : null}
              {carsStatus === 'error' ? <div>Error</div> : null}
              {carsStatus === 'success' ? (
                cars.length ? (
                  <List className={bem('list')} cars={cars} />
                ) : (
                  'No results'
                )
              ) : null}
            </div>
          </div>
          <Pagination
            queryParams={search}
            currentPage={page}
            totalPageCount={totalPageCount}
          />
        </main>
      </div>
    );
  }
}

export default Index;
