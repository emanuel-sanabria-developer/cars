import * as React from 'react';
import store from 'store';

import { Car } from '../../../types';

const useCarLocalStorage = (key: string, currentCar?: Car) => {
  const [savedCars, setSavedCars] = React.useState(store.get(key) || []);
  const [currentSaved, setCurrentSaved] = React.useState(false);

  const getSavedCars = React.useCallback(() => store.get(key) || [], [key]);

  const saveToLocal = (newCar: Car) => {
    const savedCars = getSavedCars();
    const existsInArray = savedCars.some(
      (c: Car) => c.stockNumber === newCar.stockNumber
    );

    if (!existsInArray) {
      savedCars.push(newCar);
    }

    store.set(key, savedCars);
    setSavedCars(savedCars);
  };

  const removeFromLocal = (car: Car) => {
    const savedCars = getSavedCars();
    const updatedSavedCars = savedCars.filter((c: Car) => {
      return c.stockNumber !== car.stockNumber;
    });

    store.set(key, updatedSavedCars);
    setSavedCars(updatedSavedCars);
  };

  React.useEffect(() => {
    const isSaved =
      !!currentCar &&
      savedCars.find((c: Car) => c.stockNumber === currentCar.stockNumber);

    setCurrentSaved(isSaved);
  }, [currentCar, savedCars]);

  return {
    savedCars,
    saveToLocal,
    removeFromLocal,
    currentSaved
  };
};

export default useCarLocalStorage;
