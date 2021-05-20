import React, { useState } from 'react';

function Clock() {
  const [breakCount, setBreakCount] = useState(5);
  const [sessionCount, setSessionCount] = useState(25);
  const [clockCount, setClockCount] = useState(25 * 60);
  const [currentTimer, setCurrentTimer] = useState('Session');
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <div>
      <h2> This is the future site of the Pomodoro Clock</h2>
    </div>
  );
}

export default Clock;
