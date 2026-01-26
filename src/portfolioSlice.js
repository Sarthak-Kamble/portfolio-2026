import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isDarkMode: true,
};

export const portfolioSlice = createSlice({
  name: "portfolio",
  initialState,
  reducers: {
    setIsDarkMode: (state, action) => {
      state.isDarkMode = action.payload;
    },
  },
});

export const { setIsDarkMode } = portfolioSlice.actions;

export const selectPortfolioSlice = (state) => state.portfolioMain;

export default portfolioSlice?.reducer;
