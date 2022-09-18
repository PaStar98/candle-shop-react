import { createSlice } from '@reduxjs/toolkit';

const shopSlice = createSlice({
  name: 'shop',
  initialState: {
    items: [],
    totalAmount: 0,
    currentCategoryID: '',
  },
  reducers: {
    cartProductAdd(state, action) {
      const newItem = action.payload;
      const existingItem = state.items.find((el) => el.id === newItem.id);

      if (!existingItem) {
        state.items.push({
          id: newItem.id,
          name: newItem.name,
          price: newItem.price,
          img: newItem.img,
          totalPrice: newItem.price,
          quantity: 1,
        });

        state.totalAmount += newItem.price;
      } else {
        /**
         * @method toFixed()    returns string
         * @method parseFloat() returns float
         * */

        existingItem.totalPrice += newItem.price;
        existingItem.quantity++;

        state.totalAmount += existingItem.price;
      }
    },

    cartProductRemove(state, action) {
      const itemID = action.payload;
      const cartItem = state.items.find((el) => el.id === itemID);

      if (cartItem.quantity === 1) {
        state.items = state.items.filter((el) => itemID !== el.id);
      } else {
        cartItem.quantity--;
        cartItem.totalPrice -= cartItem.price;
      }

      if (!state.items.length) state.totalAmount = 0;
      else state.totalAmount -= cartItem.price;
    },

    setCurrentCategory(state, action) {
      const id = action.payload;
      state.currentCategoryID = id;
      console.log(id);
    },
  },
});

export const { cartProductAdd, setCurrentCategory, cartProductRemove } =
  shopSlice.actions;
export default shopSlice.reducer;
