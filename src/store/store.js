import { configureStore } from '@reduxjs/toolkit';

import shopReducer from './shop-slice';
import uiReducer from './ui-slice';

export const store = configureStore({
  reducer: {
    shop: shopReducer,
    ui: uiReducer,
  },
});
