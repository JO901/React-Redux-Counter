import { configureStore } from '@reduxjs/toolkit';
import countReducer from './counter-reducer'


const store = configureStore({
  reducer: {
    Counter: countReducer,
  },
});

export default store;
