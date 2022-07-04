import React from 'react';
import { useNavigate } from "react-router-dom";
import welcomeToMars from '../../../video/welcomeToMars.mp4'
import IntroSound from '../../../sound/Intro.mp3';
import ipadLandscape from '../../../img/ipad-landscape.svg';

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

            <section className="portrait-modus">
                <h1 className="potrait">Wat leuk dat je de escaperoom wilt spelen!</h1>
                <h2 className="potrait-small">Hiervoor moet je alleen de ipad omdraaien. Zoals de afbeelding.</h2>
                <img src={ipadLandscape} alt="ipad landscape" />
            </section>
            
            <section className="landscape-modus">
                <video autoPlay muted loop id="landingVideo" >
                    <source src={welcomeToMars} type="video/mp4"></source>
                </video>
                <h1 className="video__heading welcome">Welkom bij de missie naar Mars!</h1>
                <h2 className="video__heading doel">Breng jij de astronauten veilig naar Mars?</h2>
                <button className="button primary centerSecond" onClick={() => start()}>Start de missie</button>
            </section>
        </section>

    )
}

export default WelcomeVideo;