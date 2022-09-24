import { createSlice } from '@reduxjs/toolkit';

const uiSlice = createSlice({
  name: 'ui',
  initialState: {
    errorPopup: false,
  },
  reducers: {
    enablePopup(state) {
      state.errorPopup = !state.errorPopup;
    },

    disablePopup(state) {
      state.errorPopup = false;
    },
  },
});

export const { enablePopup, disablePopup } = uiSlice.actions;
export default uiSlice.reducer;
