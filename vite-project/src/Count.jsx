import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import { plusActionCreator } from './actions';



function Count () {
    // useSelector subscribe the specific state 
    const state = useSelector(state => state);
    console.log(state)

    const counter = useSelector(state => state.counter.count); // initial state = 0

    const dispatch = useDispatch();

    const plus = () => dispatch(plusActionCreator(counter));

    return (
        <div>
            <button onClick={plus}>{counter}</button>
        </div>
    )
}

export default Count