import React, { useState } from 'react';
import PropTypes from 'prop-types'; 
import Popup from 'reactjs-popup'; //npm install reactjs-popup --save
import Punten from './Punten';
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
      //drag and drop hints
      dragAndDropHint1: 'De planeten Saturnus en Uranus kan je herkennen aan hun ringen. De ringen om deze planeten bestaan uit meteorietstofdeeltjes en ijs.',
      dragAndDropHint2:'De planeet die het dichts bij de zon staat is Mercurius.',
      dragAndDropHint3:'De oplossing voor de puzzel is: zie afbeelding',
      // add more hints with appropriate names
      oplosmatrixHint1: 'De kleuren op de post it komen wel heel erg bekend voor.',
      oplosmatrixHint2: 'zouden de afbeeldingen op de post it iets betekenen? ',
      oplosmatrixHint3: 'de oplossing',
  }


  const getType = () => {
    switch (type) {
        case 'clickHints':
            //depends on the tab thats open, show correct hint
            setHint1(Object.values(hintArray.clickHint1))
            setHint2(Object.values(hintArray.clickHint2))
            setHint3(Object.values(hintArray.clickHint3))
            break;

        case 'crosswordHints':
            setHint1(Object.values(hintArray.crosswordHint1))
            setHint2(Object.values(hintArray.crosswordHint2))
            setHint3(Object.values(hintArray.crosswordHint3))
            break;

        case 'dragAndDropHints':
            setHint1(Object.values(hintArray.dragAndDropHint1))
            setHint2(Object.values(hintArray.dragAndDropHint2))
            setHint3(Object.values(hintArray.dragAndDropHint3))
            break;
        
        case 'oplosmatrixHints':
            setHint1(Object.values(hintArray.oplosmatrixHint1))
            setHint2(Object.values(hintArray.oplosmatrixHint2))
            setHint3(Object.values(hintArray.oplosmatrixHint3))
            break;

        default:
            break;
        }   
    }

    const updatePoints = () => {
        return localStorage.getItem("punten");
    }
    
    React.useEffect( () =>{
        getType();
    }, [])
    
    const buyHint = () =>{
        console.log("buyHint");
        if(punten >= 10){
            let newPoints = punten - 10;
            setPunten(newPoints);
            localStorage.setItem("punten", newPoints);
        }else{
            let newPoints = 0;
            setPunten(newPoints);
            localStorage.setItem("punten", newPoints);
            // setCurrentHint("Je hebt niet genoeg punten om hints te kopen!");
        }

        updatePoints();
    }
    

  return(
    <>
        <Popup trigger={<button className='hint-button'> hints</button>} position=" center" click modal nested>
            <section className='hint-container-content'>
                <Popup trigger ={<button className='hint-button-tab'> 1 </button>} position='bottom left' nested>
                    <section className='hint-container'>
                        <Popup  trigger={<button className='hint-button-buyhint' onMouseDown={() => buyHint()}> koop hint</button>} position='bottom center' nested>
                            <p>{hint1}</p>
                        </Popup>
                    </section>
                    
                </Popup>
                <Popup trigger ={<button className='hint-button-tab'> 2 </button>} position='bottom left' nested>
                    <section className='hint-container'>
                        <Popup trigger={<button className='hint-button-buyhint' onMouseDown={() => buyHint()}> koop hint</button>} position='bottom center' nested>
                            <p>{hint2}</p>
                        </Popup>
                    </section>
                </Popup>
                <Popup trigger ={<button className='hint-button-tab'> 3 </button>} position='bottom left' nested>
                    <section className='hint-container'>
                        <Popup  trigger={<button className='hint-button-buyhint' onMouseDown={() => buyHint()}> koop hint</button>} position='bottom center' nested>
                            <section className='hint-container-content'>
                                <p>{hint3}</p>
                            </section>
                        </Popup>
                    </section>
                </Popup>
            </section>
        </Popup>
        <Punten 
            punten={updatePoints()}
        /> 
    </>
  );
}

export default Hint

Hint.propTypes = {
    type: PropTypes.string.isRequired,
};