import React, { useState } from 'react';
import PropTypes from 'prop-types';

const Hint = ({type}) => {
  const [show, setShow] = useState(false);
  const [showButton, setShowButton] = useState(true);
  const [currentHint, setCurrentHint] = useState();
  const hintArray = {
      //click game hints
      clickHint1: 'this is the first hint',
      clickHunt2: 'this is the second hint',
      clickHint3: 'this is the third hint',

      // add more hints with appropriate names
  }

  const getType = () => {
    switch (type) {
        case 'clickHint':
                //depends on the tab thats open, show correct hint
                setCurrentHint(Object.values(hintArray.clickHint1))
            break;

        case 'crosswordHint':
                setCurrentHint('stephan is mijn vader')
            break;
        default:
            break;
        }   
    }

    const showHints = () =>{
        getType();
        setShow(prev => !prev)
    }

  return(
    <>
      <button onClick={ () => showHints()}>Click</button>

      {/* <button classeName={hintOpen ? 'hintOpenStyle' : 'hintClosedStyle'} />  */}

      {show && 
        <section className='hint-container'>
            <section className='hint-container-tabs'>
                {/* add logic to buttons so it works in switch case */}
                <button className='hint-container-tabs-1'>1</button>
                <button className='hint-container-tabs-1'>2</button>
                <button className='hint-container-tabs-1'>3</button>
            </section>
            <section className='hint-container-content'>
                {/* this button needs to show on all different tabs */}
                <div>{currentHint}</div>
                {showButton && <button onClick={() => setShowButton(prev => !prev)}> pay me money </button>}
            </section>        
        </section>}
    </>
  );
}

export default Hint

Hint.propTypes = {
    type: PropTypes.string.isRequired,
};