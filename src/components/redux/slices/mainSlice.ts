import { createSlice } from "@reduxjs/toolkit";
import { IItem } from "../../interface";

export interface initialStateInterface {
  items: IItem[],
  filteredItems: IItem[],
  searchValue: string,
  isLoading: boolean,
  itemId: number
}

const initialState:initialStateInterface = {
  items: [],
  filteredItems: [],
  searchValue: "",
  isLoading: true,
  itemId: 0,
};

export const mainSlice = createSlice({
  name: "main",
  initialState,
  reducers: {
    setItems: (state, action) => {
      state.items = action.payload;
      state.filteredItems = action.payload;
    },
    setFilteredItems: (state, action) => {
      state.filteredItems = action.payload;
    },
    setSearchValue: (state, action) => {
      state.searchValue = action.payload;
    },
    setIsLoadingTrue: (state) => {
      state.isLoading = true;
    },
    setIsLoadingFalse: (state) => {
      state.isLoading = false;
    },
    setItemId: (state, action) => {
      state.itemId = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const {
  setItems,
  setFilteredItems,
  setIsLoadingTrue,
  setIsLoadingFalse,
  setSearchValue,
  setItemId,
} = mainSlice.actions;

export default mainSlice.reducer;
