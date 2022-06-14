import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import "../../css/start.css"
import Astronaut from "../../img/gameplayImages/characters/character2_standard_schuin_mouthopen.svg"
import AstronautTwee from "../../img/gameplayImages/characters/character4_standard_schuin_mouthclosed.svg"
import AstronautDrie from "../../img/gameplayImages/characters/character1_standard_mouthclosed.svg"
import AstronautVier from "../../img/gameplayImages/characters/character3_standard_mouthopen.svg"

import { FaAngleRight } from "react-icons/fa";
import TextCloud from '../../img/gameplayImages/snippets/textcloud.png'
import Spacecraft from '../../sound/Spacecraft.mp3';

const DragAndDropSucces = () => {
    const [text, setText] = useState("Dankje " + localStorage.getItem("playerOne") +  " en " + localStorage.getItem("playerTwo") + " nu zijn we helemaal klaar om naar Mars te vertrekken.");
    const [count, setCount] = useState(0);
    const navigate = useNavigate();
    const audio = new Audio(Spacecraft);
    const story = (newText) => {
        setCount(count + newText);

        switch(count){
            case 1:
                setText("De bemanning is compleet! Dit zijn Tim, Kasper en Lotte.")
                break;
            case 2:
                audio.play();
                setText("Het is nu tijd om te vertrekken naar Mars!");
                break;
            case 3:
                navigate('/introMatrix');
                break;
        }
    }

    return (
        <section className="container__draganddropsucces">
                <section className="container__gameplay-succes" id="container__gameplay">
                    <div className="container__astronaut">
                        <div className="astronaut">
                            <img src={Astronaut} alt="astronaut" className="astronaut__image"></img>
                        </div>
                        <div className="textcloud">
                            <img src={TextCloud} alt="tekst balloon" className="textcloud__image"></img>
                            <div className="textcloud__field">
                                <p className="textcloud__text">{text}</p>
                                <FaAngleRight className="continue" onClick={() => story(1)}/>
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
        </section>
    )
}

export default DragAndDropSucces;