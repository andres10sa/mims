import { configureStore } from '@reduxjs/toolkit';
import dictionaryReducer from '@/redux/dictionary/slice'; 
import uiReducer from '@/redux/ui/slice'

export const store = configureStore({
  reducer: {
    dictionary: dictionaryReducer,
    ui: uiReducer,
  },
  devTools: process.env.NODE_ENV !== "production",
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
