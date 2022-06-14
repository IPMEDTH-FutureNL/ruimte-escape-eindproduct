import React, {useState} from 'react';
import { useNavigate } from "react-router-dom";
import Computer from '../../img/quizz/computer.png';

const ModalComputer = () => {
    const navigate = useNavigate();
    const [wrong, setWrong] = useState(0);

    const checkValue = () => {
        const inputValue = document.getElementById("number").value;
        if(inputValue == "BAC"){
            console.log('Code gekraakt!!!');
            setPoints();
        } else if(inputValue == "bac") {
            document.getElementById('invisibleH').id = "visibleH";
            // document.getElementById('visible').id = "invisible"; DEZE ZIJN NOG BUGGY
            setWrong(wrong + 1);
        } else {
            document.getElementById('invisible').id = "visible";
            // document.getElementById('visibleH').id = "invisibleH"; DEZE ZIJN NOG BUGGY
            setWrong(wrong + 1);
        }
    }

    const setPoints = () => {
      let currentPoints = localStorage.getItem("punten");
      let pointsToInt = parseInt(currentPoints);
      switch(wrong){
          case 0:
            pointsToInt = pointsToInt + 30;
            localStorage.setItem("punten", pointsToInt);
            break;
          case 1:
            pointsToInt = pointsToInt + 25;
            localStorage.setItem("punten", pointsToInt);
            break;
          case 2:
            pointsToInt = pointsToInt + 20;
            localStorage.setItem("punten", pointsToInt);
            break;
          case 3:
            pointsToInt = pointsToInt + 15;
            localStorage.setItem("punten", pointsToInt);
            break;
          case 4:
            pointsToInt = pointsToInt + 10;
            localStorage.setItem("punten", pointsToInt);
            break;
          case 5:
            pointsToInt = pointsToInt + 5;
            localStorage.setItem("punten", pointsToInt);
            break;
          case 6:
            pointsToInt = pointsToInt + 0;
            localStorage.setItem("punten", pointsToInt);
            break;
        }

        navigate('/quizzSucces');
        console.log("aantal foute pogingen " + wrong);
      }
  return (
    <section>

      <img className="computer" src={Computer}/>
      <section class="computer-notes-text">
        <h2 class="">Oei! Er is een driecijferige code nodig om in te loggen. <br></br>De code moet wel ergens in de kamer te vinden zijn, denk je niet?</h2>
        <p id="invisible" className="quizz-error">Onjuiste code! Probeer opnieuw of neem een hint</p>
        <p id="invisibleH" className="quizz-error">Heb je de code met hoofdletters ingevoerd? Probeer opnieuw of neem een hint</p>
        <input className="quizz-input" type="text" id="number" name="number" autocomplete="off" /> <br/>
        <button className="quizz-btn btn" onClick={checkValue}> Kraak de code</button>
      </section>
    </section>
  )
}

export default ModalComputer
