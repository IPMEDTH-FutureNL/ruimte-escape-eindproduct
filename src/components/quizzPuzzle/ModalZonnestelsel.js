import React from 'react'
//planeten
import aarde  from "../../img/planeten/aarde.png"
import jupiter  from "../../img/planeten/jupiter.png"
import mars  from "../../img/planeten/mars.png"
import mercurius  from "../../img/planeten/mercurius.png"
import neptunus  from "../../img/planeten/neptunes.png"
import saturnus  from "../../img/planeten/saturnus.png"
import uranus  from "../../img/planeten/uranus.png"
import venus  from "../../img/planeten/venus.png"

const ModalZonnestelsel = () => {
  return (
    <div className='modal-zonnestelsel-container'>
        <div className="tooltip">
            <img src={mercurius} alt="" className="planeten mercurius" draggable='false'/>
            <span className="tooltiptext">Wist je dat tussen alle planeten mercurius het dichts bij de zon is? </span>
        </div>
        <div className="tooltip">
            <img src={venus} alt="" className="planeten venus" draggable='false'/>
            <span className="tooltiptext">Wist je dat Venus het heetste planeet is in ons zonnestelsel? Het is daar overdag rond de 480 graden celsius!</span>
        </div>
        <div className="tooltip">
            <img src={aarde} alt="" className="planeten aarde" draggable='false'/>
            <span className="tooltiptext">Dit is ons prachtige planeet waar we met zijn allen op wonen!</span>
        </div>
        <div className="tooltip">
            <img src={mars} alt="" className="planeten mars" draggable='false'/>
            <span className="tooltiptext">Wist je dat tussen alle planeten Mars het meeste lijkt op de aarde? Zouden mensen hier in de toekomst op kunnen wonen?</span>
        </div>
        <div className="tooltip">
            <img src={jupiter} alt="" className="planeten jupiter" draggable='false'/>
            <span className="tooltiptext">Wist je dat Jupiter de grootste planeet is in ons zonnestelsel, maar tegelijkertijd ook de lichtste planeet? </span>
        </div>
        <div className="tooltip">
            <img src={saturnus} alt="" className="planeten saturnus" draggable='false'/>
            <span className="tooltiptext">Wist je dat de ring van Saturnus eigenlijk uit honderdduizend kleinere ringen bestaat? </span>
        </div>
        <div className="tooltip">
            <img src={uranus} alt="" className="planeten uranus" draggable='false'/>
            <span className="tooltiptext">Wist je dat Uranus ongeveer 65 keer zo groot is als de aarde?</span>
        </div>
        <div className="tooltip">
            <img src={neptunus} alt="" className="planeten neptunus" draggable='false'/>
            <span className="tooltiptext">Wist je dat Neptunus de verste planeet is die van de zon af staat? Dit betekent dus ook dat het daar ijskoud is met een temperatuur van -218 graden!</span>
        </div>
    </div>
  )
}

export default ModalZonnestelsel