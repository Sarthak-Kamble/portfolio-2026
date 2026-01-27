import { createSlice } from "@reduxjs/toolkit";
import { getLocal, setLocal } from "./utils/helpers";

let initialTheme = getLocal("theme");
if (!initialTheme) {
  initialTheme = "Dark";
  setLocal("theme", "Dark");
}

const initialState = {
  theme: initialTheme,
};

export const portfolioSlice = createSlice({
  name: "portfolio",
  initialState,
  reducers: {
    setTheme: (state, action) => {
      state.theme = action.payload;
      setLocal("theme", action.payload);
    },
  },
});

export const { setTheme } = portfolioSlice.actions;

export const selectPortfolioSlice = (state) => state.portfolioMain;

export default portfolioSlice?.reducer;
