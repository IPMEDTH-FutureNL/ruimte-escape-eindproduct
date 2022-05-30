import React, { useState } from 'react';
import PropTypes from 'prop-types';
// import '../css/hint.css'

const Hint = ({type}) => {
  const [show, setShow] = useState(false);
  const [showButton, setShowButton] = useState(true);
  const [punten, setPunten] = useState(30);
  const [hint1, setHint1] = useState("");
  const [hint2, setHint2] = useState("");
  const [hint3, setHint3] = useState("");
  const [currentHint, setCurrentHint] = useState();
  const hintArray = {
      //click game hints
      clickHint1: 'this is the first hint',
      clickHint2: 'this is the second hint',
      clickHint3: 'this is the 3rd hint',
      //crossword hints
      crosswordHint1: 'sussy bussy',
      crosswordHint2: 'bogos binted',
      crosswordHint3: 'pingo pongo',

      // add more hints with appropriate names
  }

  const getType = () => {
    switch (type) {
        case 'clickHint':
            //depends on the tab thats open, show correct hint
            setHint1(Object.values(hintArray.clickHint1))
            setHint2(Object.values(hintArray.clickHint2))
            setHint3(Object.values(hintArray.clickHint3))
            break;

        case 'crosswordHint':
            setHint1(Object.values(hintArray.crosswordHint1))
            setHint2(Object.values(hintArray.crosswordHint2))
            setHint3(Object.values(hintArray.crosswordHint3))
            break;
        default:
            break;
        }   
    }


    const getTab = (number) =>{
        switch (number) {
            case 1:
                setCurrentHint(hint1)
                break;
            case 2:
                setCurrentHint(hint2)
                break;
            case 3:
                setCurrentHint(hint3)
            default:
                break;
        }
    }

    const showHints = () =>{
            getType();
            setShow(prev => !prev)   
    }

    const buyHint = (number) =>{
        if(punten >= 10){
            setPunten(punten - 10)
            localStorage.setItem('punten', punten)
            getTab(number)
        }
        console.log(localStorage.getItem('punten'));
    }

  return(
    <>
      <button onClick={ () => showHints()}>Click</button>

      {/* <button classeName={hintOpen ? 'hintOpenStyle' : 'hintClosedStyle'} />  */}

      {show && 
        <section className='hint-container'>
            <section className='hint-container-tabs'>
                {/* add logic to buttons so it works in switch case */}
                <button className='hint-container-tabs-1' onClick={ () => getTab(1)}>1</button>
                <button className='hint-container-tabs-1' onClick={ () => getTab(2)}>2</button>
                <button className='hint-container-tabs-1' onClick={ () => getTab(3)}>3</button>
            </section>
            <section className='hint-container-content'>
                {/* this button needs to show on all different tabs */}
                <div>{currentHint}</div>
                {/* {showButton && <button onClick={() => setShowButton(prev => !prev)}> koop hint </button>} */}
                {showButton && <button onClick={() => buyHint()}> koop hint </button>}
            </section>        
        </section>}
    </>
  );
}

export default Hint

Hint.propTypes = {
    type: PropTypes.string.isRequired,
};