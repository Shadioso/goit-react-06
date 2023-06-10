import { configureStore } from '@reduxjs/toolkit';
import { cotactsReducer } from './contactsReducer';
import { filterReducer } from './filterReducer';

// import { reducer } from './reducers';

export const store = configureStore({
  reducer: {
    // myValue: reducer,
    contacts: cotactsReducer.reducer,
    filter: filterReducer.reducer,
  },
});
