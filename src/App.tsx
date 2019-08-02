import * as React from 'react';
import { createBem } from './utils/createBem';
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom';

import lazyImport from './lazyImport';

import Header from './views/layout/Header';
import Footer from './views/layout/Footer';
import ScrollToTop from './components/ScrollTop';
import Spinner from './components/Spinner';

import './App.scss';

const Main = lazyImport('./views/cars/Index');
const Favorites = lazyImport('./views/cars/Favorites');
const Show = lazyImport('./views/cars/Show');
const NotFound = lazyImport('./views/NotFound');

const bem = createBem('auto1-App');
const App = () => {
  return (
    <div className={bem()}>
      <Router>
        <ScrollToTop />
        <Header />
        {/* this is clearly an overkill for such a small app, but just showcasing 
        that I'm familiar with suspense */}
        <React.Suspense fallback={<Spinner />}>
          <Switch>
            <Route path="/favorites" exact component={Favorites} />
            <Route path="/car/:stockNumber" exact component={Show} />
            <Route
              path={['/', '/page/:pageNumber(\\d+)?']}
              exact
              component={Main}
            />
            <Route component={NotFound} />
          </Switch>
        </React.Suspense>
      </Router>
      <Footer />
    </div>
  );
};

export default App;
