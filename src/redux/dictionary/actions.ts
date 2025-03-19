import { createAsyncThunk } from "@reduxjs/toolkit";
import { IWord } from "@/models/dictionary";

 async function getDefinitions(word: string): Promise<IWord[]> {
   const response = await fetch(
     `${process.env.NEXT_PUBLIC_DICTIONARY_API_URL}/${word}`
   );
   const data = await response.json();
   return data;
 }

export const fetchDefinitions = createAsyncThunk<
  IWord[],
  string,
  { rejectValue: string }
>("dictionary/fetchDefinitions", async (word: string, { rejectWithValue }) => {
  try {
    const data = await getDefinitions(word);
    return Array.isArray(data) ? data : [];
  } catch (error: any) {
    return rejectWithValue(error.message);
  }
});