import React from 'react';

function Session({ increment, decrement, sessionCount }) {
  return (
    <div className='SessionTimer'>
      <h2 id='session-label'>Session Length:</h2>{' '}
      <div className='SessionButtons'>
        <button
          className='incrementWork'
          id='session-increment'
          onClick={increment}
        >
          +
        </button>
        <h2 id='session-length'>{sessionCount}</h2>
        <button
          className='decrementWork'
          id='session-decrement'
          onClick={decrement}
        >
          -
        </button>
      </div>
    </div>
  );
}

export default Session;
