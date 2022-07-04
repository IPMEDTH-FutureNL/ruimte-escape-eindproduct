import React, { Component } from 'react'
import  certificaat  from '../img/certificaat/certificaat.png';


export class Certificaat extends Component {
  constructor(props){
      super(props);
      this.state = {
        certificaatText: localStorage.getItem("playerTwo") ? localStorage.getItem('playerOne') + " & " + localStorage.getItem('playerTwo') : localStorage.getItem('playerOne')
      }
  }

  componentDidMount(){
    if(localStorage.getItem("playerTwo") === ""){
      let names = document.getElementById("names")
      names.setAttribute("class", "certificaat__playerOne");
    }else{
      let names = document.getElementById("names")
      names.setAttribute("class", "certificaat__playersTwo");
    }
  }

  printCertificate = (elem) =>{
    let mywindow = window.open('', '', 'height=794,width=1123');
    mywindow.document.write(`<head><link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Andika:ital,wght@0,400;0,700;1,400;1,700&display=swap" rel="stylesheet"> </head>`)
    mywindow.document.write(`<body>
                              <style> 
                                .elem{rotate(180deg)} 
                                .certificaat__punten { color: black; font-size: 50px; position: absolute; top: 51vh; left: 38.5vw;   font-family: 'Andika', sans-serif;
                                border-bottom: 2px solid #338dcf;
                                padding-left: 5vw;
                                padding-right: 5vw;} 
                                .certificaat { width: 1123px; height: 794px; border-radius: 25px;} @media print{@page {size: landscape}}
                                .certificaat__playerOne{
                                  color: black;
                                  font-size: 45px;
                                  position: absolute;
                                  top: 77vh;
                                  left: 65vh;
                                  font-family: 'Andika', sans-serif;
                                }
                              
                                .certificaat__playersTwo{
                                  color: black;
                                  font-size: 45px;
                                  position: absolute;
                                  top: 77vh;
                                  left: 40vw;
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
                    <p id="names">{this.state.certificaatText}</p>
                    <img src={certificaat} alt="certificaat escaperoom" className="certificaat"/>
                </div>
            </div>
            <button onClick={() => this.printCertificate('elem')} className="button secondary left middle fixedwidth">Print certificaat</button>
            <button onClick={() => this.toStart()} className="button primary left top fixedwidth">Naar start</button>
        </section>
    )
  }
}

export default Certificaat;