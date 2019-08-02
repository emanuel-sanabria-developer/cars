import * as React from 'react';
import { Link } from 'react-router-dom';

import { createBem } from '../../../utils/createBem';

import Logo from '../../../components/Logo';
import ButtonLink from '../../../components/ButtonLink';

import './Header.scss';

const bem = createBem('auto-Header');
const Header = () => {
  return (
    <div className={bem()} data-testid="header">
      <div className={bem('inner')}>
        <Link to="/">
          <Logo className={bem('logo')} size="sm" />
        </Link>
        <nav className={bem('nav')}>
          <ButtonLink anchorStyle to="/" className={bem('link')}>
            Purchase
          </ButtonLink>
          <ButtonLink
            anchorStyle
            to="/favorites"
            dataTestId="favorites"
            className={bem('link')}
          >
            My Orders
          </ButtonLink>
          <ButtonLink anchorStyle to="/users/" className={bem('link')}>
            Sell
          </ButtonLink>
        </nav>
      </div>
    </div>
  );
};

export default Header;
