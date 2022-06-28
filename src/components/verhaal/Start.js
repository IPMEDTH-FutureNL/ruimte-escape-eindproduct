import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import '../../css/start.css';
import Note from "../../img/gameplayImages/snippets/note.png"
import Astronaut from "../../img/gameplayImages/characters/character2_standard_schuin_mouthopen.svg"
import { FaInfoCircle } from "react-icons/fa";
import { FaAngleRight } from "react-icons/fa";
import TextCloud from '../../img/gameplayImages/snippets/textcloud.png'
// import IntroSound from '../../sound/Intro.mp3';


const Start = () => {
    // const audio = new Audio(IntroSound);
    const [text, setText] = useState("");
    const [playerState, setPlayerState] = useState("false");
    const [count, setCount] = useState(0);
    const navigate = useNavigate();
    
    const showPlayerForm = (number) => {
        let formOne = document.getElementById("container__eenSpeler");
        let formTwo = document.getElementById("container__tweeSpelers");
        if(number === 1){
            setPlayerState("false");
            formOne.style.display = "block";
            formTwo.style.display = "none";
        }else{
            setPlayerState("true");
            formOne.style.display = "none";
            formTwo.style.display = "block";
        }

    }
    
    const players = (e) => {
        e.preventDefault();
        // audio.play();
        let players = getPlayerNames();
        let introduction = document.getElementById("container__introduction");
        let gameplay = document.getElementById("container__gameplay");


        let playerOne = "";
        let playerTwo = "";

        playerOne = players[0];
        playerTwo = players[1];
        localStorage.setItem("playerOne", playerOne);
        localStorage.setItem("playerTwo", playerTwo);

        introduction.style.display = "none";
        gameplay.style.display = "block";
        localStorage.setItem('punten', 30);
  
        if(localStorage.getItem("playerTwo") === "undefined"){
            localStorage.setItem("playerTwo", "");
            setText("Welkom " + localStorage.getItem("playerOne") + " op het ruimteschip! Ik ben Max een van de astronauten op dit schip.")
        }else{
            setText("Welkom " + localStorage.getItem("playerOne") + " en " + localStorage.getItem("playerTwo") + " op het ruimteschip! Ik ben Max een van de astronauten op dit schip.")
        }
       
    }

    const getPlayerNames = () => {

        let input = "";

        if(playerState === "false"){
            input = document.getElementsByClassName("player__form-name-speler");
        }else{
            input = document.getElementsByClassName("player__form-name");
        }
        let players = [];
        let currentPlayer = ""
       

        for(let i = 0; i < input.length; i++){
            currentPlayer = input[i].value;
            players.push(currentPlayer);
        }

        return players;
    }

    const story = (newText) => {
        setCount(count + newText);

        switch(count){
            case 0:
                setText("We zijn bijna klaar om koers te zetten naar Mars!")
                break;
            case 1:
                if(localStorage.getItem("playerTwo") != null){
                    setText("We hebben alleen nog een probleem, de kaart klopt niet. Ik heb je hulp nodig!");
                }else{
                    setText("We hebben alleen nog een probleem, de kaart klopt niet. Ik heb jullie hulp nodig!");
                }
                break;
            case 2:
                navigate('/introPuzzle');
                break;
        }
    }

    return(
        <section className="container">
            <section className="containter__start">
                <section className="container__introduction" id="container__introduction">
                    <img src={Note} alt="note with rules" className="escaperoom__rules-note" draggable="false"></img>
                    <div className="escaperoom__rules">
                        <h2>Welkom bij de missie naar Mars!</h2>
                        <p>Voordat we beginnen nog een paar korte tips!</p>
                        <div className="rule">
                            <button className='rule-hint'> Tips</button>
                            <p className="hint-text">De tip knop, hier kan je tips krijgen over de puzzels de kosten alleen 10 punten!</p>
                        </div>
                        <div className="rule">
                            <div className="rule-clickable" />
                            De groene rondjes in de escaperoom, betekenen dat je erop kan klikken!
                        </div>
                        <div className="rule">
                            Met hoeveel personen zijn jullie?
                        </div>
                        <div className="button__group">
                            <button className="button primary" onClick={() => showPlayerForm(1)}>1</button>
                            <button className="button primary" onClick={() => showPlayerForm(2)}>2</button>
                        </div>
                    </div>


                    <div className="container__eenSpeler" id="container__eenSpeler">
                        <form className="player__form first" onSubmit={(e) => players(e)}>
                            <div className="inputdiv">
                                <label className="player__form-label">Naam</label>
                                <input className="player__form-name-speler"></input>
                            </div>
                            <input type="submit" value="Verder" className='button primary submit'/>
                        </form>
                    </div>

                    <div className="container__tweeSpelers" id="container__tweeSpelers">
                        <form className="player__form second" onSubmit={(e) => players(e)}>
                            <div className="inputdiv">
                                <label className="player__form-label">Naam</label>
                                <input className="player__form-name"></input>
                            </div>
                            <div className="inputdiv">
                                <label className="player__form-label">Naam</label>
                                <input className="player__form-name"></input>
                            </div>
                            <div className="inputdiv">
                                <input type="submit" value="Verder" className='button primary submitSecond'/>
                            </div>
                        </form>
                    </div>
                </section>

                <section className="container__gameplay" id="container__gameplay">
                    <div className="container__astronaut">
                        <div className="astronaut">
                            <img src={Astronaut} alt="astronaut" className="astronaut__image" draggable="false"></img>
                        </div>
                        <div className="textcloud">
                            <img src={TextCloud} alt="tekst balloon" className="textcloud__image" draggable="false"></img>
                            <div className="textcloud__field">
                                <p className="textcloud__text">{text}</p>
                                <button className="continue" onClick={() => story(1)}>Verder</button>
                            </div>
                        </div>
                    </div>
                </section>
            </section>
        </section>
    )
}

export default Start;