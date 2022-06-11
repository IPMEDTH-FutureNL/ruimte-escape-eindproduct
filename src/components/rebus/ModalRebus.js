import React from 'react';
import { useNavigate } from "react-router-dom";
import Rebus from '../../img/rebus/rebus-zwart.png';

const ModalRebus = () => {
    const navigate = useNavigate();

    const checkValue = () => {
        const inputValue = document.getElementById("text").value;
        if(inputValue == "we zijn onderweg naar mars"){
            console.log('Code gekraakt!!!')
            let currentPoints = localStorage.getItem("punten");
            let pointsToInt = parseInt(currentPoints);
            pointsToInt = pointsToInt + 30;
            localStorage.setItem("punten", pointsToInt);
            navigate('/puzzelVijf');
        } else {
            // alert('Jammer dat is niet het antwoord :(');
            document.getElementById('invisible').id = "visible";
            // rode tekst onder de input
        }
    }

  return (
    <section className="rebus-flex">
        <img src={Rebus} alt="" className='rebus'/>
        <section className="rebus-code">
            <h2>O! We hebben weer een code nodig, maar dit keer om in de cockpit te komen. Kun jij de rebus oplossen?</h2>
            <p><em>Let op spaties en spelfouten!</em></p>
            <input className="rebus-input input" type="text" id="text" name="text"/> <br/>          
            <button className="rebus-btn btn" onClick={checkValue}> Kraak de code</button>
            <p id="invisible" className="rebus-error">Onjuiste code! Probeer opnieuw of neem een hint</p>
        </section>
    </section>
  )
}

export default ModalRebus