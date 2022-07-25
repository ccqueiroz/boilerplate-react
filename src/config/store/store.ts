import { configureStore } from '@reduxjs/toolkit';
import thunk from 'redux-thunk';
import reducer from './root.reducer';

const store = configureStore({
  reducer,
  middleware: [thunk],
});

export { store };
export type RootStore = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export type StoreRedux = typeof store;
