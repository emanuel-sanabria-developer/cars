import axios, { AxiosResponse } from 'axios';
import queryString from 'query-string';

import {
  CarsResponse,
  CarsRequest,
  SingleCarResponse,
  CarManufacturerResponse,
  CarColorsResponse
} from './types';

export const getAllCars = async (
  params?: CarsRequest
): Promise<AxiosResponse<CarsResponse>> => {
  const stringifiedParams = params ? queryString.stringify(params) : '';
  const url = `/api/cars?${stringifiedParams}`;
  return await axios({
    url
  });
};

export const getCarByStockNumber = async (
  stockNumber: string
): Promise<AxiosResponse<SingleCarResponse>> =>
  await axios({ url: `/api/cars/${stockNumber}` });

export const getColors = async (): Promise<AxiosResponse<CarColorsResponse>> =>
  await axios({ url: `/api/colors` });
export const getManufacturers = async (): Promise<
  AxiosResponse<CarManufacturerResponse>
> => await axios({ url: '/api/manufacturers' });
