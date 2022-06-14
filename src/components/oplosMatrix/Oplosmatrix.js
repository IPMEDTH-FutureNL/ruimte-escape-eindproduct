import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import HintEscape from '../HintsEscape';
import "../../css/oplosMatrix.css"
import astronaut from'../../img/oplosmatrix/astronaut.png';
import earth from'../../img/oplosmatrix/earth.png';
import moon from'../../img/oplosmatrix/moon.png';
import lock from '../../img/oplosmatrix/lock.png';
import PopUp from '../PopUp';
import PostIt from '../../img/oplosmatrix/post-it.png';

const Oplosmatrix = () => {
    const [text, setText] = useState("");
    const [wrong, setWrong] = useState(0);

    const navigate = useNavigate();

    const navigation = () => {
        navigate("/oplosmatrixSucces");
    }

    const solveLock = (e) => {
        e.preventDefault();

        const lockAnswer = 674;

        let codeString = checkInput();

        if(codeString == lockAnswer){
            setText("Je hebt de code gekraakt");
            let openpopup = document.getElementById("popup");
            openpopup.style.display = "block";
            setPoints();
        }else{
            setText("Dat was helaas niet goed");
            let openpopup = document.getElementById("popup");
            openpopup.style.display = "block";
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

        navigate('/oplosmatrixSucces');
        console.log("aantal foute pogingen " + wrong);
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
            <HintEscape type='oplosmatrixHints'/>
            <section className='note-center'>
                <div className='oplosmatrix-grid'>
                    <div className='grid-item-blank'></div>
                    <div className='grid-item-img'>
                        <img className='icon' alt="earth" src={earth} draggable="false"></img>
                    </div>
                    <div className='grid-item-img'>
                        <img className='icon' alt="moon" src={moon} draggable="false"></img>
                    </div>
                    <div className='grid-item-img'>
                        <img className='icon astronautMatrix' alt="astronaut" src={astronaut} draggable="false"></img>
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
            <img className="oplosmatrix__lock-image" src={lock} alt="oplosmatrix slot" draggable="false"/>
                <form className="oplosmatrix__form" onSubmit={(e) => solveLock(e)}>
                    <input className="oplosmatrix__lock-input" placeholder='*'></input>
                    <input className="oplosmatrix__lock-input" placeholder='*'></input>
                    <input className="oplosmatrix__lock-input" placeholder='*'></input>
                    <input className="oplosmatrix__lock-button" type="submit" value="Open" />
                </form>
            </section>
            <section className="container__postit">
                <img src={PostIt} alt="postIt" className="postIt__image" draggable="false"></img>
                <p className="postIt__text">
                        We hebben verschillende<span className="postIt__red"> planeten </span>
                        in ons zonnestelsel, 
                        op aarde zien wij bijna
                        iedere avond de <span className="postIt__blue">maan</span>. 
                        Daarbij zijn wij met een aantal
                        <span className="postIt__yellow"> astronauten </span> op het schip
                </p>
            </section>

            <PopUp text={text} onClick={() => navigation()}></PopUp>
        </section>
    )
}

export default Oplosmatrix