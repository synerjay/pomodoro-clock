import React from 'react';

function Buttons({ reset, start, stop, isPlaying }) {
  return (
    <div className='buttons'>
      <button id='start_stop' onClick={isPlaying ? stop : start}>
        {isPlaying ? <h2> Stop</h2> : <h2> Play</h2>}
      </button>
      <button id='reset' onClick={reset}>
        Reset
      </button>
    </div>
  );
}

export default Buttons;
