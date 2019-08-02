import * as React from 'react';
import { RouteComponentProps } from 'react-router-dom';
import { createBem } from '../../../utils/createBem';

import { Car } from '../../../types';

import useCarLocalStorage from '../hooks/useCarLocalStorage';
import { getCarByStockNumber } from '../../../api';
import { LOCAL_STORAGE_KEY } from '../../../constants';

import CarDetails from '../CarDetails';
import NotFound from '../../NotFound';
import Tile from '../../../components/Tile';
import Button from '../../../components/Button';
import ButtonLink from '../../../components/ButtonLink';
import Spinner from '../../../components/Spinner';

import './Show.scss';

export interface ShowProps
  extends RouteComponentProps<{ stockNumber?: string }> {}

const bem = createBem('auto1-Show');
const Show = ({
  match: {
    params: { stockNumber }
  }
}: ShowProps) => {
  const [status, setStatus] = React.useState<'loading' | 'error' | 'success'>(
    'loading'
  );
  const [currentCar, setCurrentCar] = React.useState<Car | undefined>();
  const { saveToLocal, removeFromLocal, currentSaved } = useCarLocalStorage(
    LOCAL_STORAGE_KEY,
    currentCar
  );

  const updateSaved = React.useCallback(() => {
    if (currentCar) {
      if (currentSaved) {
        removeFromLocal(currentCar);
      } else {
        saveToLocal(currentCar);
      }
    }
  }, [currentCar, saveToLocal, removeFromLocal, currentSaved]);

  React.useEffect(() => {
    const fetchData = async () => {
      if (stockNumber !== undefined) {
        try {
          const {
            data: { car }
          } = await getCarByStockNumber(stockNumber);

          setCurrentCar(car);
          setStatus(car ? 'success' : 'error');
        } catch (error) {
          setStatus('error');
        }
      }
    };

    fetchData();
  }, [stockNumber]);

  if (status === 'loading') {
    return <Spinner />;
  }

  return (
    <div className={bem()}>
      {status === 'success' ? (
        <>
          <div className={bem('imageContainer')} />
          <div className={bem('detailsContainer')}>
            <div className={bem('detailsContent')}>
              {currentCar ? (
                <CarDetails
                  car={currentCar}
                  pageLevel
                  className={bem('specs')}
                />
              ) : null}
              <p>
                This car is currently available and can be delivered as soon as
                tomorrow morning. Please be aware that delivery times shown in
                this page are not definitive and may change due to bad weather
                conditions.
              </p>
            </div>
            <Tile className={bem('saveContainer')}>
              {currentSaved ? (
                <p>
                  Saved to{' '}
                  <ButtonLink anchorStyle to="/favorites">
                    my orders
                  </ButtonLink>{' '}
                </p>
              ) : (
                <p>
                  If you like this car, click the button and save it in your
                  collection of favourite items.
                </p>
              )}

              <Button dataTestId="save" onClick={updateSaved}>
                {currentSaved ? 'Remove' : 'Save'}
              </Button>
            </Tile>
          </div>
        </>
      ) : (
        <NotFound />
      )}
    </div>
  );
};

export default Show;
