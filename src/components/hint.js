import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Popup from 'reactjs-popup';
import '../css/hint.css'

const Hint = ({type}) => {
  const [punten, setPunten] = useState(30);
  const [hint1, setHint1] = useState("");
  const [hint2, setHint2] = useState("");
  const [hint3, setHint3] = useState("");
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

    React.useEffect( () =>{
        getType();
    }, [])
    

  return(
    <>
        <Popup trigger={<button className='hint-button'> hints</button>} position="right center" nested>
            <section>
                
                <Popup trigger ={<button className='hint-button-tab'> 1 </button>} position='bottom left' nested>
                    <section className='hint-container'>
                        <Popup trigger={<button className='hint-button-buyhint'> koop hint</button>} position='bottom center' nested>
                            <p>{hint1}</p>
                        </Popup>
                    </section>
                    
                </Popup>
                <Popup trigger ={<button className='hint-button-tab'> 2 </button>} position='bottom left' nested>
                    <section className='hint-container'>
                    <Popup trigger={<button className='hint-button-buyhint'> koop hint</button>} position='bottom center' nested>
                            <p>{hint2}</p>
                        </Popup>
                    </section>
                </Popup>
                <Popup trigger ={<button className='hint-button-tab'> 3 </button>} position='bottom left' nested>
                    <section className='hint-container'>
                        <Popup trigger={<button className='hint-button-buyhint'> koop hint</button>} position='bottom center' nested>
                            <section className='hint-container-content'>
                                <p>{hint3}</p>
                            </section>
                        </Popup>
                    </section>
                </Popup>
            </section>
        </Popup>
      
      
      
      {/* <button onClick={ () => showHints()}>Click</button>

      <button classeName={hintOpen ? 'hintOpenStyle' : 'hintClosedStyle'} /> 
      {show && 
        <section className='hint-container'>
            

            <section className='hint-container-tabs'>
                {/* add logic to buttons so it works in switch case }
                <button className='hint-container-tabs-1' onClick={ () => getTab(1)}>1</button>
                <button className='hint-container-tabs-1' onClick={ () => getTab(2)}>2</button>
                <button className='hint-container-tabs-1' onClick={ () => getTab(3)}>3</button>
            </section>
            <section className='hint-container-content'>
                {/* this button needs to show on all different tabs }
                <div>{currentHint}</div>
                {/* {showButton && <button onClick={() => setShowButton(prev => !prev)}> koop hint </button>} }
                {showButton && <button onClick={() => buyHint()}> koop hint </button>}
            </section>        
        </section>} */}
    </>
  );
}

export default Hint

Hint.propTypes = {
    type: PropTypes.string.isRequired,
};