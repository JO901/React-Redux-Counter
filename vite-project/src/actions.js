/* We import all of our types so that our action functions will have a unique identifier
so when we run our reducer function it know which action to take 
*/
import * as types from './type';

/* we export a increment functon that takes the current count
and return an object that has a specific type and payload property 
that will be used to update our state.

in this case we will add one to the current count and send that value to the reducer a
nd then the store to be saved
*/
export const incrementCounterAction = (currCount) => ({
  type: types.CHANGE_COUNT,
  payload: currCount + 1,
});
