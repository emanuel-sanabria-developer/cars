export interface Car {
  stockNumber: number | string;
  manufacturerName: string;
  modelName: string;
  color: string;
  mileage: {
    number: number;
    unit: string;
  };
  fuelType: string;
  pictureUrl: string;
}

export type CarSorting = 'asc' | 'desc' | 'none';

export interface CarsRequest {
  page: number;
  sort?: CarSorting;
  manufacturer?: string;
  color?: string;
}

export interface CarsResponse {
  cars: Car[];
  totalPageCount: number;
  totalCarsCount: number;
}

export interface CarManufacturer {
  uuid: string;
  name: string;
  models: CarManufacturer;
}

export interface CarManufacturerResponse {
  manufacturers: CarManufacturer[];
}

export interface SingleCarResponse {
  car: Car;
}

export interface CarColorsResponse {
  colors: string[];
}
