import React, {useState} from 'react';
import { useNavigate } from "react-router-dom";
import RocketLaunchVideo from "../../../video/rocket_takeoff.mp4";

const LaunchVideo = () => {
    const navigate = useNavigate();
    const [text, setText] = useState('Onderzoek in de ruimte kost 42 miljard euro per jaar! Zouden we dit geld beter kunnen gebruiken om iets te doen aan klimaatverandering?');
    const [value, setValue] = useState(0)

    const goToPuzzle = () => {
        navigate("/IntroMatrix")
    }
    
    const showSlider = () => {
        let hideButtons = document.getElementById('video__buttonGroup');
        let slider = document.getElementById('slider-group');

        slider.style.display = "block";
        hideButtons.style.display = "none";
        setText(localStorage.getItem("playerTwo") ? "Hoeveel geld willen jullie uitgeven aan onderzoek in de ruimte?" : "Hoeveel geld wil jij uitgeven aan onderzoek in de ruimte?")
    }
    const setRange = (e) => {
        let rangeValue = document.querySelector('#range');
        let outputRangeValue = document.getElementById("rangeValue");
        outputRangeValue.innerHTML = rangeValue.value + " miljard euro";
        setValue(e.target.value);

    }

    return (
        <section className="container__video">
            <video autoPlay muted id="launchVideo">
                <source src={RocketLaunchVideo} type="video/mp4"></source>
            </video>
            <div className="content">
                <h1 className="video__heading">{text}</h1>
                <div className="video__buttonGroup" id="video__buttonGroup">
                    <button id="myBtn" onClick={() => showSlider()}>Ja</button>
                    <button id="myBtn" onClick={() => goToPuzzle()}>Nee</button>
                </div>
                <div className="slider-group" id="slider-group">
                    <div className="slider">
                        <label className="slider-label">0 euro</label>
                        <input type="range" id="range" min="0" max="42" step="1" value={value} onChange={(e) => setRange(e)}></input>
                        <label className="slider-label">42 miljard euro</label>
                    </div>
                    <div id="rangeValue">0 euro</div>
                    <button className="button primary bottom" onClick={() => goToPuzzle()}>Verder</button>
                </div>
            </div>
        </section>

    )
}

export default LaunchVideo;