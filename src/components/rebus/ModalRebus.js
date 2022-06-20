import React, {useState} from 'react';
import { useNavigate } from "react-router-dom";
import Rebus from '../../img/rebus/rebus-zwart.png';
import DoorOpen from '../../sound/DoorOpen.mp3';
import Error from '../../sound/Error.mp3';

const ModalRebus = () => {
    const DoorAudio = new Audio(DoorOpen);
    const [wrong, setWrong] = useState(0);
    const navigate = useNavigate();

    const checkValue = () => {
        const inputValue = document.getElementById("text").value;
        if(inputValue == "we zijn onderweg naar mars"){
            console.log('Code gekraakt!!!')
            setPoints();
        } else {
            const error = new Audio(Error);
            error.play();
            document.getElementById('invisible').id = "visible";
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

        DoorAudio.play();
        navigate('/puzzelVijfIntro');
        console.log("aantal foute pogingen " + wrong);
    }


  return (
    <section className="rebus-flex">
        <img src={Rebus} alt="" draggable="false" className='rebus'/>
        <section className="rebus-code">
            <h2>O! We hebben weer een code nodig, maar dit keer om in de cockpit te komen. Kun jij de rebus oplossen?</h2>
            <p><em>Let op spaties en spelfouten!</em></p>
            <input className="rebus-input input" type="text" id="text" name="text" autocomplete="off"/> <br/>          
            <button className="rebus-btn btn" onClick={checkValue}> Kraak de code</button>
            <p id="invisible" className="rebus-error">Onjuiste code! Probeer opnieuw of neem een hint</p>
        </section>
    </section>
  )
}

export default ModalRebus