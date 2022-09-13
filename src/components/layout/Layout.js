import { Fragment } from 'react';

import { Header } from './Header';
import { MainSlider } from './MainSlider';

export const Layout = ({ children }) => {
  return (
    <Fragment>
      <Header />
      <MainSlider />
      <main>{children}</main>
    </Fragment>
  );
};
