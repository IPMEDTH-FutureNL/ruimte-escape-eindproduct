import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import '../../css/clickingGame.css';
import Garbage from './garbage'
import HintEscape from '../HintsEscape';
import LaserGun from '../../sound/LaserGun.mp3';

const ClickingGame = () =>{
    const audio = new Audio(LaserGun);
    const navigate = useNavigate();
    const [count, setCount] = useState(0);

    const countItems = () =>{
        audio.play();
        setCount(count + 1);
        console.log(count)

    }

    React.useEffect(()=>{
        if(count === 6){
            console.log('picked up all the garbage')
            navigate('/landing');
        }
    });
    


        return(
            <section className='clickingGame__container'>
                <HintEscape type='clickHints'/>
                <section className='clickingGame__garbage__container'>
                    <figure className='rotating_left'>
                        <div onClick={() => countItems()}><Garbage className="garbage" /></div>
                    </figure>

                    <figure className='rotating_right'>
                        <div onClick={() => countItems()} className="garbage"><Garbage /></div>
                    </figure>

                    <figure>
                        <div onClick={() => countItems()}><Garbage /></div>
                    </figure>

                    <figure>
                        <div onClick={ () => countItems()}><Garbage /></div>
                    </figure>

                    <figure>
                        <div onClick={() => countItems()}><Garbage /></div>
                    </figure>

                    <figure>
                        <div onClick={() => countItems()}><Garbage /></div>
                    </figure>  
                </section>
                
            </section>

        )

    }

export default ClickingGame