// we import 'configureStore' to create the state object so that we can access using redux syntax
import { configureStore } from '@reduxjs/toolkit';
// we import all of our reducers into the store file to be used inside of our app 
import countReducer from './counter-reducer'

/*
we are using the built-in-function of 'configureStore()' to save all of our states which was created in our reducer file 
into one large object for the whole react app to use.
this file is imported into our 'main.jsx' file.
*/
const store = configureStore({
  reducer: {
    // this is our counter data
    counter: countReducer,
  },
});

// we export store to be used in our react components go to 'main.jsx' file to see how it is passed as a prop
export default store;
