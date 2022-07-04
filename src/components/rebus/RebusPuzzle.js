import React, {useState} from 'react';
import Modal from 'react-modal';
import HintEscape from '../HintsEscape';
import ModalRebus from './ModalRebus';
import RebusBackground  from '../../img/rebus/rebus-background.jpg';
import LockSound from '../../sound/Lock.mp3';

const RebusPuzzle = () => {
    const audio = new Audio(LockSound);
    
    const [modalIsOpen, setModalIsOpen] = useState(false);

    const setModalIsOpenToTrue =()=>{
        setModalIsOpen(true)
    }

    const setModalIsOpenToFalse =()=>{
        setModalIsOpen(false)
    }

    const locked = () => {
        audio.play()
    }

    const exit = () => {
        document.getElementById('open').id = "exit";
    }

  return (
    <section className="background">
        <HintEscape type="rebusHints" />
        <img src={RebusBackground} alt="" draggable="false" className="rebus-background" />
        <section className='block-rebus' onClick={setModalIsOpenToTrue}></section>
        <section className='handle-rebus' onClick={locked}></section>
        <Modal ariaHideApp={false} className="modal-rebus" isOpen={modalIsOpen}>
            <button onClick={setModalIsOpenToFalse}>x</button>
            <ModalRebus/>
        </Modal>
    </section>
  )
}

export default RebusPuzzle