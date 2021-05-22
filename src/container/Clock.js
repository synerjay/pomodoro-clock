import React, { useEffect, useState } from 'react';
import Break from '../components/Break';
import Buttons from '../components/Buttons';
import Session from '../components/Session';
import { timeFormatter } from '../utils';

function Clock() {
  const [breakCount, setBreakCount] = useState(5);
  // Increment Break Length
  const incrementBreak = () => {
    if (!isPlaying && breakCount < 60) {
      setBreakCount(breakCount + 1);
      if (currentTimer === 'Break') {
        setClockCount(breakCount * 60 + 60);
      }
    }
  };

  // Decrement Break Length
  const decrementBreak = () => {
    if (!isPlaying && breakCount > 1) {
      setBreakCount(breakCount - 1);
      if (currentTimer === 'Break') {
        setClockCount(breakCount * 60 - 60);
      }
    }
  };

  const [sessionCount, setSessionCount] = useState(25);
  //Increment Session Length
  const incrementSession = () => {
    if (!isPlaying && sessionCount < 60) {
      setSessionCount(sessionCount + 1);
      if (currentTimer === 'Session') {
        setClockCount(sessionCount * 60 + 60);
      }
    }
  };

  //Decrement SessionLength
  const decrementSession = () => {
    if (!isPlaying && sessionCount > 1) {
      setSessionCount(sessionCount - 1);
      if (currentTimer === 'Session') {
        setClockCount(sessionCount * 60 - 60);
      }
    }
  };

  const [isPlaying, setIsPlaying] = useState(false);
  const [clockCount, setClockCount] = useState(25 * 60);
  const [currentTimer, setCurrentTimer] = useState('Session');

  // useEffect will detect any changes of component states, e.g. depend on changes of the isPlaying state
  useEffect(() => {
    //This function switches the Current Timer to the opposite phase
    const switchTimer = () => {
      if (currentTimer === 'Session') {
        setCurrentTimer('Break');
        setClockCount(breakCount * 60); // set the Clock count to seconds
      } else {
        setCurrentTimer('Session');
        setClockCount(sessionCount * 60);
      }
    };

    let clockInterval;
    if (isPlaying && clockCount > 0) {
      clockInterval = setInterval(() => {
        setClockCount(clockCount - 1);
      }, 1000);
    } else if (isPlaying && clockCount === 0) {
      clockInterval = setInterval(() => {
        setClockCount(clockCount - 1);
      }, 1000);
      // play audio music here
      switchTimer();
    } else {
      clearInterval(clockInterval);
    }

    // useEffect hook version of componentWillUnmount
    return () => clearInterval(clockInterval);
  }, [isPlaying, breakCount, sessionCount, currentTimer, clockCount]);

  // Start Clock

  const handleStartClock = () => {
    setIsPlaying(true);
    // setting setIsPlaying to true will fire the useEffect hook because it is set to depend on the changes of the isPlaying state
  };

  //Stop Clock

  const handleStopClock = () => {
    setIsPlaying(false);
  };

  // Reset the Clock

  const handleResetClock = () => {
    setBreakCount(5);
    setSessionCount(25);
    setCurrentTimer('Session');
    setClockCount(1500);
    setIsPlaying(false);
    // Reset audio file here -- DO NOT FORGET!
  };

  return (
    <div>
      <Break
        increment={incrementBreak}
        decrement={decrementBreak}
        breakCount={breakCount}
      />
      <Session
        increment={incrementSession}
        decrement={decrementSession}
        sessionCount={sessionCount}
      />
      <div>
        <h2 id='timer-label'>{currentTimer} Timer: </h2>
        <h2 id='time-left'>{timeFormatter(clockCount)}</h2>
        <Buttons
          reset={handleResetClock}
          stop={handleStopClock}
          start={handleStartClock}
          isPlaying={isPlaying}
        />
      </div>
    </div>
  );
}

export default Clock;
