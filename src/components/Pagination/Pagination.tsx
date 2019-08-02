import * as React from 'react';
import { createBem } from '../../utils/createBem';

import Button from '../ButtonLink';

import './Pagination.scss';

const createGetPath = (path: string, queryParams: string) => (param: string) =>
  `${path}/${param}${queryParams}`;

export interface PaginationProps {
  currentPage: number;
  totalPageCount: number;
  queryParams: string;
}

export const bem = createBem('auto1-Pagination');
const Pagination = ({
  currentPage,
  totalPageCount,
  queryParams
}: PaginationProps) => {
  const isFirstPage = currentPage === 1;
  const isLastPage = currentPage === totalPageCount;
  const getPath = createGetPath('/page', queryParams);

  return (
    <div className={bem()}>
      <Button
        anchorStyle
        className={bem('button')}
        disabled={isFirstPage}
        to={getPath('1')}
      >
        First
      </Button>
      <Button
        anchorStyle
        className={bem('button')}
        disabled={isFirstPage}
        to={getPath(`${currentPage - 1}`)}
      >
        Previous
      </Button>

      <div
        className={bem('display')}
      >{`Page ${currentPage} of ${totalPageCount}`}</div>

      <Button
        anchorStyle
        className={bem('button')}
        disabled={isLastPage}
        to={getPath(`${currentPage + 1}`)}
      >
        Next
      </Button>
      <Button
        anchorStyle
        className={bem('button')}
        disabled={isLastPage}
        to={getPath(`${totalPageCount}`)}
      >
        Last
      </Button>
    </div>
  );
};

export default Pagination;
