import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import RocketLaunchVideo from "../../../video/rocket_takeoff.mp4";
import "../../../css/video.css"

const LaunchVideo = () => {
    const navigate = useNavigate();

    const goToPuzzle = () => {
        navigate("/IntroMatrix")
    }

    return (
        <secition className="container__video">
            <video autoPlay muted id="launchVideo">
                <source src={RocketLaunchVideo} type="video/mp4"></source>
            </video>
            <div class="content">
                <h1 className="video__heading">Onderzoek in de ruimte kost veel geld! Zouden we dit geld beter kunnen gebruiken om iets te doen aan klimaatverandering?</h1>
                <div className="video__buttonGroup">
                    <button id="myBtn" onClick={() => goToPuzzle()}>Ja</button>
                    <button id="myBtn" onClick={() => goToPuzzle()}>Nee</button>
                </div>
            </div>
        </secition>

    )
}

export default LaunchVideo;