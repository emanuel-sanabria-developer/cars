import queryString from 'query-string';
import { RouteComponentProps } from 'react-router';
import inRange from 'lodash-es/inRange';
import { IndexProps } from '../Index';

interface FilterQueryParams {
  color: string;
  manufacturer: string;
}

export const getQueryParamsFromProps = (
  props: RouteComponentProps
): FilterQueryParams => {
  const {
    location: { search }
  } = props;
  const queryParams = queryString.parse(search);
  return queryParams ? (queryParams as any) : { color: '', manufacturer: '' };
};

export const getCarRequestParamsFromProps = (
  props: IndexProps,
  totalPageCount?: number
) => {
  const {
    location: { search },
    match: {
      params: { pageNumber }
    }
  } = props;
  const { color, manufacturer } = getQueryParamsFromProps(props);

  let currentPageNumber = 1;
  if (pageNumber !== undefined && totalPageCount !== undefined) {
    currentPageNumber = parseInt(pageNumber, 10);

    if (
      Number.isNaN(currentPageNumber) ||
      !inRange(currentPageNumber, 0, totalPageCount + 1)
    ) {
      currentPageNumber = 1;
    }
  }

  return {
    search,
    color,
    manufacturer,
    page: currentPageNumber
  };
};
