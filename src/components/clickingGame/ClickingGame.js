import React, { useState } from 'react';
import '../../css/clickingGame.css';
import { useNavigate } from "react-router-dom";
import Garbage from './garbage'
import HintEscape from '../../components/HintsEscape';

const ClickingGame = () =>{

    const [count, setCount] = useState(0);
    const navigate = useNavigate();

    const countItems = () =>{
        
        setCount(count + 1);
        console.log(count)

    }

    React.useEffect(()=>{
        if(count === 6){
            console.log('picked up all the garbage')
            navigate("/outro");
        }
    });
    


        return(
            <section className='clickingGame__container'>
                <HintEscape type='clickHints'/>
                <section className='clickingGame__garbage__container'>
                    <figure className='rotating_left'>
                        <div onClick={() => countItems()}><Garbage /></div>
                    </figure>

                    <figure className='rotating_right'>
                        <div onClick={() => countItems()}><Garbage /></div>
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