import * as React from 'react';
import { createBem } from '../../utils/createBem';

import Logo from '../../components/Logo';
import ButtonLink from '../../components/ButtonLink';

import './NotFound.scss';

const bem = createBem('auto1-NotFound');
const NotFound = () => {
  return (
    <div className={bem()}>
      <div>
        <Logo className={bem('logo')} size="sm" />
        <h1>404 - Not Found</h1>
        <p>Sorry, the page you are looking for does not exist.</p>
        <p>
          You can always go back to the{' '}
          <ButtonLink anchorStyle to="/">
            homepage
          </ButtonLink>
          .
        </p>
      </div>
    </div>
  );
};

export default NotFound;
