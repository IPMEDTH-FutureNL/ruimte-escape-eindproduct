import React, { Component } from 'react'

export class PopUp extends Component {
  constructor(props){
      super(props);
  }

  closePopUp = (e) => {
    e.preventDefault();
    let closepopup = document.getElementById("popup");
    closepopup.style.display = "none";

    if(this.props.navigate === "true"){
      window.location.href = "/";
    }

    if(this.props.print === "true"){
      this.printCertificate("elem");
    }
  }

  render() {
    return (
        <div className="pop-up" id="popup">
            <p className="pop-up-text"> {this.props.text} </p>
            <button className="button primary center" onClick={(e) => this.closePopUp(e)}>Verder!</button>
        </div>
    )
  }
}

export default PopUp