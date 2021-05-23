import React from 'react';

function Session({ increment, decrement, sessionCount }) {
  return (
    <div className='SessionTimer'>
      <h3 id='session-label'>Session Length:</h3>{' '}
      <div className='SessionButtons'>
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
