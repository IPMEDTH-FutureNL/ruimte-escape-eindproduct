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
        <img src={mercurius} alt="" className="planeten mercurius"/>
        <img src={venus} alt="" className="planeten venus"/>
        <img src={aarde} alt="" className="planeten aarde"/>
        <img src={mars} alt="" className="planeten mars"/>
        <img src={jupiter} alt="" className="planeten jupiter"/>
        <img src={saturnus} alt="" className="planeten saturnus"/>
        <img src={uranus} alt="" className="planeten uranus"/>
        <img src={neptunus} alt="" className="planeten neptunus"/>
    </div>
  )
}

export default ModalZonnestelsel