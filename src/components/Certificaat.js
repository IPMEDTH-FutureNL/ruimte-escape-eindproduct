import React, { Component } from 'react'
import  certificaat  from '../img/certificaat/certificaat.png';
import "../css/certificaat.css"

export class Certificaat extends Component {
  constructor(props){
      super(props);
  }

  printCertificate = (elem) =>{
    let mywindow = window.open('', '', 'height=794,width=1123');


    mywindow.document.write('<h1>' + localStorage.getItem("playerOne") + ' en ' + localStorage.getItem("playerTwo") + '</h1>');
    mywindow.document.write(document.getElementById(elem).outerHTML);


    mywindow.document.close(); // necessary for IE >= 10
    mywindow.focus(); // necessary for IE >= 10*/
    //mywindow.close();
    mywindow.print();



  }

  render() {
    return (
        <section className="certificaat__container">
            <div id="elem" className="elem">
                <div>
                    <p className="certificaat__punten">Punten: {localStorage.getItem('punten')}</p>
                    <img src={certificaat} className="certificaat"/>
                   
                </div>
            </div>
            <button onClick={() => this.printCertificate('elem')} className="button__print">print</button>
        </section>
    )
  }
}

export default Certificaat;