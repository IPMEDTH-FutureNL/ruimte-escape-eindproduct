import React from 'react';
import { useStopwatch } from 'react-timer-hook';
import '../css/timer.css'

function MyTimer({ expiryTimestamp }) {
  const {
    seconds,
    minutes,
    start,
    pause,
  } = useStopwatch({ expiryTimestamp, onExpire: () => console.warn('onExpire called') });


  return (
    <div className="timer">
      <div className='timer-inside' >
        <span>{minutes < '10' ? '0' + minutes : minutes}</span>:<span>{seconds < '10' ? '0' + seconds : seconds}</span>
      </div>
      <button onClick={start}>Start</button>
      <button onClick={pause}>Pause</button>
    </div>
  );
}

export default function App() {
  return (
    <div>
      <MyTimer/>
    </div>
  );
}