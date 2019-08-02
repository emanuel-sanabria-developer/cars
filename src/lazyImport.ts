import * as React from 'react';

const lazyImport = (filename: string) =>
  React.lazy(() => import(`${filename}`));

export default lazyImport;
