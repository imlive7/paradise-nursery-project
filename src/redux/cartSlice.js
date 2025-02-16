// src/redux/cartSlice.js
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  items: {},         // 用对象存储各产品（key 为产品 id）
  totalQuantity: 0,  // 总数量
  totalAmount: 0,    // 总金额
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addItem: (state, action) => {
      const item = action.payload;
      // 如果已存在，直接增加数量；否则添加新项
      if (state.items[item.id]) {
        state.items[item.id].quantity += 1;
      } else {
        state.items[item.id] = { ...item, quantity: 1 };
      }
      state.totalQuantity += 1;
      state.totalAmount += item.price;
    },
    incrementItem: (state, action) => {
      const id = action.payload;
      const item = state.items[id];
      if (item) {
        item.quantity += 1;
        state.totalQuantity += 1;
        state.totalAmount += item.price;
      }
    },
    decrementItem: (state, action) => {
      const id = action.payload;
      const item = state.items[id];
      if (item && item.quantity > 0) {
        item.quantity -= 1;
        state.totalQuantity -= 1;
        state.totalAmount -= item.price;
        if (item.quantity === 0) {
          delete state.items[id];
        }
      }
    },
    deleteItem: (state, action) => {
      const id = action.payload;
      const item = state.items[id];
      if (item) {
        state.totalQuantity -= item.quantity;
        state.totalAmount -= item.price * item.quantity;
        delete state.items[id];
      }
    },
  },
});

export const { addItem, incrementItem, decrementItem, deleteItem } = cartSlice.actions;
export default cartSlice.reducer;
