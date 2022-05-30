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

  return (
    <section className="background">
        <Hint type="clickHint" />
        <img src={RebusBackground} alt="" className="rebus-background" />
        <section className='block-rebus' onClick={setModalIsOpenToTrue}></section>
        <section className='handle-rebus' onClick={locked}></section>
        <Modal className="modal-rebus" isOpen={modalIsOpen}>
            <button onClick={setModalIsOpenToFalse}>x</button>
            <ModalRebus/>
        </Modal>
    </section>
  )
}

export default RebusPuzzle