import React, { useState } from 'react';

function Clock() {
  const [breakCount, setBreakCount] = useState(5);
  // Increment Break Length
  const incrementBreak = () => {
    if (!isPlaying && breakCount < 60) {
      setBreakCount(breakCount + 1);
    }
  };

  // Decrement Break Length
  const decrementBreak = () => {
    if (!isPlaying && breakCount > 1) {
      setBreakCount(breakCount - 1);
    }
  };

  const [sessionCount, setSessionCount] = useState(25);
  //Increment Session Length
  const incrementSession = () => {
    if (!isPlaying && sessionCount < 60) {
      setSessionCount(sessionCount + 1);
    }
  };

  //Decrement SessionLength
  const decrementSession = () => {
    if (!isPlaying && sessionCount > 1) {
      setSessionCount(sessionCount - 1);
    }
  };

  const [isPlaying, setIsPlaying] = useState(false);
  const [clockCount, setClockCount] = useState(25 * 60);
  const [currentTimer, setCurrentTimer] = useState('Session');

  return (
    <div>
      <h2> This is the future site of the Pomodoro Clock</h2>
    </div>
  );
}

export default Clock;
