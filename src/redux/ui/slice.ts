import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { FONTS } from '@/constants/fonts';
import { IFont } from '@/models/font';
import { RootState } from '../store/store';

interface IUIState {
  darkMode: boolean;
  font: IFont;
}

const initialState: IUIState = {
  darkMode: false,
  font: FONTS[0],
};

const uiSlice = createSlice({
  name: "ui",
  initialState,
  reducers: {
    toggleDarkMode: (state) => {
      state.darkMode = !state.darkMode;
    },
    selectFont: (state, action: PayloadAction<IFont>) => {
      state.font = action.payload;
    },
  },
});
export const { selectFont, toggleDarkMode } = uiSlice.actions;
export const uiSelector = (state: RootState) => state.ui;
export default uiSlice.reducer;
