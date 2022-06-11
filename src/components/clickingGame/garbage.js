import React, { useState } from 'react';
import garbage from '../../img/clickingGame/garbage.png';
import '../../css/garbage.css'

const Garbage = () => {
  const [show, setShow] = useState(true);
  return(
    <>
         {show && <img className='img-garbage' src={garbage} alt='garbage' onClick={() => setShow(prev => !prev)}/>}
    </>
  );
}

export default Garbage
