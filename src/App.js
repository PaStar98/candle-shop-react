import { Fragment } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';

import GlobalStyles from './components/styled/Global';
import { Layout } from './components/Layout/Layout';
import { ShopPage } from './pages/Shop.page';
import { InfoPage } from './pages/Info.page';
import { AboutPage } from './pages/About.page';
import { ErrorPopup } from './components/Layout/ErrorModule';

export const App = () => {
  return (
    <Fragment>
      <GlobalStyles />
      <Layout>
        <Switch>
          <Route exact path={'/'}>
            <Redirect to={'/shop/candles'} />
          </Route>

          <Route path={'/shop/:categoryID'}>
            <ShopPage />
          </Route>

          <Route path={'/info'}>
            <InfoPage />
          </Route>

          <Route path={'/about'}>
            <AboutPage />
          </Route>
        </Switch>
        <ErrorPopup msg="Płatności nie są aktualnie obsługiwane!" />
      </Layout>
    </Fragment>
  );
};

/* 
TODO: 
  ADD INACTIVE PAY SERVICE OVERLAY, 
  ADD SUCCESSFULL OVERLAY AFTER SENDING MSG VIA CONTACT FORM
  REMOVE REDIRECT TO SHOP WHILE CLICKING HOME NAV ELEMENT
  ADD ANCHOR JUMPS FOR CERTAIN NAVLINKS
  ADD TOTAL ITEM QUANTITY ON TOP RIGHT CART ICON CORNER,
  ADD DECENT ANIMATIONS ON CHANGING PAGES AND INTERACT WITH APP,
  BRING THIS FUCKER TO GITHUB PAGES
*/
