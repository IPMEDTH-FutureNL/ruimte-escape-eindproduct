import React,{Component} from 'react';
import Garbage from './garbage';
import Hint from '../hint';

export class ClickingGame extends Component{
    constructor(props){
        super(props);
        this.state = {
            count:0,
        }
    }

    countItems = () =>{
        
        this.setState(prevState => {
            return {count : prevState.count + 1}
        }); 
        console.log(this.state.count)
    }
    
    componentDidUpdate(){
        if(this.state.count >= 6){
            window.location.href = '/puzzelZes';
        }
    }

    render(){

        return(
            <section className='container'>
                <Hint type='clickHint'/>
                <figure>
                    <div onClick={this.countItems}><Garbage /></div>
                </figure>

                <figure>
                    <div onClick={this.countItems}><Garbage /></div>
                </figure>

                <figure>
                    <div onClick={this.countItems}><Garbage /></div>
                </figure>

                <figure>
                    <div onClick={this.countItems}><Garbage /></div>
                </figure>

                <figure>
                    <div onClick={this.countItems}><Garbage /></div>
                </figure>

                <figure>
                    <div onClick={this.countItems}><Garbage /></div>
                </figure>  
                
                
            </section>
        )

    }
}

export default ClickingGame