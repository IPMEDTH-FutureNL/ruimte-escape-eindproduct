import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import welcomeToMars from '../../../video/welcomeToMars.mp4'
import "../../../css/video.css"
import IntroSound from '../../../sound/Intro.mp3';

const WelcomeVideo = () => {
    const navigate = useNavigate();
    const audio = new Audio(IntroSound);
    audio.volume = 0.3;

    localStorage.setItem("playerOne", "");
    localStorage.setItem("playerTwo", "");

    
    const start = () => {
        audio.play();
        navigate('/start');
    }


    return (
        <section className="container__video">
            <video autoPlay muted loop id="landingVideo" >
                <source src={welcomeToMars} type="video/mp4"></source>
            </video>
  
                <h1 className="video__heading welcome">Welkom bij de missie naar Mars!</h1>
                <h2 className="video__heading doel">Het doel van de missie is het veilig aankomen op Mars!</h2>
                <button className="button_welcome" onClick={() => start()}>Start de missie</button>

        </section>

    )
}

export default WelcomeVideo;