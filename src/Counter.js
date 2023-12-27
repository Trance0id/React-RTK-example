import './Counter.css';
import { useState } from 'react';

const Counter = ({ initialCount }) => {
  const [count, setCount] = useState(initialCount);
  const [increment, setIncrement] = useState(1);

  const handleIncrementChange = e => {
    const numberValue = parseInt(e.target.value);
    if (!isNaN(numberValue)) {
      setIncrement(numberValue);
    }
  };

  const handleIncrementButtonClick = () => {
    setCount(prevCount => prevCount + increment);
  };

  const handleDecrementButtonClick = () => {
    setCount(prevCount => prevCount - increment);
  };

  const handleResetButtonClick = () => {
    setCount(initialCount);
  };

  return (
    <div className='Counter'>
      <input type='number' value={increment} onChange={handleIncrementChange} />
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

export default Counter;
