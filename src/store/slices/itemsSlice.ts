import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const fetchItems = createAsyncThunk("items/fetchItems", async () => {
  const response = await fetch(
    "https://jsonplaceholder.typicode.com/posts?_limit=5"
  );
  return await response.json();
});

interface Item {
  id: number;
  title: string;
}

interface ItemsState {
  items: Item[];
  status: "idle" | "loading" | "succeeded" | "failed";
  error: string | null;
}

const initialState: ItemsState = {
  items: [],
  status: "idle",
  error: null,
};

const itemsSlice = createSlice({
  name: "items",
  initialState,
  reducers: {
    addItem(state, action) {
      state.items.push(action.payload);
    },
    removeItem(state, action) {
      state.items = state.items.filter((item) => item.id !== action.payload);
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchItems.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchItems.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.items = action.payload;
      })
      .addCase(fetchItems.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message || "Failed to fetch items";
      });
  },
});

export const { addItem, removeItem } = itemsSlice.actions;
export default itemsSlice.reducer;
