import mock, { delay } from 'xhr-mock';
import { getCars, getCar } from './controllers/cars';
import { getColors } from './controllers/colors';
import { getManufacturers } from './controllers/manufacturers';

// put a delay to show the loading states
mock.setup();
mock.get(/\/api\/cars\/[0-9]/, delay(getCar, 200));
mock.get(/\/api\/cars(.*?)/, delay(getCars, 200));
mock.get(/\/api\/colors/, getColors);
mock.get(/\/api\/manufacturers/, getManufacturers);
