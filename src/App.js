import { Fragment } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';

import GlobalStyles from './components/styled/Global';
import { Layout } from './components/Layout/Layout';
import { ShopPage } from './pages/Shop.page';
import { InfoPage } from './pages/Info.page';
import { AboutPage } from './pages/About.page';

export const App = () => {
  return (
    <Fragment>
      <GlobalStyles />
      <Layout>
        <Switch>
          <Route exact path={'/'}>
            <Redirect to={'/shop/candles'} />
          </Route>

          <Route path={'/shop'}>
            <ShopPage />
          </Route>

          <Route path={'/info'}>
            <InfoPage />
          </Route>

          <Route path={'/about'}>
            <AboutPage />
          </Route>
        </Switch>
      </Layout>
    </Fragment>
  );
};
