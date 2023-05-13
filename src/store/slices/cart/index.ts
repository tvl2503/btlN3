import { createSlice } from '@reduxjs/toolkit';
import { isArray, isEmpty } from 'lodash';
import { CartItem } from '../../../models/cart';

interface CartState {
  cart: Array<CartItem>
};

const initialState: CartState = {
  cart: [],
};
const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    removeCart(state) {
      state.cart = [];
    },
    setCart(state, action) {
      const payload = action.payload;
      if (!isArray(payload) || isEmpty(payload)) {
        return;
      }
      state.cart = [...payload];
    },
    deleteItem(state, action) {
      const { id, quantity } = action.payload || {};
      if (!id || !quantity) {
        return;
      }
      const cart = [...state.cart];
      const idx = cart.findIndex(item => item?.product?._id === id);
      if (idx === -1) {
        return;
      }
      const quantityProd = cart[idx].quantity;
      if (!quantityProd) {
        return;
      }
      const nextQuantity = quantityProd - quantity;
      if (nextQuantity === 0) {
        cart.splice(idx, 1);
      } else {
        cart[idx].quantity -= quantity;
      }
      state.cart = cart;
    },
    addItem(state, action) {
      const { data, quantity } = action.payload || {};
      if (isEmpty(data) || !quantity) {
        return;
      }
      const payload = [...state.cart];
      const idx = payload.findIndex(item => item?.product?._id === data?._id);
      if (idx === -1) {
        const cartItem: CartItem = {
          product: data,
          quantity
        };
        state.cart.push(cartItem);
      } else {
        payload[idx].quantity += quantity;
        state.cart = payload;
      }
    },
  },
});

export const cartActions = cartSlice.actions;
export const cartReducer = cartSlice.reducer;

export default cartSlice;
