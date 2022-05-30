import React, { useState } from 'react';
import garbage from '../../img/oplosmatrix/astronaut.png';

const Garbage = () => {
  const [show, setShow] = useState(true);
  return(
    <>
      {/* {show && <button onClick={() => setShow(prev => !prev)}>Click</button>} */}
      {show && <img src={garbage} alt='garbage' onClick={() => setShow(prev => !prev)}/>}
    </>
  );
}

export default Garbage
