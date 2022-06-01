import React, { useState } from 'react'

const Hint = ({type}) => {
  const [show, setShow] = useState(false);
  const [showButton, setShowButton] = useState(true);
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
      oplosMatrixHint3: 'de oplossing',
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
                {showButton && <button onClick={() => setShowButton(prev => !prev)}> pay me money </button>}
            </section>        
        </section>}
    </>
  );
}

export default Hint