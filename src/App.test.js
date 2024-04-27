import configureMockStore from "redux-mock-store";
import {
  addItems,
  deleteItem,
  deleteAllItem,
  increseQuantity,
  decreaseQuantity,
  clearInventoryDeleteItems,
} from "./redux/slice/inventorySlice";

const mockStore = configureMockStore([]);

describe("inventory slice", () => {
  it("should add items to inventory", () => {
    const store = mockStore({
      inventory: { inventoryItmes: [], inventoryDeletedItmes: [] },
    });
    const item = { name: "Item1", quantity: 1 };
    store.dispatch(addItems(item));
    const actions = store.getActions();
    expect(actions).toEqual([{ type: "inventory/addItems", payload: item }]);
  });

  it("should delete item from inventory and move it to deleted items", () => {
    const item1 = { name: "Item1", quantity: 1 };
    const item2 = { name: "Item2", quantity: 2 };
    const initialState = {
      inventory: { inventoryItmes: [item1, item2], inventoryDeletedItmes: [] },
    };
    const store = mockStore(initialState);
    store.dispatch(deleteItem(item1));
    const actions = store.getActions();
    expect(actions).toEqual([{ type: "inventory/deleteItem", payload: item1 }]);
  });

  it("should increase quantity of item in inventory", () => {
    const item1 = { name: "Item1", quantity: 1 };
    const initialState = {
      inventory: { inventoryItmes: [item1], inventoryDeletedItmes: [] },
    };
    const store = mockStore(initialState);
    store.dispatch(increseQuantity(0));
    const actions = store.getActions();
    expect(actions).toEqual([
      { type: "inventory/increseQuantity", payload: 0 },
    ]);
  });

  it("should decrease quantity of item in inventory", () => {
    const item1 = { name: "Item1", quantity: 2 };
    const initialState = {
      inventory: { inventoryItmes: [item1], inventoryDeletedItmes: [] },
    };
    const store = mockStore(initialState);
    store.dispatch(decreaseQuantity(0));
    const actions = store.getActions();
    expect(actions).toEqual([
      { type: "inventory/decreaseQuantity", payload: 0 },
    ]);
  });

  it("should clear deleted items from inventory", () => {
    const item1 = { name: "Item1", quantity: 1 };
    const initialState = {
      inventory: { inventoryItmes: [], inventoryDeletedItmes: [item1] },
    };
    const store = mockStore(initialState);
    store.dispatch(clearInventoryDeleteItems());
    const actions = store.getActions();
    expect(actions).toEqual([{ type: "inventory/clearInventoryDeleteItems" }]);
  });
});
