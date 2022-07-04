import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";

import Astronaut from "../../img/gameplayImages/characters/character1_standard_mouthclosed.svg"

import TextCloud from '../../img/gameplayImages/snippets/textcloud.png'

const IntroMatrix = () => {
    const [text, setText] = useState(localStorage.getItem("playerTwo") ? "We zijn opgestegen " + localStorage.getItem("playerOne") +  " en " + localStorage.getItem("playerTwo") + "! Wat goed dat ik jullie hier tegen kom!" : "We zijn opgestegen " + localStorage.getItem("playerOne") + "! Wat goed dat ik je hier tegen kom!");
    const [count, setCount] = useState(0);
    const navigate = useNavigate();

    const startPuzzel = () => {
        navigate('/puzzelTwee');
    }


    const story = (newText) => {
        setCount(count + newText);

        switch(count){
            case 0:
                setText("We zijn onderweg naar Mars voor onderzoek!");
                break;
            case 1:
                setText("Onderzoek in de ruimte is belangrijk. Door onderzoek in de ruimte hebben wij schoon drinkwater op aarde.");
                break;
            case 2:
                setText("Ik heb alleen mijn spullen nodig om verder te gaan. Het probleem is dat ik de deur niet open krijg.");
                break;
            case 3:
                setText(localStorage.getItem("playerTwo") ? "Kunnen jullie mij helpen?" : "Kan jij mij helpen?");
                break;
            case 4:
                let matrixSection = document.getElementById('container__gameplay-matrix');
                let circleMatrix = document.getElementById("circle-matrix");

                matrixSection.style.display = "none";
                circleMatrix.style.display = "block";
                break;
            default:
                break;
        }
    }
    return(
        <section className="container__intro-oplosMatrix">
            <div className="circle-matrix" id="circle-matrix" onClick={startPuzzel}></div>

            <section className="container__gameplay-matrix" id="container__gameplay-matrix">
                    <div className="container__astronaut">
                        <div className="astronaut">
                            <img src={Astronaut} alt="astronaut" className="astronaut__image" draggable="false"></img>
                        </div>
                        <div className="textcloud">
                            <img src={TextCloud} alt="tekst balloon" className="textcloud__image" draggable="false"></img>
                            <div className="textcloud__field">
                                <p className="textcloud__text">{text}</p>
                                <button className="button primary left" onClick={() => story(1)}>Verder</button>
                            </div>
                        </div>
                    </div>
            </section>
        </section>
    )
}

export default IntroMatrix;