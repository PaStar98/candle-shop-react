import { createSlice } from '@reduxjs/toolkit';

const uiSlice = createSlice({
  name: 'ui',
  initialState: {
    errorPopup: false,
    animation: false,
  },
  reducers: {
    enablePopup(state) {
      state.errorPopup = !state.errorPopup;
    },
    disablePopup(state) {
      state.errorPopup = false;
    },

    setAnimation(state) {
      state.animation = !state.animation;
    },
  },
});

export const { enablePopup, disablePopup, setAnimation } = uiSlice.actions;
export default uiSlice.reducer;
