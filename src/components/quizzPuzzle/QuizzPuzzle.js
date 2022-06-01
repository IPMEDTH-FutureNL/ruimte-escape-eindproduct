import React, {useState} from 'react';
import Modal from 'react-modal';
import '../../css/quizz.css';
import Hint from '../Hint';
import ModalZonnestelsel from './ModalZonnestelsel';
import ModalComputer from './ModalComputer';
import ModalTablet from './ModalTablet.js';
import QuizzBackground from '../../img/quizz/quiz-background.jpg';
import Zonnestelsel from '../../img/quizz/zonnestelsel.png';
import Computer from '../../img/quizz/computer.png';
import Tablet from '../../img/quizz/tablet.png';

const QuizzPuzzle = () => {
    // Z Modal = modal zonnestelsel
    const [ZmodalIsOpen, setZModalIsOpen] = useState(false);

    const setZModalIsOpenToTrue =()=>{
        setZModalIsOpen(true)
    }

    const setZModalIsOpenToFalse =()=>{
        setZModalIsOpen(false)
    }

    // C modal = modal computer
    const [CmodalIsOpen, setCModalIsOpen] = useState(false);

    const setCModalIsOpenToTrue =()=>{
        setCModalIsOpen(true)
    }

    const setCModalIsOpenToFalse =()=>{
        setCModalIsOpen(false)
    }

    // T modal = modal tablet
    const [TmodalIsOpen, setTModalIsOpen] = useState(false);

    const setTModalIsOpenToTrue =()=>{
        setTModalIsOpen(true)
    }

    const setTModalIsOpenToFalse =()=>{
        setTModalIsOpen(false)
    }

    const exit = () => {
        document.getElementById('open').id = "exit";
    }

  return (
    <section>
        <Hint type="quizzHints" />
        <div className="background">
            <img src={QuizzBackground} alt="" className="quiz-background" />
            <img src={Tablet} alt="" onClick={setTModalIsOpenToTrue} className="quiz-tablet"  />
            <img src={Zonnestelsel} alt="" onClick={setZModalIsOpenToTrue} className="quiz-zonnestelsel"/>
            <img src={Computer} alt="" onClick={setCModalIsOpenToTrue} className="quiz-computer" />
            <div className="quiz-intro" id="open">
                <p className="text-white">Je bent in de computerkamer! Onze taak is om straks het vuilnis in de ruimte op te ruimen. Het is niet alleens onze taak om naar mars te gaan, maar ook om de ruimte schoon te houden! Om straks het vuilnis op te kunnen ruimen heb je een code nodig die ergens op de computer te vinden is in de kamer. Kunnen jullie op zoek gaan naar deze code?</p>
                <button className="quizz-btn exit-btn btn" onClick={exit}> Ga verder</button>
            </div>
            

            <Modal className="modal-zonnestelsel" isOpen={ZmodalIsOpen}>
                <button onClick={setZModalIsOpenToFalse}>x</button>
                <ModalZonnestelsel/>
            </Modal>
            <Modal className="modal-computer" isOpen={CmodalIsOpen}>
                <button onClick={setCModalIsOpenToFalse}>x</button>
                <ModalComputer/>
            </Modal>
            <Modal className="modal-tablet" isOpen={TmodalIsOpen}>
                <button onClick={setTModalIsOpenToFalse}>x</button>
                <ModalTablet/>
            </Modal>
        </div>  
    </section>
  )
}

export default QuizzPuzzle