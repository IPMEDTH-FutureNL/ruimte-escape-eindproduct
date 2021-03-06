import React, {useState} from 'react';
import { useNavigate } from "react-router-dom";
import Computer from '../../img/quizz/computer.png';
import Unlock from '../../sound/unlock.wav';
import Lock from '../../sound/Error.mp3';

const ModalComputer = () => {
    const navigate = useNavigate();
    const [wrong, setWrong] = useState(0);

    const checkValue = () => {
        const inputValue = document.getElementById("number").value;
        if(inputValue == "BAC"){
            const audio = new Audio(Unlock);
            audio.play();
            setPoints();
        } else if(inputValue == "bac") {
            const audio = new Audio(Lock);
            audio.play();
            document.getElementById('invisibleH').id = "visibleH";
            // document.getElementById('visible').id = "invisible"; DEZE ZIJN NOG BUGGY
            setWrong(wrong + 1);
        } else {
            const audio = new Audio(Lock);
            audio.play();
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
          default:
            break;
        }
        navigate('/quizzSucces');
      }
  return (
    <section>

      <img className="computer" src={Computer} draggable='false' alt=""/>
      <section className="computer-notes-text">
        <h2 className="">Oei! Er is een driecijferige code nodig om in te loggen. <br></br>De code moet wel ergens in de kamer te vinden zijn, denk je niet?</h2>
        <p id="invisible" className="quizz-error">Onjuiste code! Probeer opnieuw of neem een hint</p>
        <p id="invisibleH" className="quizz-error">Heb je de code met hoofdletters ingevoerd? Probeer opnieuw of neem een hint</p>
        <input className="quizz-input" type="text" id="number" name="number" autoComplete="off" /> <br/>
        <button className="button primary centerSecond" onClick={checkValue}> Kraak de code</button>
      </section>
    </section>
  )
}

export default ModalComputer
