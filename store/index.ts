import {configureStore, ThunkAction} from '@reduxjs/toolkit';
import {Action} from 'redux';
import {createWrapper, HYDRATE} from 'next-redux-wrapper';
import main from './models/main';

const makeStore = () => configureStore({
  reducer: {
    main,
  },
  devTools: true,
});

export type AppStore = ReturnType<typeof makeStore>;
export type AppState = ReturnType<AppStore['getState']>;
export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, AppState, unknown, Action>;

export const wrapper = createWrapper<AppStore>(makeStore);
