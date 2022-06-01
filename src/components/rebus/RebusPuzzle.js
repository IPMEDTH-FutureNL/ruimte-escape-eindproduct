import React, {useState} from 'react';
import Modal from 'react-modal';
import Hint from '../hint';
import '../../css/rebus.css';
import ModalRebus from './ModalRebus';
import RebusBackground  from '../../img/rebus/rebus-background.jpg';

const RebusPuzzle = () => {

    const [modalIsOpen, setModalIsOpen] = useState(false);

    const setModalIsOpenToTrue =()=>{
        setModalIsOpen(true)
    }

    const setModalIsOpenToFalse =()=>{
        setModalIsOpen(false)
    }

    const locked = () => {
        //play locked sound
    }

    const exit = () => {
        document.getElementById('open').id = "exit";
    }

  return (
    <section className="background">
        <Hint type="rebusHints" />
        <img src={RebusBackground} alt="" className="rebus-background" />
        <section className='block-rebus' onClick={setModalIsOpenToTrue}></section>
        <section className='handle-rebus' onClick={locked}></section>
        <div className="quiz-intro" id="open">
            <p className="text-white">Goedzo, Jullie hebben de code gekraakt! Ga nu naar de cockpit om het vuilnis op te kunnen ruimen! Samen met alle andere ruimtebedrijven hebben wij afgesproken om een gedeelte van ons geld in een pot te doen. Met dit geld kunnen wij met zijn allen het afval opruimen en de ruimte schoonhouden!</p>
            <button className="quizz-btn exit-btn btn" onClick={exit}> Ga verder</button>
        </div>
        <Modal className="modal-rebus" isOpen={modalIsOpen}>
            <button onClick={setModalIsOpenToFalse}>x</button>
            <ModalRebus/>
        </Modal>
    </section>
  )
}

export default RebusPuzzle