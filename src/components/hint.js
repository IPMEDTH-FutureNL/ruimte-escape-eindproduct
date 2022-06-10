import React, { useState } from 'react';
import PropTypes from 'prop-types'; 
import Popup from 'reactjs-popup'; //npm install reactjs-popup --save
import Punten from './Punten';
import SolutionDragAndDrop from '../img/planeten/hintFoto.png'
import '../css/hint.css'

const Hint = ({type}) => {
  const [punten, setPunten] = useState(localStorage.getItem("punten"));
  const [dragDrop, setDragDrop] = useState(false);
  const [hint1, setHint1] = useState("");
  const [hint2, setHint2] = useState("");
  const [hint3, setHint3] = useState("");
  const hintArray = {
      //click game hints
      clickHint1: 'Ruim het afval op met de muis',
      clickHint2: 'Gebruik de linker muisknop om te klikken',
      clickHint3: 'Er zijn 6 stukken afval in totaal, heb je ze allemaal?',
      //crossword hints
      crosswordHint1: 'kruisword puzzel',
      crosswordHint2: 'hint 2',
      crosswordHint3: 'antwoord puzzel',
      //drag and drop hints
      dragAndDropHint1: 'De planeten Saturnus en Uranus kan je herkennen aan hun ringen. De ringen om deze planeten bestaan uit meteorietstofdeeltjes en ijs.',
      dragAndDropHint2: 'De planeet die het dichts bij de zon staat is Mercurius.',
      dragAndDropHint3: 'De oplossing voor de puzzel is: zie afbeelding.',
      //oplosmatrix hints
      oplosMatrixHint1: 'De kleuren op de post it komen wel heel erg bekend voor.',
      oplosMatrixHint2: 'zouden de afbeeldingen op de post it iets betekenen?',
      oplosMatrixHint3: 'de oplossing is 674',
      // Quizz hints
      quizzHint1: 'Heb je de vragen kunnen beantwoorden met de weetjes op de kaart? De antwoorden op de drie vragen vormen een lettercode!',
      quizzHint2: 'Er zijn 8 planeten in ons zonnestelsel. De antwoord op vraag 1 is dus B. Kun jij de andere twee nog beantwoorden?',
      quizzHint3: 'De antwoorden op vraag 1 is B, vraag 2 is A en vraag 3 is C. De lettercode is dus: BAC.',
      // Rebus hints
      rebusHint1: 'Heb je op de blauwe computer op de deur geklikt? Daar kun je een code invullen en de deur openen!',
      rebusHint2: 'De eerste twee blokjes vormen de zin: we zijn..... Wat zouden de drie woorden erna vormen?',
      rebusHint3: 'Het antwoord is: we zijn onderweg naar mars',

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
            setDragDrop(true);
            setHint1(Object.values(hintArray.dragAndDropHint1))
            setHint2(Object.values(hintArray.dragAndDropHint2))
            setHint3(Object.values(hintArray.dragAndDropHint3))
            break;

        case 'oplosmatrixHints':
            setHint1(Object.values(hintArray.oplosMatrixHint1))
            setHint2(Object.values(hintArray.oplosMatrixHint2))
            setHint3(Object.values(hintArray.oplosMatrixHint3))
            break;
        case 'quizzHints':
            setHint1(Object.values(hintArray.quizzHint1))
            setHint2(Object.values(hintArray.quizzHint2))
            setHint3(Object.values(hintArray.quizzHint3))
            break;
        case 'rebusHints':
            setHint1(Object.values(hintArray.rebusHint1))
            setHint2(Object.values(hintArray.rebusHint2))
            setHint3(Object.values(hintArray.rebusHint3))
            break;
    

        default:

            break;
        }   
    }

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

    const updatePoints = () => {
        return localStorage.getItem("punten");
    }

    React.useEffect( () => {
        getType();
    }, [])

  return(
    <>
        <Popup trigger={<button className='hint-button'> hints</button>} position=" center" modal nested>
            
            <section className='hint-container'>
                <h1 className='hint-header'>hints</h1>
                <section className='hint-container-content'>
                    <Popup trigger ={<button className='hint-button-tab'> 1 </button>} position='bottom left' nested>
                        <section >
                            <Popup trigger={<button className='hint-button-buyhint' onMouseDown={() => buyHint()}> koop hint</button>} position='bottom center' nested>
                                <p className='hint-container-content-hint'>{hint1}</p>
                            </Popup>
                        </section>
                        
                    </Popup>
                    <Popup trigger ={<button className='hint-button-tab'> 2 </button>} position='bottom center' nested>
                        <section>
                        <Popup trigger={<button className='hint-button-buyhint' onMouseDown={() => buyHint()}> koop hint</button>} position='bottom center' nested>
                                <p className='hint-container-content-hint'>{hint2}</p>
                            </Popup>
                        </section>
                    </Popup>
                    <Popup trigger ={<button className='hint-button-tab'> 3 </button>} position='bottom right' nested>
                        <section>
                            <Popup trigger={<button className='hint-button-buyhint' onMouseDown={() => buyHint()}> koop hint</button>} position='bottom center' nested>
                                <section className='hint-container-content'>
                                    <p className='hint-container-content-hint'>{hint3}</p>
                                    {!dragDrop ?  '' : <img className="testImageDragDrop" src={SolutionDragAndDrop} alt="solution drag and drop"></img>}
                                </section>
                            </Popup>
                        </section>
                    </Popup>
                </section>
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