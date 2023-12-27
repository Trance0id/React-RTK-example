import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { increment, decrement, reset } from './counterSlice';

const ReduxCounter = () => {
  const [incrementValue, setIncrementValue] = useState(1);
  const count = useSelector(state => state.counter.value);
  const dispatch = useDispatch();

  const handleIncrementChange = e => {
    const numberValue = parseInt(e.target.value);
    if (!isNaN(numberValue)) {
      setIncrementValue(numberValue);
    }
  };

  const handleIncrementButtonClick = () => {
    dispatch(increment(incrementValue));
  };

  const handleDecrementButtonClick = () => {
    dispatch(decrement(incrementValue));
  };

  const handleResetButtonClick = () => {
    dispatch(reset(0));
  };

  return (
    <div className='Counter'>
      <h5 className='Counter__title'>Global state counter</h5>
      <input type='number' value={incrementValue} onChange={handleIncrementChange} />
      <div className='Counter__buttons'>
        <button type='button' onClick={handleIncrementButtonClick}>
          Increment
        </button>
        <button type='button' onClick={handleResetButtonClick}>
          Reset
        </button>
        <button type='button' onClick={handleDecrementButtonClick}>
          Decrement
        </button>
      </div>
      <div className='Counter__result'>{count}</div>
    </div>
  );
};

export default ReduxCounter;
