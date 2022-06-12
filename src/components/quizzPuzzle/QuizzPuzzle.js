import React, {useState} from 'react';
import Modal from 'react-modal';
import '../../css/quizz.css';
import HintEscape from '../HintsEscape';
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
        <HintEscape type="quizzHints" />
        <div className="background">
            <img src={QuizzBackground} alt="" draggable="false" className="quiz-background" />
            <img src={Tablet} alt="" draggable="false" onClick={setTModalIsOpenToTrue} className="quiz-tablet"  />
            <img src={Zonnestelsel} alt="" draggable="false" onClick={setZModalIsOpenToTrue} className="quiz-zonnestelsel"/>
            <img src={Computer} alt="" draggable="false" onClick={setCModalIsOpenToTrue} className="quiz-computer" />
            
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