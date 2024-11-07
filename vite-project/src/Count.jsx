// similar to DOM manlipulation we use 'useSelector' to subscribe or gain access to specific parts of our state
import { useSelector } from 'react-redux'
/* we import and use 'useDispatch' to allow events (like 'onClick') to invoke action function(in our 'actions.js file) 
to change our state */
import { useDispatch } from 'react-redux'
/* we import our actions from our 'action.js' file that will be invoked when the user triggers 
an event (again think like 'onClick' and 'onChange') */
import { incrementCounterAction } from './actions';

// this is our count react component 
function Count () {
    // useSelector subscribe the specific state 
    // this is how we select our counter state 
    /* the 'useSelector' takes a callback that has our whole state as a arguement and returns a specific state we want 
    to pay attention to */
    const counter = useSelector(state => state.counter.count); // initial state = 0


    /* we wrap our 'useDispatch' functon in a variable that is what we'll use to invoke certain
    actions function when an event is triggered
    */
    const dispatch = useDispatch();

    // this is our plus function that when invoked will dispatch the action function to change our state
    // our 'incrementCounterAction' takes on parameter which is the current counter 
    const plus = () => dispatch(incrementCounterAction(counter));

    // we are returning a button that when clicked will invoke the plus function.
    // also this button will show the current count in the browser
    return (
        <div>
            <button onClick={plus}>{counter}</button>
        </div>
    )
}

// we export our 'Count' component to be used within other components 
export default Count