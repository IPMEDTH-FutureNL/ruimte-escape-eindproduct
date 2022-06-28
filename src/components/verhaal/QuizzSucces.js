import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import "../../css/start.css"
import AstronautDrie from "../../img/gameplayImages/characters/character1_standard_mouthclosed.svg"
import AstronautVier from "../../img/gameplayImages/characters/character3_standard_mouthopen.svg"

import { FaAngleRight } from "react-icons/fa";
import TextCloud from '../../img/gameplayImages/snippets/textcloud.png'
import RebusBackground  from '../../img/rebus/rebus-background.jpg';

const DragAndDropSucces = () => {
    const [text, setText] = useState(localStorage.getItem("playerTwo") ? "Goedzo " + localStorage.getItem("playerOne") +  ". Jullie hebben de code gekraakt!" : "Goedzo " + localStorage.getItem("playerOne") +  ". Je hebt de code gekraakt!");
    const [count, setCount] = useState(0);
    const navigate = useNavigate();

    const story = (newText) => {
        setCount(count + newText);

        switch(count){
            case 0:
                setText("Ga naar de cockpit om het ruimte-afval op te ruimen.")
                break;
            case 1:
                setText("Samen met alle andere ruimtebedrijven hebben wij afgesproken om een gedeelte van ons geld in een pot te doen.");
                break;
            case 2:
                setText("Met dit geld kunnen wij met zijn allen het ruimte-afval opruimen en de ruimte schoonhouden!");
                break;
            case 3:
                navigate('/puzzelVier');
                break;
        }
    }

    return (
        <div className="background">
             <img src={RebusBackground} alt="" draggable="false" className="rebus-background" />
                <section className="container__gameplay-succes" id="container__gameplay">
                    <div className="container__astronaut">
                        <div className="astronaut">
                            <img src={AstronautDrie} alt="astronaut" className="astronaut__image" draggable="false"></img>
                        </div>
                        <div className="textcloud">
                            <img src={TextCloud} alt="tekst balloon" className="textcloud__image" draggable="false"></img>
                            <div className="textcloud__field">
                                <p className="textcloud__text">{text}</p>
                                <button className="continue" onClick={() => story(1)}>Verder</button>
                            </div>
                        </div>
                        <div className="astronaut__drie">
                            <div className="astronaut">
                                <img src={AstronautVier} alt="astronaut" className="astronaut__image" draggable="false"></img>
                            </div>
                        </div>
                    </div>
                </section>
        </div>
    )
}

export default DragAndDropSucces;