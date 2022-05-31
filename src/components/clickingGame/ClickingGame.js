import React, { useState } from 'react';
import '../../css/clickingGame.css';
import Garbage from './garbage'
import Hint from '../../components/hint';

const ClickingGame = () =>{

    const [count, setCount] = useState(0);

    const countItems = () =>{
        
        setCount(count + 1);
        console.log(count)

    }

    React.useEffect(()=>{
        if(count === 6){
            console.log('picked up all the garbage')
        }
    });
    


        return(
            <section className='clickingGame__container'>
                <Hint type='clickHints'/>
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