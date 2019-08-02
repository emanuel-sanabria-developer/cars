import * as React from 'react';
import { createBem, combineClassNames } from '../../utils/createBem';

import './Button.scss';

export interface ButtonProps {
  anchorStyle?: boolean;
  className?: string;
  children: React.ReactNode;
  disabled?: boolean;
  dataTestId?: string;
  onClick?(event: React.MouseEvent<HTMLButtonElement>): void;
}

const bem = createBem('auto1-Button');
const ButtonLink = ({
  className,
  children,
  anchorStyle,
  disabled,
  onClick,
  dataTestId
}: ButtonProps) => (
  <button
    className={combineClassNames(bem('', { anchorStyle, disabled }), className)}
    data-testid={dataTestId}
    onClick={onClick}
    type="button"
  >
    {children}
  </button>
);

export default ButtonLink;
