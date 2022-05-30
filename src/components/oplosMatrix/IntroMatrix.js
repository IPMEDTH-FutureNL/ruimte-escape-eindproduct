import React from 'react'
import { useNavigate } from "react-router-dom";

const IntroMatrix = () => {

    const navigate = useNavigate();

    const startPuzzel = () => {
        navigate("/puzzelTwee");
    }

    return(
        <section className="container__intro-oplosMatrix">
            <div className="circle-matrix" onClick={startPuzzel}></div>
        </section>
    )
}

export default IntroMatrix;