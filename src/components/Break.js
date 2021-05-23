import React from 'react';

function Break({ increment, decrement, breakCount }) {
  return (
    <div className='BreakTimer flex flex-col justify-center'>
      <h3 id='break-label'>Break Length:</h3>
      <div className='BreakButtons flex flex-row justify-center'>
        <button
          className='decrementBreak'
          id='break-decrement'
          onClick={decrement}
        >
          -
        </button>
        <h3 id='break-length'>{breakCount}</h3>

        <button
          className='incrementBreak'
          id='break-increment'
          onClick={increment}
        >
          +
        </button>
      </div>
    </div>
  );
}

export default Break;
