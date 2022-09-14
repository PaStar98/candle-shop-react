import { createSlice } from '@reduxjs/toolkit';

const shopSlice = createSlice({
  name: 'shop',
  initialState: { whichID: '' },
  reducers: {
    getID(state, action) {
      const id = action.payload;
      state.whichID = id;
      console.log(id);
    },
  },
});

export const { getID } = shopSlice.actions;
export default shopSlice.reducer;
