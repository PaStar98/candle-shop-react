import { createSlice } from '@reduxjs/toolkit';

const shopSlice = createSlice({
  name: 'shop',
  initialState: { items: [], totalQuantity: 0, currentCategoryID: '' },
  reducers: {
    cartProductAdd(state, action) {
      const newItem = {
        id: action.payload.id,
        name: action.payload.name,
        price: action.payload.price,
        img: action.payload.img,
        totalPrice: action.payload.price,
        quantity: 1,
      };
      state.items.push(newItem);
      console.log(state.items);

      state.totalQuantity++;

      console.log(newItem);
    },

    setCurrentCategory(state, action) {
      const id = action.payload;
      state.currentCategoryID = id;
      console.log(id);
    },
  },
});

export const { cartProductAdd, setCurrentCategory } = shopSlice.actions;
export default shopSlice.reducer;
