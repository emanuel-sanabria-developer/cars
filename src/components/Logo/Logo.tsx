import * as React from 'react';
import { createBem, combineClassNames } from '../../utils/createBem';

import './Logo.scss';

interface LogoProps {
  className?: string;
  size?: 'sm' | 'md';
}

const bem = createBem('auto1-Logo');
const Logo = ({ className, size = 'md' }: LogoProps) => (
  <img
    className={combineClassNames(bem('', { [size]: true }), className)}
    src="/images/logo.png"
    alt="Auto 1"
  />
);

export default Logo;
