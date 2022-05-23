import React from 'react'
import Computer from '../../img/quizz/computer.png';

const ModalComputer = () => {
    const checkValue = () => {
        const inputValue = document.getElementById("number").value;
        if(inputValue == "BAC"){
            console.log('Code gekraakt!!!');

        } else if(inputValue == "bac") {
            alert('Heb je de code met hoofdletters ingevoerd?');
            // rode tekst onder de input
        } else {
            alert('Jammer dat is niet de code :(');
            // rode tekst onder de input
        }
    }
  return (
    <section>

      <img className="computer" src={Computer}/>
      <section class="computer-notes-text">
        <h2 class="">Oei! Er is een driecijferige code nodig om in te loggen. <br></br>De code moet wel ergens in de kamer te vinden zijn, denk je niet?</h2>
        <input className="modal-lock-section-el input" type="text" id="number" name="number"/> <br/>
        <button className="modal-lock-section-el btn" onClick={checkValue}> Kraak de code</button>
       

      </section>
    </section>
  )
}

export default ModalComputer
