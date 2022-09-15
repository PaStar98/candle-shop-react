import { createSlice } from '@reduxjs/toolkit';

const shopSlice = createSlice({
  name: 'shop',
  initialState: { currentCategoryID: '' },
  reducers: {
    setCurrentCategory(state, action) {
      const id = action.payload;
      state.currentCategoryID = id;
      console.log(id);
    },
  },
});

export const { setCurrentCategory } = shopSlice.actions;
export default shopSlice.reducer;
