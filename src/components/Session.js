import React from 'react';

function Session({ increment, decrement, sessionCount }) {
  let count = sessionCount;

  // minutes = minutes < 10 ? '0' + minutes : minutes;
  count = count < 10 ? '0' + count : count;

  return (
    <div className='SessionTimer card hover:shadow-xl p-7 flex flex-col justify-center'>
      <h3 className='text-2xl uppercase' id='session-label'>
        Session Length:
      </h3>{' '}
      <div className='SessionButtons flex flex-row justify-center'>
        <button
          className='decrementWork focus:outline-none | transform hover:translate-y-1 hover:bg-opacity-50 | transition ease-out duration-300'
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
        <h3
          className='SessionCount text-primary text-2xl uppercase mx-7'
          id='session-length'
        >
          {count}
        </h3>
        <button
          className='incrementWork focus:outline-none | transform hover:-translate-y-1 hover:bg-opacity-50 | transition ease-out duration-300'
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
