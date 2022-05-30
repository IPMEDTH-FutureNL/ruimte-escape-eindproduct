import React, { useState } from 'react';
import '../../css/start.css';
import Note from "../../img/gameplayImages/snippets/note.png"
import Astronaut from "../../img/gameplayImages/characters/character2_standard_schuin_mouthopen.svg"
import { FaInfoCircle } from "react-icons/fa";
import { FaAngleRight } from "react-icons/fa";
import TextCloud from '../../img/gameplayImages/snippets/textcloud.png'


const Start = () => {

    const players = (e) => {
        e.preventDefault();
        
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

    }

    const getPlayerNames = () => {
        let input = document.getElementsByClassName("player__form-name");
        let players = [];
        let currentPlayer = ""
       

        for(let i = 0; i < input.length; i++){
            currentPlayer = input[i].value;
            players.push(currentPlayer);
        }

        return players;
    }

    return(
        <section className="container">

            <section className="containter__start">
                <section className="container__introduction" id="container__introduction">
                    <img src={Note} alt="note with rules" className="escaperoom__rules-note"></img>
                    <div className="escaperoom__rules">
                        <h2>Welkom bij de ruimte-escape</h2>
                        <p>Voordat we beginnen nog een paar korte tips!</p>
                        <div className="rule">
                            <FaInfoCircle className="rule-hint" />
                            De hint icoon, hier kan je hints krijgen over de puzzels!
                        </div>
                        <div className="rule">
                            <FaAngleRight className="rule-text" />
                            Wanneer de pijl in een tekst balloon is geplaatst kan je hiermee verder in het verhaal!
                        </div>
                        <div className="rule">
                            <div className="rule-clickable" />
                            De groene rondjes in binnen de escaperoom, betekenen dat je erop kan klikken!
                        </div>
                        
                    </div>
                    <form className="player__form" onSubmit={(e) => players(e)}>
                        <div className="inputdiv">
                            <label className="player__form-label">Speler 1</label>
                            <input className="player__form-name"></input>
                        </div>
                        <div className="inputdiv">
                            <label className="player__form-label">Speler 2</label>
                            <input className="player__form-name"></input>
                        </div>
                        <div className="inputdiv">
                            <input type="submit" value="Verder" className='player__form-submit'/>
                        </div>
                    </form>
                </section>

                <section className="container__gameplay" id="container__gameplay">
                    <div className="container__astronaut">
                        <div className="astronaut">
                            <img src={Astronaut} alt="astronaut" className="astronaut__image"></img>
                        </div>
                        <div className="textcloud">
                            <img src={TextCloud} alt="tekst balloon" className="textcloud__image"></img>
                        </div>
                    </div>
                </section>
            </section>
        </section>
    )
}

export default Start;