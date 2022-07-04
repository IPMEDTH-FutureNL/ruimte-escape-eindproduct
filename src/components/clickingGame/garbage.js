import React, { useState } from 'react';
import garbage from '../../img/clickingGame/garbage.png';


const Garbage = () => {
  const [show, setShow] = useState(true);
  return(
    <>
         {show && <img className='img-garbage' src={garbage} alt='garbage' draggable="false" onClick={() => setShow(prev => !prev)}/>}
    </>
  );
}

export default Garbage
