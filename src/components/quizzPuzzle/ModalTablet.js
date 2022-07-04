import React from 'react'
import Tablet from '../../img/quizz/tablet.png'

const ModalTablet = () => {

  const checkValue1 = () => {
    document.getElementById('one').innerHTML = 'A';
  }

  const checkValue2 = () => {
    document.getElementById('one').innerHTML = 'B';
  }

  const checkValue3 = () => {
    document.getElementById('one').innerHTML = 'C';
  }

  const checkValue4 = () => {
    document.getElementById('two').innerHTML = 'A';
  }

  const checkValue5 = () => {
    document.getElementById('two').innerHTML = 'B';
  }

  const checkValue6 = () => {
    document.getElementById('two').innerHTML = 'C';
  }

  const checkValue7 = () => {
    document.getElementById('three').innerHTML = 'A';
  }

  const checkValue8 = () => {
    document.getElementById('three').innerHTML = 'B';
  }

  const checkValue9 = () => {
    document.getElementById('three').innerHTML = 'C';
  }

  return (
    <section className="tablet-section">

      <img className="tablet" src={Tablet} alt="" draggable='false'/>
      <section className="tablet-notes-text">
        <h3 className="text-black tablet-title">Tip: De antwoorden op deze vragen <br></br>zijn allemaal in deze kamer te vinden!</h3>

        <p className="text-black tablet-question">1. Hoeveel planeten heeft ons zonnestelsel?</p>
        <ul className="text-black list">
          <li onClick={checkValue1}>A. 6 </li>
          <li onClick={checkValue2}>B. 8 </li>
          <li onClick={checkValue3}>C. 10</li>
        </ul>

        <p className="text-black tablet-question">2. Welke planeet is het kleinste in ons zonnestelsel?</p>
        <ul className="text-black list">
          <li onClick={checkValue4}>A. Mercurius </li>
          <li onClick={checkValue5}>B. Venus </li>
          <li onClick={checkValue6}>C. Aarde </li>
        </ul>

        <p className="text-black tablet-question">3. Welke planeet is het verst van de zon?</p>
        <ul className="text-black list">
          <li onClick={checkValue7}>A. Saturnus</li>
          <li onClick={checkValue8}>B. Jupiter</li>
          <li onClick={checkValue9}>C. Neptunus</li>
        </ul>
        <section className="quizz-antwoord">
          <p>Code: </p>
          <p id="one">-</p>
          <p id="two">-</p>
          <p id="three">-</p>
          <p id="four"><em>Vul deze code in op de computer.</em></p>
        </section>
      </section>
    </section>
  )
}

export default ModalTablet