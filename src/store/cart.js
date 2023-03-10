import { createSlice } from '@reduxjs/toolkit';

const cartInitialState = {
  items: [],
  quantity: 0
}

const cartSlice = createSlice({
  name: 'cart',
  initialState: cartInitialState,
  reducers: {
    updateCart(state, action) {
      state.items = action.payload.items;
      state.quantity = action.payload.quantity;
    },
    addItem(state, action) {
      state.quantity++;
      const newItem = action.payload;
      const existingItem = state.items.find(item => item.id === newItem.id);
      if (!existingItem) {
        state.items.push({
          id: newItem.id,
          price: newItem.price,
          quantity: 1,
          totalPrice: newItem.price,
          title: newItem.title
        });
      } else {
        existingItem.quantity++;
        existingItem.totalPrice += newItem.price;
      }
    },
    removeItem(state, action) {
      state.quantity--;
      const id = action.payload;
      const existingItem = state.items.find(item => item.id === id);
      if (existingItem.quantity === 1) {
        state.items = state.items.filter(item => item.id !== id);
      } else {
        existingItem.quantity--;
        existingItem.totalPrice -= existingItem.price;
      }
    }
  }
});


export const cartActions = cartSlice.actions;
export default cartSlice.reducer;
