import React, {useState} from 'react';
import { useNavigate } from "react-router-dom";
import landing from '../../../video/landing.mp4'
import "../../../css/video.css"

const LandingOnMars = () => {
    const navigate = useNavigate();
    const [text, setText] = useState(localStorage.getItem("playerTwo") ? "Goed zo! Al het afval is opgeruimd. Houd jullie goed vast, want we gaan nu op Mars landen." : "Goed zo! Al het afval is opgeruimd. Houd je goed vast, want we gaan nu op Mars landen.");
    
    const outro = () => {
        navigate('/outro');
    }

    const showButton = () => {
        let content = document.getElementById("content");
        let button = document.getElementById('landing_ended');

        content.style.display = "none";
        button.style.display = "block";
    }

    return (
        <section className="container__video">
            <video autoPlay muted id="landingVideo" onEnded={() => showButton()}>
                <source src={landing} type="video/mp4"></source>
            </video>
            <div className="content" id="content">
                <h1 className="video__heading">{text}</h1>
            </div>
            <div className="landing_ended" id="landing_ended">
                <button className="button_landing" onClick={() => outro()}>Ga naar de astronauten!</button>
            </div>
        </section>

    )
}

export default LandingOnMars;