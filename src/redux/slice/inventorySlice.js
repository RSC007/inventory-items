import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  inventoryItmes: [],
  inventoryDeletedItmes: [],
};

const inventorySlice = createSlice({
  name: "inventory",
  initialState,
  reducers: {
    addItems(state, action) {
      state.inventoryItmes.push(action.payload);
    },
    deleteItem(state, action) {
      state.inventoryItmes = state.inventoryItmes.filter(
        (item) => item.name !== action.payload.name
      );
      state.inventoryDeletedItmes.push(action.payload)
    },
    deleteAllItem(state, action) {
      state.inventoryDeletedItmes = [...state.inventoryDeletedItmes, ...state.inventoryItmes];
      state.inventoryItmes = [];
    },
    clearInventoryDeleteItems(state, action) {
      state.inventoryDeletedItmes = []
    },
    increseQuantity(state, action) {
      state.inventoryItmes[action.payload].quantity += 1;
    },
    decreaseQuantity(state, action) {
      if (state.inventoryItmes[action.payload].quantity > 1)
        state.inventoryItmes[action.payload].quantity -= 1;
    },
  },
});

export const {
  addItems,
  deleteItem,
  deleteAllItem,
  increseQuantity,
  decreaseQuantity,
  clearInventoryDeleteItems,
} = inventorySlice.actions;

export const selectedInvetory = (state) => state.inventory;

export default inventorySlice.reducer;
