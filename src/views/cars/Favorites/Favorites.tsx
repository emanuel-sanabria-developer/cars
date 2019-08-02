import * as React from 'react';
import { createBem } from '../../../utils/createBem';

import useCarLocalStorage from '../hooks/useCarLocalStorage';
import { LOCAL_STORAGE_KEY } from '../../../constants';

import List from '../../layout/List';
import ButtonLink from '../../../components/ButtonLink';

import './Favorites.scss';

const bem = createBem('auto1-Favorites');
const Favorites = () => {
  const { savedCars, removeFromLocal } = useCarLocalStorage(LOCAL_STORAGE_KEY);

  return (
    <div className={bem()}>
      <h1>My orders</h1>
      {savedCars.length > 0 ? (
        <List cars={savedCars} onRemove={removeFromLocal} />
      ) : (
        <>
          <p className={bem('message')}>You don't have any saved cars. </p>
          <p>
            Go back to the{' '}
            <ButtonLink anchorStyle to="/">
              homepage
            </ButtonLink>{' '}
            and add to your order.
          </p>
        </>
      )}
    </div>
  );
};

export default Favorites;
