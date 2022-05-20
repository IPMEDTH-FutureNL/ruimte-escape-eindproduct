import React, { useState } from 'react';
import astronaut from'../../img/oplosmatrix/astronaut.png';
import earth from'../../img/oplosmatrix/earth.png';
import moon from'../../img/oplosmatrix/moon.png';
import lock from '../../img/oplosmatrix/lock.png';
import PopUp from '../PopUp';

const Oplosmatrix = () => {
    const [fout, setFout] = useState(0);
    const [text, setText] = useState("");

    const solveLock = (e) => {
        e.preventDefault();

        const lockAnswer = 123;

        let codeString = checkInput();

        if(codeString == lockAnswer){
            setText("Je hebt de code gekraakt");
            let openpopup = document.getElementById("popup");
            openpopup.style.display = "block";
            console.log("aantal foute pogingen " + fout);
        }else{
            setText("Dat was helaas niet goed");
            let openpopup = document.getElementById("popup");
            openpopup.style.display = "block";
            setFout(fout + 1);
        }
    }

    const checkInput = () => {
        let input = document.getElementsByClassName('oplosmatrix__lock-input');
        let lockCode = "";
        let codeString = "";
        
        for(let i = 0; i < input.length; i++){
            lockCode = input[i].value;
            codeString += lockCode.toString();
        }

        return codeString;
    }


    return(
        <section className='note'>
            <section className='note-center'>
                <div className='oplosmatrix-grid'>
                    <div className='grid-item-blank'></div>
                    <div className='grid-item-img'>
                        <img className='icon' alt="earth" src={earth}></img>
                    </div>
                    <div className='grid-item-img'>
                        <img className='icon' alt="moon" src={moon}></img>
                    </div>
                    <div className='grid-item-img'>
                        <img className='icon' alt="astronaut" src={astronaut}></img>
                    </div>
                    <div className='grid-item-color-red'/>
                    <div className='grid-item-number'>1</div>
                    <div className='grid-item-number'>7</div>
                    <div className='grid-item-number'>5</div>
                    <div className='grid-item-color-blue'/>
                    <div className='grid-item-number'>6</div>
                    <div className='grid-item-number'>3</div>
                    <div className='grid-item-number'>9</div>
                    <div className='grid-item-color-yellow'/>
                    <div className='grid-item-number'>2</div>
                    <div className='grid-item-number'>8</div>
                    <div className='grid-item-number'>4</div>
                </div>
            </section>
            <section className="oplosmatrix__lock">
            <img className="oplosmatrix__lock-image" src={lock} alt="oplosmatrix slot" />
                <form className="oplosmatrix__form" onSubmit={(e) => solveLock(e)}>
                    <input className="oplosmatrix__lock-input" placeholder='*'></input>
                    <input className="oplosmatrix__lock-input" placeholder='*'></input>
                    <input className="oplosmatrix__lock-input" placeholder='*'></input>
                    <input type="submit" hidden />
                </form>
            </section>

            <PopUp text={text}></PopUp>
        </section>
    )
}

export default Oplosmatrix