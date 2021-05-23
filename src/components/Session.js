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
          -
        </button>
        <h3 id='session-length'>{sessionCount}</h3>
        <button
          className='incrementWork'
          id='session-increment'
          onClick={increment}
        >
          +
        </button>
      </div>
    </div>
  );
}

export default Session;
