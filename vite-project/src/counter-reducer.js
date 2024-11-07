/* we import all our types into our reducer function that will then use them for conditional 
logic to help change and update our states and cause a re-render on the page */
import * as types from './type';

// our starting state for our react app that will be used on startup of the app.
const initialState = { count: 0 };

// our reducer function that will take our initial state as a default and an action that will change that state
function countReducer(state = initialState, action) {
  // switch statement is our conditional state me that will look at the specific action type to determine what instructions are passed
  switch (action.type) { 
    /* our first and only case that will take the original state and use a shallow copy rather than mutating it 
    to update the state the spread operator(...) is the perfered syntax 
    */
    case types.CHANGE_COUNT:
      return {
        ...state, // this creates a shallow copy of our whole state
        count: action.payload, // this updates our copy of the state with the actions new data
      };
      // our default case that will run on app startup and will always return the 'initalState' as is
    default:
      return state;
  }
}

//we export our reducer to be imported in our store so that all state data will live in one place 
// look into 'combineReducers' from redux when you have multiple reducers 
export default countReducer;
