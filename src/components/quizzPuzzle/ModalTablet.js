import React from 'react'
import Tablet from '../../img/quizz/tablet.png'

const ModalTablet = () => {
  return (
    <section>

      <img className="tablet" src={Tablet}/>
      <section class="tablet-notes-text">
        <h2 class="text-black">Tip: De antwoorden op deze vragen <br></br>zijn allemaal in deze kamer te vinden!</h2>

        <p class="text-black">1. Hoeveel planeten heeft ons zonnestelsel?</p>
        <ul class="text-black list">
          <li>A. 6 </li>
          <li>B. 8 </li>
          <li>C. 10</li>
        </ul>

        <p class="text-black">2. Welke planeet is het kleinste in ons zonnestelsel?</p>
        <ul class="text-black list">
          <li>A. Mercurius </li>
          <li>B. Venus </li>
          <li>C. Aarde </li>
        </ul>

        <p class="text-black">3. Welke planeet is het verst van de zon?</p>
        <ul class="text-black list">
          <li>A. Saturnus</li>
          <li>B. Jupiter</li>
          <li>C. Neptunus</li>
        </ul>

      </section>
    </section>
  )
}

export default ModalTablet