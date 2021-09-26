import React, { useEffect, useRef, useState } from 'react';
import Break from '../components/Break';
import Buttons from '../components/Buttons';
import Session from '../components/Session';
import { timeFormatter } from '../utils';
import beep from '../beep.wav';
import { CountdownCircleTimer } from 'react-countdown-circle-timer';

function Clock() {
  // Access the Audio DOM element by using useRef hook
  const audioRef = useRef<HTMLAudioElement>(null); // always set the useRef to initially null
  const [isPlaying, setIsPlaying] = useState(false);
  const [clockCount, setClockCount] = useState(25 * 60);
  const [currentTimer, setCurrentTimer] = useState('Session');
  const [key, setKey] = useState(0);
  const [breakCount, setBreakCount] = useState(5);
  const [sessionCount, setSessionCount] = useState(25);

  // Increment Break Length
  const incrementBreak = () => {
    if (!isPlaying && breakCount < 60) {
      setBreakCount(breakCount + 1);
      if (currentTimer === 'Break') {
        setClockCount(breakCount * 60 + 60);
        setKey((prevKey) => prevKey + 1);
      }
    }
  };

  // Decrement Break Length
  const decrementBreak = () => {
    if (!isPlaying && breakCount > 1) {
      setBreakCount(breakCount - 1);
      if (currentTimer === 'Break') {
        setClockCount(breakCount * 60 - 60);
        setKey((prevKey) => prevKey + 1);
      }
    }
  };

  //Increment Session Length
  const incrementSession = () => {
    if (!isPlaying && sessionCount < 60) {
      setSessionCount(sessionCount + 1);
      if (currentTimer === 'Session') {
        setClockCount(sessionCount * 60 + 60);
        setKey((prevKey) => prevKey + 1);
      }
    }
  };

  //Decrement SessionLength
  const decrementSession = () => {
    if (!isPlaying && sessionCount > 1) {
      setSessionCount(sessionCount - 1);
      if (currentTimer === 'Session') {
        setClockCount(sessionCount * 60 - 60);
        setKey((prevKey) => prevKey + 1);
      }
    }
  };

  // useEffect will detect any changes of component states, e.g. depend on changes of the isPlaying state
  useEffect(() => {
    //This function switches the Current Timer to the opposite phase
    const switchTimer = () => {
      if (currentTimer === 'Session') {
        setCurrentTimer('Break');
        setClockCount(breakCount * 60); // set the Clock count to seconds
        setKey((prevKey) => prevKey + 1);
      } else {
        setCurrentTimer('Session');
        setClockCount(sessionCount * 60);
        setKey((prevKey) => prevKey + 1);
      }
    };

    let clockInterval: NodeJS.Timer;
    if (isPlaying && clockCount > 0) {
      clockInterval = setInterval(() => {
        setClockCount(clockCount - 1);
      }, 1000);
    } else if (isPlaying && clockCount === 0) {
      clockInterval = setInterval(() => {
        setClockCount(clockCount - 1);
      }, 1000);
      // play audio music here
      if (audioRef.current) {
        audioRef.current.play();
      }
      setKey((prevKey) => prevKey + 1);
      switchTimer();
    }
    // else {
    //   clearInterval(clockInterval);
    // }

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
    setClockCount(25 * 60); // set to initial values
    setIsPlaying(false);
    if (audioRef.current) {
      audioRef.current.pause();
      audioRef.current.currentTime = 0;
    }
    setKey((prevKey) => prevKey + 1);
  };

  interface RemainingTime {
    remainingTime: number;
  }

  const RenderTime = ({ remainingTime }: RemainingTime) => {
    return (
      <div className='flex flex-col gap-y-5'>
        <div className='flex flex-row'>
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
        </div>
        <h3
          className='flex flex-row justify-center text-2xl uppercase'
          id='timer-label'
        >
          {currentTimer} Timer:{' '}
        </h3>
        <h1
          className='ClockFace flex flex-row justify-center text-8xl'
          id='time-left'
        >
          {timeFormatter(remainingTime)}
        </h1>
        <Buttons
          reset={handleResetClock}
          stop={handleStopClock}
          start={handleStartClock}
          isPlaying={isPlaying}
        />
      </div>
    );
  };

  return (
    <div className='flex items-center justify-center flex-col flex-grow w-screen h-screen space-y-10'>
      <div className='w-full h-full p-5 md:p-10 card hover:shadow-xl flex flex-col items-center justify-center'>
        <CountdownCircleTimer
          isPlaying={isPlaying}
          duration={clockCount}
          key={key}
          size={600}
          strokeWidth={30}
          initialRemainingTime={
            currentTimer === 'Session' ? sessionCount * 60 : breakCount * 60
          }
          isLinearGradient={true}
          trailColor='#111827'
          colors={[
            ['#4ab6ff', 0.33],
            ['#ffc726', 0.33],
            ['#ff4f4f', 0.33],
          ]}
        >
          {RenderTime}
        </CountdownCircleTimer>
        <h2 className='text-xs mt-0 md:text-lg md:mt-7'>
          {' '}
          Made in React and Tailwind CSS by{' '}
          <a
            className='underline'
            target='_blank'
            rel='noreferrer'
            href='https://www.jerometo.com'
          >
            Jerome Tolentino
          </a>
        </h2>
      </div>
      <audio
        id='beep'
        preload='auto'
        src={require('../beep.wav')}
        ref={audioRef}
      />
    </div>
  );
}

export default Clock;
