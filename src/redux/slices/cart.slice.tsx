import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../store';

type CartStateType = {
  items: CartItem[];
  count: number;
};
// Define the initial state for the slice
const initialState: CartStateType = {
  items: [],
  count: 0
};

export const cartReducer = createSlice({
  // Name of the slice
  name: 'cart',
  initialState,
  // Functions that update the initialState are written inside the reducers object
  reducers: {
    // This function updates the board name when called
    addCartItem: (state, action: PayloadAction<Product>) => {
      const item = state.items.find((p) => p.id === action.payload.id);
      if (item) {
        item.quantity += 1;
      } else {
        state.items.push({ ...action.payload, quantity: 1 });
        state.count += 1;
      }
    },

    removeCartItem: (state, action: PayloadAction<CartItem>) => {
      state.items = state.items.filter((item) => item.id !== action.payload.id);
      state.count -= 1;
    },

    createOrder: (state, action: PayloadAction<Order>) => {
      if (action.payload.paymentId) {
        state.items = [];
        state.count = 0;
      }
    }
  }
});

// Export the functions defined inside the reducers here
export const { addCartItem, removeCartItem, createOrder } = cartReducer.actions;

// Selector function to retrieve the current board name from the state
export const getCartSelector = (state: RootState) => state.cart;
export const getCartTotal = (state: RootState) =>
  state.cart.items.reduce((prev, current) => {
    return prev + current.price * current.quantity;
  }, 0);

// Export the reducer for use in the Redux store
export default cartReducer.reducer;
