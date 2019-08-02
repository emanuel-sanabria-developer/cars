import * as React from 'react';
import { createBem, combineClassNames } from '../../../utils/createBem';

import { Car } from '../../../types';

export interface CarDetailsProps {
  car: Car;
  pageLevel?: boolean;
  className?: string;
}

export const bem = createBem('auto1-CarDetails');
const CarDetails = ({ car, pageLevel, className }: CarDetailsProps) => {
  const heading = `${car.manufacturerName} ${car.modelName}`;
  return (
    <div className={combineClassNames(bem(), className)}>
      {pageLevel ? (
        <h1 data-testid="carDetailsHeading">{heading}</h1>
      ) : (
        <h2 data-testid="carDetailsHeading">{heading}</h2>
      )}

      <div data-testid="carDetailsBody">
        {`Stock # ${car.stockNumber} - ${car.mileage.number} ${
          car.mileage.unit
        } - ${car.fuelType} - ${car.color}`}
      </div>
    </div>
  );
};

export default CarDetails;
