import React, { useState } from 'react'
import { useNavigate } from "react-router-dom";

import PopUp from '../PopUp';

const IntroPuzzle = () => {
    const [fact, setFact] = useState("");
    const navigate = useNavigate();

    const startPuzzel = () => {
        navigate("/introPuzzelEen");
    }

    const feitjes = (feit) => {
        if(feit === 1){
            setFact("Wist je dat Mercurius de kleinste planeet is!");
            let openpopup = document.getElementById("popup");
            openpopup.style.display = "block";
        }else if(feit === 2){
            setFact("De eerste mens op de maan was Neil Armstrong!");
            let openpopup = document.getElementById("popup");
            openpopup.style.display = "block";
        }else{

        }
    }

    return(
        <section className="container__intro-startpuzzel">
            <div className="circle" onClick={startPuzzel}></div>
            <div className="circle" onClick={() => feitjes(1)}></div>
            <div className="circle" onClick={() => feitjes(2)}></div>

            <PopUp text={fact}></PopUp>
        </section>
    )
}

export default IntroPuzzle;