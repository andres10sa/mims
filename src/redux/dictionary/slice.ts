import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IWord } from '@/models/dictionary';
import { fetchDefinitions } from "./actions";
import { RootState } from '../store/store';

interface IDictionaryState {
  definitions: IWord[];
  noData: boolean;
}

const initialState: IDictionaryState = {
  definitions: [],
  noData: false,
};

const dictionarySlice = createSlice({
  name: "counter",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(
      fetchDefinitions.fulfilled,
      (state, action: PayloadAction<IWord[]>) => {
        state.definitions = action.payload;
        state.noData = !action.payload.length;
      }
    );
  },
});


export const dictionarySelector = (state: RootState) => state.dictionary;
export default dictionarySlice.reducer;
