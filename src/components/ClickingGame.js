import React,{Component} from 'react';
import Garbage from './components/garbage';
import Hint from './components/hint';

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
            console.log('Daan is gestorven aan ligma')
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