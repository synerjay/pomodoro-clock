import React, { useEffect, useRef, useState } from 'react';
import Break from '../components/Break';
import Buttons from '../components/Buttons';
import Session from '../components/Session';
import { timeFormatter } from '../utils';
import beep from '../beep.wav';

function Clock() {
  // Access the Audio DOM element by using useRef hook
  const audioRef = useRef();
  console.log(audioRef);

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
      audioRef.current.play();
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
    audioRef.current.pause();
    audioRef.current.currentTime = 0;
  };

  return (
    <div className='flex items-center justify-center flex-col flex-grow w-screen h-screen space-y-10'>
      <div className='TimerSection p-10 card hover:shadow-xl flex flex-col justify-center'>
        <h3
          className='text-primary flex flex-row justify-center text-2xl uppercase'
          id='timer-label'
        >
          {currentTimer} Timer:{' '}
        </h3>

        <h1 className='flex flex-row justify-center text-9xl' id='time-left'>
          {timeFormatter(clockCount)}
        </h1>
      </div>

      <div className='ButtonsSection flex justify-center space-x-20'>
        <Break
          increment={incrementBreak}
          decrement={decrementBreak}
          breakCount={breakCount}
        />

        <Buttons
          reset={handleResetClock}
          stop={handleStopClock}
          start={handleStartClock}
          isPlaying={isPlaying}
        />
        <Session
          increment={incrementSession}
          decrement={decrementSession}
          sessionCount={sessionCount}
        />
      </div>
      <audio id='beep' preload='auto' src={beep} ref={audioRef} />
    </div>
  );
}

export default Clock;
