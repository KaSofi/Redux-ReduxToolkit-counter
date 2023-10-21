
import { useSelector, useDispatch } from 'react-redux'
import { decrement, increment, incrementFive, minusFive, multiplyFive } from './redux/couner'

import './App.css';

function App() {
  const count  = useSelector((state) => state.counter.value)
  const dispatch = useDispatch()
  return (
    <div className="App">
    <p>Score: {count}</p>
    <button onClick={() => dispatch(increment())}>+</button>
    <button onClick={() => dispatch(decrement())} >-</button>
    <button onClick={() => dispatch(incrementFive())}>+5</button>
    <button onClick={() => dispatch(minusFive(5))}>-5</button>
    <button onClick={() => dispatch(multiplyFive(5))}>*5</button>
    </div>
  );
}

export default App;
