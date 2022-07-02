import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";

import "../../css/outro.css"
import Astronaut from "../../img/gameplayImages/characters/character2_standard_schuin_mouthopen.svg"
import AstronautTwee from "../../img/gameplayImages/characters/character4_standard_schuin_mouthclosed.svg"
import AstronautDrie from "../../img/gameplayImages/characters/character1_standard_mouthclosed.svg"
import AstronautVier from "../../img/gameplayImages/characters/character3_standard_mouthopen.svg"

import TextCloud from '../../img/gameplayImages/snippets/textcloud.png'


const Outro = ({pause}) => {
    const [text, setText] = useState(localStorage.getItem("playerTwo") ? "Welkom op Mars " + localStorage.getItem("playerOne") +  " en " + localStorage.getItem("playerTwo") + ". We zijn veilig aangekomen dankzij jullie hulp!" : "Welkom op Mars " + localStorage.getItem("playerOne") + ". We zijn veilig aangekomen dankzij jouw hulp!");
    const [count, setCount] = useState(0);
    const navigate = useNavigate();

    const story = (newText) => {
        setCount(count + newText);

        switch(count){
            case 0:
                setText(localStorage.getItem("playerTwo") ? "Jullie kunnen jezelf nu echte ruimtevaarders noemen." : "Je kan jezelf nu een echte ruimtevaarder noemen."  )
                break;
            case 1:
                navigate("/certificaat")
                break;
        }
    }

    return (
        <section className="container__outro">
                <section className="container__gameplay-succes" id="container__gameplay">
                    <div className="container__astronaut">
                        <div className="astronaut">
                            <img src={Astronaut} alt="astronaut" className="astronaut__image" draggable="false"></img>
                        </div>
                        <div className="textcloud" id="textcloud">
                            <img src={TextCloud} alt="tekst balloon" className="textcloud__image" draggable="false"></img>
                            <div className="textcloud__field" id="textcloud__field">
                                <p className="textcloud__text">{text}</p>
                                <button className="continue" onClick={() => {story(1); pause();}}>Verder</button>
                            </div>
                        </div>
                        <div className="astronaut__twee">
                        <div className="astronaut">
                            <img src={AstronautTwee} alt="astronaut" className="astronaut__image" draggable="false"></img>
                        </div>
                        </div>
                        <div className="astronaut__drie">
                            <div className="astronaut">
                                <img src={AstronautDrie} alt="astronaut" className="astronaut__image" draggable="false"></img>
                            </div>
                        </div>
                        <div className="astronaut__vier">
                            <div className="astronaut">
                                <img src={AstronautVier} alt="astronaut" className="astronaut__image" draggable="false"></img>
                            </div>  
                        </div>
                    </div>
                </section>
        </section>
    )

}

export default Outro;