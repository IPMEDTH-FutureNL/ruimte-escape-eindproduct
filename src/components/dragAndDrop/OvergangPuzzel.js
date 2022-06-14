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

    const video = () => {
        let videoPlaceholder = document.getElementById("video");
        let textPlaceholder = document.getElementById("text");
        videoPlaceholder.style.display = "block";
        textPlaceholder.style.display = "none";
    }

    return(
        <section className="container__intro-puzzelEen">
            <div className="intro__container-text" id="text">
                <p className="intro__container-paragraph">
                    We willen vertrekken naar Mars, maar de planeten staan niet goed.
                    Kan jij de kaart oplossen?
                </p>
                <button className="button primary" onClick={() => goToPuzzle()}>Toon kaart!</button>
            </div>
        </section>
    )
}

export default OvergangPuzzel;