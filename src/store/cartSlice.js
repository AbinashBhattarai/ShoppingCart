import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice(
  {
    name: "cart",
  initialState: {cart: []},
    reducers: {
      addCart: (state, action) => {
        state.cart.push({...action.payload, quantity: 1})
      },
      removeCart: (state, action) => {
        state.cart = state.cart.filter((item) => item.id !== action.payload)
      },
      addCartQuantity: (state, action) => {
        state.cart = state.cart.map((item) => item.id !== action.payload ? item : {...item, quantity: item.quantity+1})
      },
      removeCartQuantity: (state, action) => {
        state.cart = state.cart.map((item) => item.id !== action.payload ? item : {...item, quantity: item.quantity>1 ? item.quantity-1 : item.quantity})
      },
    }
  }
)

export const {addCart, removeCart, addCartQuantity, removeCartQuantity} = cartSlice.actions;
export default cartSlice.reducer;