import * as React from 'react';
import { createBem } from '../../../utils/createBem';

import './Footer.scss';

const bem = createBem('auto-Footer');
const Footer = () => (
  <div className={bem()} data-testid="footer">
    © AUTO1 Group 2019
  </div>
);

export default Footer;
