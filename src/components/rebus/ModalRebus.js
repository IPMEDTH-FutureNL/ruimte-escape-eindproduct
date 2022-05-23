import React from 'react';
import Rebus from '../../img/rebus/rebus.png';

const ModalRebus = () => {

    const checkValue = () => {
        const inputValue = document.getElementById("text").value;
        if(inputValue == "we zijn onderweg naar mars"){
            console.log('Code gekraakt!!!');
        } else {
            alert('Jammer dat is niet het antwoord :(');
            // rode tekst onder de input
        }
    }

  return (
    <section className="rebus-flex">
        <img src={Rebus} alt="" className='rebus'/>
        <section className="rebus-code">
            <h2 class="">De deur heeft een aparte slot! Kun jij de rebus oplossen en invoeren? Let op spaties en spelfouten!</h2>
            <input className="modal-lock-section-el input" type="text" id="text" name="text"/> <br/>
            <button className="modal-lock-section-el btn" onClick={checkValue}> Kraak de code</button>
        </section>
    </section>
  )
}

export default ModalRebus