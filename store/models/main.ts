import {createSlice} from '@reduxjs/toolkit';

export interface MainState {
  classic: boolean;
  aquarell: boolean;
  gold: boolean;
  blackAndWhite: boolean;
  modern: boolean;
}

const initialState: MainState = {
  classic: true,
  aquarell: false,
  gold: false,
  blackAndWhite: false,
  modern: false,
}

export const main = createSlice({
  name: 'main',
  initialState,
  reducers: {
    changeTest(state) {
      // state.test = !state.test;
    },
  },
});

export const {
  changeTest,
} = main.actions;

export default main.reducer;
