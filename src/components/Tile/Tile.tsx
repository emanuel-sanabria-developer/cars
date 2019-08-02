import * as React from 'react';
import { createBem, combineClassNames } from '../../utils/createBem';

import './Tile.scss';

interface TileProps {
  className?: string;
  children: React.ReactNode;
  dataTestId?: string;
}

const bem = createBem('auto1-Tile');
const Tile = ({ className, children, dataTestId }: TileProps) => (
  <div data-testid={dataTestId} className={combineClassNames(bem(), className)}>
    {children}
  </div>
);

export default Tile;
