import { Fragment } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';

import { ShopPage } from './pages/Shop.page';

import GlobalStyles from './components/styled/Global';
import { Layout } from './components/Layout/Layout';

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
        </Switch>
      </Layout>
    </Fragment>
  );
};
