import {configureStore, createSlice, ThunkAction} from '@reduxjs/toolkit';
import {Action} from 'redux';
import {createWrapper, HYDRATE} from 'next-redux-wrapper';

export interface MainState {
  test: boolean;
}

const initialState: MainState = {
  test: true,
}

export const main = createSlice({
  name: 'main',
  initialState,
  reducers: {
    changeTest(state) {
      state.test = !state.test;
    },
  },
});

export const {
  changeTest,
} = main.actions;

export default main.reducer;
