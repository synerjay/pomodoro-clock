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
          <svg
            xmlns='http://www.w3.org/2000/svg'
            className='h-6 w-6'
            fill='none'
            viewBox='0 0 24 24'
            stroke='currentColor'
          >
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              strokeWidth={2}
              d='M19 9l-7 7-7-7'
            />
          </svg>
        </button>
        <h3 id='break-length'>{breakCount}</h3>

        <button
          className='incrementBreak'
          id='break-increment'
          onClick={increment}
        >
          <svg
            xmlns='http://www.w3.org/2000/svg'
            className='h-6 w-6'
            fill='none'
            viewBox='0 0 24 24'
            stroke='currentColor'
          >
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              strokeWidth={2}
              d='M5 15l7-7 7 7'
            />
          </svg>
        </button>
      </div>
    </div>
  );
}

export default Break;
