import { Fragment } from 'react';

import Header from './components/Header';
import GlobalStyles from './components/styled/Global';
import MainSlider from './components/MainSlider';

export default function App() {
  return (
    <Fragment>
      <GlobalStyles />
      <Header />
      <div>
        <MainSlider />
      </div>
    </Fragment>
  );
}
