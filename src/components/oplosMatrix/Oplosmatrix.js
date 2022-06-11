import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import Hint from '../../components/hint';
import "../../css/oplosMatrix.css"
import astronaut from'../../img/oplosmatrix/astronaut.png';
import earth from'../../img/oplosmatrix/earth.png';
import moon from'../../img/oplosmatrix/moon.png';
import lock from '../../img/oplosmatrix/lock.png';
import PopUp from '../PopUp';
import PostIt from '../../img/oplosmatrix/post-it.png';

const Oplosmatrix = () => {
    const [fout, setFout] = useState(0);
    const [text, setText] = useState("");

    const navigate = useNavigate();

    const navigation = () => {
        navigate("/puzzelDrie");
    }

    const solveLock = (e) => {
        e.preventDefault();

        const lockAnswer = 674;

        let codeString = checkInput();

        if(codeString == lockAnswer){
            setText("Je hebt de code gekraakt");
            let openpopup = document.getElementById("popup");
            openpopup.style.display = "block";
            let currentPoints = localStorage.getItem("punten");
            let pointsToInt = parseInt(currentPoints);
            pointsToInt = pointsToInt + 30;
            localStorage.setItem("punten", pointsToInt);
            navigate('/puzzelDrie');
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
            <Hint type='oplosmatrixHints'/>
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
                        <img className='icon' alt="astronaut" src={astronaut} draggable="false"></img>
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