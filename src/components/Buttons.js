import React from 'react';

function Buttons({ reset, start, stop, isPlaying }) {
  return (
    <div className='buttons'>
      <button id='start_stop' onClick={isPlaying ? stop : start}>
        {isPlaying ? <p> Stop</p> : <p> Play</p>}
      </button>
      <button id='reset' onClick={reset}>
        Reset
      </button>
    </div>
  );
}

export default Buttons;
