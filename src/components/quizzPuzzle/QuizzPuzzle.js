import React, {useState} from 'react';
import Modal from 'react-modal';
import '../../css/quizz.css';
import ModalZonnestelsel from './ModalZonnestelsel';
import QuizzBackground from '../../img/quizz/quiz-background.jpg';
import Zonnestelsel from '../../img/quizz/zonnestelsel.png'

const QuizzPuzzle = () => {

    const [modalIsOpen, setModalIsOpen] = useState(false);

    const setModalIsOpenToTrue =()=>{
        setModalIsOpen(true)
    }

    const setModalIsOpenToFalse =()=>{
        setModalIsOpen(false)
    }

  return (
    <section>
        <div className="background">
            <img src={QuizzBackground} alt="" className="quiz-background" />
            <img src={Zonnestelsel} alt="" onClick={setModalIsOpenToTrue} className="quiz-zonnestelsel"/>

            <Modal className="modal-zonnestelsel" isOpen={modalIsOpen}>
                <button onClick={setModalIsOpenToFalse}>x</button>
                <ModalZonnestelsel/>
            </Modal>
        </div>  
    </section>
  )
}

export default QuizzPuzzle