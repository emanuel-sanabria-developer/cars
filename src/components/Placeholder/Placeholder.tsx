import * as React from 'react';
import range from 'lodash-es/range';
import { createBem } from '../../utils/createBem';

import Tile from '../Tile';

import './Placeholder.scss';

const bem = createBem('auto1-Placeholder');
const Placeholder = () => (
  <>
    {range(6).map(index => (
      <Tile key={index} className={bem()}>
        <div className={bem('img')} />
        <div className={bem('details')}>
          <div className={bem('detailsMock')} />
          <div className={bem('detailsMock')} />
          <div className={bem('detailsMock')} />
        </div>
      </Tile>
    ))}
  </>
);

export default Placeholder;
