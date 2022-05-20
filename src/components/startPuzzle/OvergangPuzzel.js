import React from 'react'
import { useNavigate } from "react-router-dom";

const OvergangPuzzel = () => {

    const navigate = useNavigate();
    
    const goToPuzzle = () => {
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
                    We willen gaan opstijgen, maar
                    de planeten op de kaart
                    staan niet in de goede volgorde.
                    Aan jou de taak om ze juist op de kaart
                    te zetten!
                </p>
                <button className="button primary" onClick={() => video()}>Toon kaart!</button>
            </div>
            <div className="intro__container-video" id="video">
                <div className="intro__container-videoPlaceholder">
                    <p className="placeHolder">Placeholder voor video eventueel</p>
                </div>
                <button className="button primary" onClick={() => goToPuzzle()}>Naar puzzel!</button>
            </div>
        </section>
    )
}

export default OvergangPuzzel;