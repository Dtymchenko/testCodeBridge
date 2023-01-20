import { createSlice } from "@reduxjs/toolkit";
import { IItem } from "../../interface";

export interface initialState {
  items: IItem[],
  searchValue: string,
  isLoading: boolean,
}

const initialState:initialState = {
  items: [],
  searchValue: "",
  isLoading: true,
};

export const mainSlice = createSlice({
  name: "main",
  initialState,
  reducers: {
    setItems: (state, action) => {
      state.items = action.payload;
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
  },
});

// Action creators are generated for each case reducer function
export const {
  setItems,
  setIsLoadingTrue,
  setIsLoadingFalse,
  setSearchValue,
} = mainSlice.actions;

export default mainSlice.reducer;
