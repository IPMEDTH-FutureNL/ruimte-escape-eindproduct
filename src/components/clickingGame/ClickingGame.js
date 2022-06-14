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
            navigate('/outro');
        }
    });
    


        return(
            <section className='clickingGame__container'>
                <HintEscape type='clickHints'/>
                <section className='clickingGame__garbage__container'>
                    <figure className='garbage_1'>
                        <div onClick={() => countItems()}><Garbage /></div>
                    </figure>

                    <figure className='garbage_1' onClick={() => countItems()}>
                        <Garbage/>
                    </figure>

                    <figure className='garbage_2' onClick={() => countItems()}>
                        <Garbage/>                    
                    </figure>

                    <figure className='garbage_3' onClick={() => countItems()}>
                        <Garbage/>
                    </figure>

                    <figure className='garbage_4' onClick={() => countItems()}>
                        <Garbage/>
                    </figure>

                    <figure className='garbage_5' onClick={() => countItems()}>
                        <Garbage/>
                    </figure>  
                </section>
                
            </section>

        )

    }

export default ClickingGame