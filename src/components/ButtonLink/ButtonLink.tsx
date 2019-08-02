import * as React from 'react';
import { createBem, combineClassNames } from '../../utils/createBem';
import { Link, LinkProps } from 'react-router-dom';

import { ButtonProps } from '../Button/Button';

import './ButtonLink.scss';

interface ButtonLinkProps extends ButtonProps {
  to: LinkProps['to'];
}

const bem = createBem('auto1-ButtonLink');
const ButtonLink = ({
  className,
  children,
  anchorStyle,
  disabled,
  to,
  dataTestId
}: ButtonLinkProps) => (
  <Link
    data-testid={dataTestId}
    to={to}
    className={combineClassNames(bem('', { anchorStyle, disabled }), className)}
  >
    {children}
  </Link>
);

export default ButtonLink;
