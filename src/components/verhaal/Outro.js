import React, { useState } from 'react';

import "../../css/outro.css"
import Astronaut from "../../img/gameplayImages/characters/character2_standard_schuin_mouthopen.svg"
import AstronautTwee from "../../img/gameplayImages/characters/character4_standard_schuin_mouthclosed.svg"
import AstronautDrie from "../../img/gameplayImages/characters/character1_standard_mouthclosed.svg"
import AstronautVier from "../../img/gameplayImages/characters/character3_standard_mouthopen.svg"

import { FaAngleRight } from "react-icons/fa";
import TextCloud from '../../img/gameplayImages/snippets/textcloud.png'

import PopUp from '../PopUp';

const Outro = ({pause}) => {
    const [text, setText] = useState("Welkom op Mars " + localStorage.getItem("playerOne") +  " en " + localStorage.getItem("playerTwo") + " we zijn veilig aangekomen dankzij jullie hulp!");
    const [count, setCount] = useState(0);
    

    const story = (newText) => {
        setCount(count + newText);

        switch(count){
            case 1:
                setText("Jullie kunnen jullie zelf nu echte ruimtevaarders noemen!")
                break;
            case 2:
                let openpopup = document.getElementById("popup");
                openpopup.style.display = "block";
                let textCloud = document.getElementById("textcloud");
                textCloud.style.display = "none";
                break;
        }
    }

    return (
        <section className="container__outro">
                <section className="container__gameplay-succes" id="container__gameplay">
                    <div className="container__astronaut">
                        <div className="astronaut">
                            <img src={Astronaut} alt="astronaut" className="astronaut__image"></img>
                        </div>
                        <div className="textcloud" id="textcloud">
                            <img src={TextCloud} alt="tekst balloon" className="textcloud__image"></img>
                            <div className="textcloud__field" id="textcloud__field">
                                <p className="textcloud__text">{text}</p>
                                <FaAngleRight className="continue" onClick={() => {story(1); pause();}}/>
                            </div>
                        </div>
                        <div className="astronaut__twee">
                        <div className="astronaut">
                            <img src={AstronautTwee} alt="astronaut" className="astronaut__image"></img>
                        </div>
                        </div>
                        <div className="astronaut__drie">
                            <div className="astronaut">
                                <img src={AstronautDrie} alt="astronaut" className="astronaut__image"></img>
                            </div>
                        </div>
                        <div className="astronaut__vier">
                            <div className="astronaut">
                                <img src={AstronautVier} alt="astronaut" className="astronaut__image"></img>
                            </div>  
                        </div>
                    </div>
                </section>

                <PopUp text="Jullie hebben de escaperoom met succes gespeeld! Bedankt voor jullie inzet!" navigate="true"></PopUp>
        </section>
    )

}

export default Outro;