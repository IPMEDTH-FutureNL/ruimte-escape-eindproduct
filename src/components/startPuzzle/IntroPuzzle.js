import React, { Component } from 'react'
import { useNavigate } from "react-router-dom";

const IntroPuzzle = () => {

    const navigate = useNavigate();

    const startPuzzel = () => {
        navigate("/startpuzzel");
    }

    const feitjes = (feit) => {
        if(feit === 1){
            alert("Wist je dat Mercurius de kleinste planeet is!");
        }else if(feit === 2){
            alert("De eerste mens op de maan is Neil Armstrong!");
        }else{

        }
    }

    return(
        <section className="container__intro-startpuzzel">
            <div className="circle" onClick={startPuzzel}></div>
            <div className="circle" onClick={() => feitjes(1)}></div>
            <div className="circle" onClick={() => feitjes(2)}></div>
        </section>
    )
}

export default IntroPuzzle;