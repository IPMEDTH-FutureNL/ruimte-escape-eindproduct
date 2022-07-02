import React from 'react'
import { useNavigate } from "react-router-dom";
import IntroSound from '../../sound/Intro.mp3';

const OvergangPuzzel = () => {

    const navigate = useNavigate();
    const audio = new Audio(IntroSound);
    
    const goToPuzzle = () => {
        audio.pause()
        navigate("/puzzelEen");
    }

    return(
        <section className="container__intro-puzzelEen">
            <div className="intro__container-text" id="text">
                <p className="intro__container-paragraph">
                We willen graag vertrekken naar Mars. Maar de planeten staan verkeerd op de kaart.
                </p>
            </div>
            <button className="button primary center" onClick={() => goToPuzzle()}>Toon kaart!</button>
        </section>
    )
}

export default OvergangPuzzel;