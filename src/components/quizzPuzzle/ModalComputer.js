import React from 'react'
import Computer from '../../img/quizz/computer.png';

const ModalComputer = () => {
    const checkValue = () => {
        const inputValue = document.getElementById("number").value;
        if(inputValue == "BAC"){
            console.log('Code gekraakt!!!');

        } else if(inputValue == "bac") {
            document.getElementById('invisibleH').id = "visibleH";
            document.getElementById('visible').id = "invisible";
        } else {
            document.getElementById('invisible').id = "visible";
            document.getElementById('visibleH').id = "invisibleH";
        }
    }
  return (
    <section>

      <img className="computer" src={Computer}/>
      <section class="computer-notes-text">
        <h2 class="">Oei! Er is een driecijferige code nodig om in te loggen. <br></br>De code moet wel ergens in de kamer te vinden zijn, denk je niet?</h2>
        <p id="invisible" className="quizz-error">Onjuiste code! Probeer opnieuw of neem een hint</p>
        <p id="invisibleH" className="quizz-error">Heb je de code met hoofdletters ingevoerd? Probeer opnieuw of neem een hint</p>
        <input className="quizz-input" type="text" id="number" name="number"/> <br/>
        <button className="quizz-btn btn" onClick={checkValue}> Kraak de code</button>
      </section>
    </section>
  )
}

export default ModalComputer
