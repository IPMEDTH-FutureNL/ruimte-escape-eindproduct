import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import "../../css/start.css"
import Astronaut from "../../img/gameplayImages/characters/character2_standard_schuin_mouthopen.svg"
import AstronautTwee from "../../img/gameplayImages/characters/character4_standard_schuin_mouthclosed.svg"

import { FaAngleRight } from "react-icons/fa";
import TextCloud from '../../img/gameplayImages/snippets/textcloud.png'
import QuizzBackground from '../../img/quizz/quiz-background.jpg';

const DragAndDropSucces = () => {
       
     
    const [text, setText] = useState("Goed gedaan " + localStorage.getItem("playerOne") +  " en " + localStorage.getItem("playerTwo") + ". Jullie zijn in de computerkamer.");
    const [count, setCount] = useState(0);
    const navigate = useNavigate();

    const story = (newText) => {
        setCount(count + newText);

        switch(count){
            case 1:
                setText("Onze taak is om straks het vuilnis in de ruimte op te ruimen.")
                break;
            case 2:
                setText("Het is niet alleen onze taak om naar mars te gaan, maar ook om de ruimte schoon te houden!");
                break;
            case 3:
                setText("Om straks het vuilnis op te kunnen ruimen heb je een code nodig die ergens op de computer te vinden is in de kamer.");
                break;
            case 4:
                setText("Kunnen jullie op zoek gaan naar deze code?");
                break;
            case 4:
                setText("Nog één klein ding. Vergeten jullie niet de muis te wisselen. Met samenwerken kom je veel verder!");
                break;
            case 5:
            navigate('/puzzelDrie');
                break;
        }
    }

    return (
        <div className="background">
             <img src={QuizzBackground} alt="" draggable="false" className="quiz-background" />
                <section className="container__gameplay-succes" id="container__gameplay">
                    <div className="container__astronaut">
                        <div className="astronaut">
                            <img src={AstronautTwee} alt="astronaut" className="astronaut__image"></img>
                        </div>
                        <div className="textcloud">
                            <img src={TextCloud} alt="tekst balloon" className="textcloud__image"></img>
                            <div className="textcloud__field">
                                <p className="textcloud__text">{text}</p>
                                <FaAngleRight className="continue" onClick={() => story(1)}/>
                            </div>
                        </div>
                        <div className="astronaut__drie">
                            <div className="astronaut">
                                <img src={Astronaut} alt="astronaut" className="astronaut__image"></img>
                            </div>
                        </div>
                    </div>
                </section>
        </div>
    )
}

export default DragAndDropSucces;