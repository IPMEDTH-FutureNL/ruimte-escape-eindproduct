import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import "../../css/start.css"
import Astronaut from "../../img/gameplayImages/characters/character3_standard_mouthopen.svg"

import TextCloud from '../../img/gameplayImages/snippets/textcloud.png'

const ClickingGameIntro = () => {
       
     
    const [text, setText] = useState("Het zwevende ruimte-afval is niet veilig. Het zorgt ervoor dat we niet kunnen landen!");
    const [count, setCount] = useState(0);
    const navigate = useNavigate();

    const story = (newText) => {
        setCount(count + newText);

        switch(count){
            case 0:
                setText("Ruimte-afval bestaat uit: kapotte satellieten en lege brandstoftanks. Laten we dit samen opruimen!");
                break;
            case 1:
                navigate('/puzzelVijf');
                break;
        }
    }

    return (
        <div className="container__draganddropsucces">
                <section className="container__gameplay-succes" id="container__gameplay">
                    <div className="container__astronaut">
                        <div className="astronaut">
                            <img src={Astronaut} alt="astronaut" className="astronaut__image"></img>
                        </div>
                        <div className="textcloud">
                            <img src={TextCloud} alt="tekst balloon" className="textcloud__image"></img>
                            <div className="textcloud__field">
                                <p className="textcloud__text">{text}</p>
                                <button className="continue" onClick={() => story(1)}>Verder</button>
                            </div>
                        </div>
                    </div>
                </section>
        </div>
    )
}

export default ClickingGameIntro;