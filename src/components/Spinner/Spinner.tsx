import * as React from 'react';
import { createBem } from '../../utils/createBem';

import './Spinner.scss';

const bem = createBem('auto1-Spinner');
const Spinner = () => (
  <div className={bem()}>
    <div className={bem('line')} />
    <div className={bem('line')} />
    <div className={bem('line')} />
    <div className={bem('line')} />
  </div>
);

export default Spinner;
