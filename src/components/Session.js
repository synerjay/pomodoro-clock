import React from 'react';

function Session({ increment, decrement, sessionCount }) {
  return (
    <div className='SessionTimer flex flex-col justify-center'>
      <h3 id='session-label'>Session Length:</h3>{' '}
      <div className='SessionButtons flex flex-row justify-center'>
        <button
          className='decrementWork'
          id='session-decrement'
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
        <h3 id='session-length'>{sessionCount}</h3>
        <button
          className='incrementWork'
          id='session-increment'
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

export default Session;
