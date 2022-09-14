import { Fragment } from 'react';

import { Header } from './Header';
import { MainSlider } from './MainSlider';
import { Footer } from './Footer';

export const Layout = ({ children }) => {
  return (
    <Fragment>
      <Header />
      <MainSlider />
      <main>{children}</main>
      <Footer />
    </Fragment>
  );
};
