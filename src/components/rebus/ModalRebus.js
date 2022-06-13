import React from 'react';
import { useNavigate } from "react-router-dom";
import Rebus from '../../img/rebus/rebus-zwart.png';
import LockSound from '../../sound/Lock.mp3';
import DoorOpen from '../../sound/DoorOpen.mp3';

const ModalRebus = () => {
    const audio = new Audio(LockSound);
    const DoorAudio = new Audio(DoorOpen);

    const navigate = useNavigate();

    const checkValue = () => {
        const inputValue = document.getElementById("text").value;
        if(inputValue == "we zijn onderweg naar mars"){
            console.log('Code gekraakt!!!')
            let currentPoints = localStorage.getItem("punten");
            let pointsToInt = parseInt(currentPoints);
            pointsToInt = pointsToInt + 30;
            localStorage.setItem("punten", pointsToInt);
            console.log('Code gekraakt!!!');
            DoorAudio.play();
            navigate('/puzzelVijf');
        } else {
            document.getElementById('invisible').id = "visible";
            audio.play()
        }
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