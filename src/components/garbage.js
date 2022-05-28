import React, { useState } from 'react';

const Garbage = () => {
  const [show, setShow] = useState(true);
  return(
    <>
      {show && <button onClick={() => setShow(prev => !prev)}>Click</button>}
    </>
  );
}

export default Garbage
