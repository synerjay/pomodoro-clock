import React from 'react';

function Break({ increment, decrement, breakCount }) {
  return (
    <div className='BreakTimer'>
      <h2 id='break-label'>Break Length:</h2>
      <div className='BreakButtons'>
        <button
          className='incrementBreak'
          id='break-increment'
          onClick={increment}
        >
          +
        </button>
        <h2 id='break-length'>{breakCount}</h2>
        <button
          className='decrementBreak'
          id='break-decrement'
          onClick={decrement}
        >
          -
        </button>
      </div>
    </div>
  );
}

export default Break;
