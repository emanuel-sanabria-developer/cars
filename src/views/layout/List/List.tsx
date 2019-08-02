// Component which renders list of items, e.g. car list
import * as React from 'react';

import { createBem } from '../../../utils/createBem';
import { Car } from '../../../types';

import CarDetails from '../../cars/CarDetails';
import ButtonLink from '../../../components/ButtonLink';
import Button from '../../../components/Button';
import Tile from '../../../components/Tile';

import './List.scss';

interface ListProps {
  cars: Car[];
  onRemove?(car: Car): void;
  className?: string;
}

export const bem = createBem('auto-List');
const List = ({ cars, onRemove }: ListProps) => (
  <div className={bem()} data-testid="list">
    {cars.map(car => (
      <Tile
        className={bem('item')}
        key={`${car.stockNumber}- ${car.modelName}`}
      >
        <div className={bem('imgWrapper')}>
          <div className={bem('imgContent')}>
            <img
              className={bem('img')}
              src={car.pictureUrl}
              alt={car.modelName}
            />
          </div>
        </div>
        <div className={bem('specsWrapper')}>
          <CarDetails className={bem('specs')} car={car} />
          <ButtonLink
            dataTestId="carLink"
            anchorStyle
            key={car.stockNumber}
            to={`/car/${car.stockNumber}`}
          >
            View details
          </ButtonLink>
          {onRemove ? (
            <Button className={bem('remove')} onClick={() => onRemove(car)}>
              Remove
            </Button>
          ) : null}
        </div>
      </Tile>
    ))}
  </div>
);

export default List;
