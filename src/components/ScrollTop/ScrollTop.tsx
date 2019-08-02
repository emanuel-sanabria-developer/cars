import { useEffect } from 'react';
import { withRouter, RouteComponentProps } from 'react-router-dom';

interface ScrollToTopProps {}

const ScrollToTop = ({
  location: { pathname, search }
}: ScrollToTopProps & RouteComponentProps) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname, search]);

  return null;
};

export default withRouter(ScrollToTop);
