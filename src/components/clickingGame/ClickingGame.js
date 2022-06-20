import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import '../../css/clickingGame.css';
import Garbage from './garbage';
import HintEscape from '../HintsEscape';
import LaserGun from '../../sound/LaserGun.mp3';
import OutroSound from '../../sound/Outro.mp3';

const ClickingGame = () =>{
    const audio = new Audio(LaserGun);
    audio.volume = 0.5;
    const outro = new Audio(OutroSound);
    outro.volume = 0.1;
    
    const navigate = useNavigate();
    const [count, setCount] = useState(0);

    const countItems = () =>{
        audio.play();
        setCount(count + 1);
        console.log(count)
    }

    React.useEffect(()=>{
        if(count === 6){
            outro.play();
            console.log('picked up all the garbage')
            navigate('/landing');
        }
    });
    


        return(
            <section className='clickingGame__container'>
                <HintEscape type='clickHints'/>
                <section className='clickingGame__garbage__container'>

                        <figure className='garbage' id='garbage1' onClick={() =>{countItems(); document.getElementById("garbage1").style.display = "none";}}>
                                <Garbage />
                        </figure>

                        <figure className='garbage'  id='garbage2' onClick={() =>{countItems(); document.getElementById("garbage2").style.display = "none";}}>
                                <Garbage />
                        </figure>

                        <figure className='garbage' id='garbage3' onClick={() =>{countItems(); document.getElementById("garbage3").style.display = "none";}}>
                                <Garbage />
                        </figure>

                        <figure className='garbage' id='garbage4' onClick={() =>{countItems(); document.getElementById("garbage4").style.display = "none";}}>
                                <Garbage />
                        </figure>

                        <figure className='garbage' id='garbage5' onClick={() =>{countItems(); document.getElementById("garbage5").style.display = "none";}}>
                                <Garbage />
                        </figure>

                        <figure className='garbage' id='garbage6' onClick={() =>{countItems(); document.getElementById("garbage6").style.display = "none";}}>
                                <Garbage />
                        </figure> 
                </section>            
            </section>

        )

    }

export default ClickingGame