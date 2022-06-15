import React, { Component } from 'react'
import  certificaat  from '../img/certificaat/certificaat.png';
import "../css/certificaat.css"

export class Certificaat extends Component {
  constructor(props){
      super(props);
  }

  printCertificate = (elem) =>{
    let mywindow = window.open('', '', 'height=794,width=1123');
    mywindow.document.write(`<head><link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Andika:ital,wght@0,400;0,700;1,400;1,700&display=swap" rel="stylesheet"> </head>`)
    mywindow.document.write(`<body>
                              <style> 
                                .elem{rotate(180deg)} 
                                .certificaat__punten { color: black; font-size: 50px; position: absolute; top: 50vh; left: 45.5vw;   font-family: 'Andika', sans-serif;} 
                                .certificaat { width: 1123px; height: 794px; border-radius: 25px;} @media print{@page {size: landscape}}
                                .certificaat__playerOne{
                                  color: black;
                                  font-size: 45px;
                                  position: absolute;
                                  top: 76vh;
                                  left: 30vh;
                                  font-family: 'Andika', sans-serif;
                                }
                              
                                .certificaat__playerTwo{
                                  color: black;
                                  font-size: 45px;
                                  position: absolute;
                                  top: 76vh;
                                  left: 88vh;
                                  font-family: 'Andika', sans-serif;
                                }
                              </style> `)

    mywindow.document.write(document.getElementById(elem).outerHTML);
    mywindow.document.write('<body/>');
    mywindow.document.close(); 
    mywindow.focus(); 
    mywindow.print();
  }

  toStart = () => {
    window.location.href = ('/');
  }

  render() {
    return (
        <section className="certificaat__container">
            <div id="elem" className="elem">
                <div>
                    <p className="certificaat__punten">Punten: {localStorage.getItem('punten')}</p>
                    <p className="certificaat__playerOne">{localStorage.getItem('playerOne')}</p>
                    <p className="certificaat__playerTwo">{localStorage.getItem('playerTwo')}</p>
                    <img src={certificaat} className="certificaat"/>
                   
                </div>
            </div>
            <button onClick={() => this.printCertificate('elem')} className="button__print">Print certificaat</button>
            <button onClick={() => this.toStart()} className="button__start">Naar start</button>
        </section>
    )
  }
}

export default Certificaat;