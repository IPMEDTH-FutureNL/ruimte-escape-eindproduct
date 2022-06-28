import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";

import "../../css/start.css"
import Astronaut from "../../img/gameplayImages/characters/character1_standard_mouthclosed.svg"

import TextCloud from '../../img/gameplayImages/snippets/textcloud.png'

const IntroMatrix = () => {
    const [text, setText] = useState("We zijn opgestegen " + localStorage.getItem("playerOne") +  " en " + localStorage.getItem("playerTwo") + "! Wat goed dat ik jullie hier tegen kom!");
    const [count, setCount] = useState(0);
    const navigate = useNavigate();

    const startPuzzel = () => {
        navigate('/puzzelTwee');
    }


    const story = (newText) => {
        setCount(count + newText);

        switch(count){
            case 0:
                setText("Het lukt mij niet om de deur te openen. Hiervoor moet ik een code invullen.")
                break;
            case 1:
                setText("Kunnen jullie mij hierbij helpen?");
                break;
            case 2:
                let matrixSection = document.getElementById('container__gameplay-matrix');
                let circleMatrix = document.getElementById("circle-matrix");

                matrixSection.style.display = "none";
                circleMatrix.style.display = "block";
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
                                <button className="continue" onClick={() => story(1)}>Verder</button>
                            </div>
                        </div>
                    </div>
            </section>
        </section>
    )
}

export default IntroMatrix;