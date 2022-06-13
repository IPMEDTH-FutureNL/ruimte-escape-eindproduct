import React from 'react';
import '../css/timer.css'

const MyTimer = ({minute, second }) => {

  return (
    <div className="timer">
      <div className='timer-inside' >
        <span>Tijd: {minute < '10' ? '0' + minute : minute}</span>:<span>{second < '10' ? '0' + second : second}</span>
      </div>
    </div>
  );
}

export default MyTimer;