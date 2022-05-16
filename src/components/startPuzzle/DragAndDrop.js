import React, { Component } from 'react'


//planeten
import aarde  from "../../img/planeten/aarde.png"
import jupiter  from "../../img/planeten/jupiter.png"
import mars  from "../../img/planeten/mars.png"
import mercurius  from "../../img/planeten/mercurius.png"
import neptunes  from "../../img/planeten/neptunes.png"
import saturnus  from "../../img/planeten/saturnus.png"
import uranus  from "../../img/planeten/uranus.png"
import venus  from "../../img/planeten/venus.png"

//planeten benaming met lijntje
import aarde__line from "../../img/planeten/aarde__line.png"
import jupiter__line from "../../img/planeten/jupiter__line.png"
import mars__line from "../../img/planeten/mars__line.png"
import mercurius__line from "../../img/planeten/mercurius__line.png"
import neptunes__line from "../../img/planeten/neptunes__line.png"
import saturnus__line from "../../img/planeten/saturnus__line.png"
import uranus__line from "../../img/planeten/uranus__line.png"
import venus__line from "../../img/planeten/venus__line.png"

export class DragAndDrop extends Component {
  constructor(props){
    super(props);
    this.state = {
      count : 0,
    }
}

allowDrop = (e) => {
  e.preventDefault();
}

drag = (e) => 
{
  e.dataTransfer.setData("content",e.target.id);
}

drop = (e) =>
{
  e.preventDefault();
        var image =e.dataTransfer.getData("content");
  if (e.target.id == document.getElementById(image).getAttribute('data-div')){ 
      //alert("ok");          
      e.target.appendChild(document.getElementById(image));
      let changeOpacity = document.getElementById(e.target.id);
      changeOpacity.style.opacity = "1";
      changeOpacity.style.backgroundColor = "transparent";
      this.setState({count : this.state.count + 1})
      console.log(this.state.count);

      if(this.state.count === 5){
        let showButton = document.getElementById("buttonOlifanten");
        showButton.style.display = "block";
      }
  }
  else{
     alert("wrong");
  }
}


  render() {
    return (
      <section className="mapPuzzle">
          <div className="board">
            <div className="board__piece">
                <div className="board__piece-square" id="div1" onDrop={(event) => this.drop(event)} onDragOver={(event) => this.allowDrop(event)} ></div>
                <img className="board__piece-name" src={mercurius__line} />
            </div>
            <div className="board__piece">
                <div className="board__piece-square" id="div2" onDrop={(event) => this.drop(event)} onDragOver={(event) => this.allowDrop(event)} ></div>
                <img className="board__piece-name" src={venus__line} />
            </div>
            <div className="board__piece">
                <div className="board__piece-square" id="div3" onDrop={(event) => this.drop(event)} onDragOver={(event) => this.allowDrop(event)} ></div>
                <img className="board__piece-name" src={aarde__line} />
            </div>
            <div className="board__piece">
                <div className="board__piece-square" id="div4" onDrop={(event) => this.drop(event)} onDragOver={(event) => this.allowDrop(event)} ></div>
                <img className="board__piece-name" src={mars__line}/>
            </div>
            <div className="board__piece">
                <div className="board__piece-square" id="div5" onDrop={(event) => this.drop(event)} onDragOver={(event) => this.allowDrop(event)} ></div>
                <img className="board__piece-name" src={jupiter__line} />
            </div>
            <div className="board__piece">
                <div className="board__piece-square" id="div6" onDrop={(event) => this.drop(event)} onDragOver={(event) => this.allowDrop(event)} ></div>
                <img className="board__piece-name" src={saturnus__line} />
            </div>
            <div className="board__piece">
                <div className="board__piece-square" id="div7" onDrop={(event) => this.drop(event)} onDragOver={(event) => this.allowDrop(event)} ></div>
                <img className="board__piece-name" src={uranus__line} /> 
            </div>
            <div className="board__piece">
                <div className="board__piece-square" id="div8" onDrop={(event) => this.drop(event)} onDragOver={(event) => this.allowDrop(event)} ></div>
                <img className="board__piece-name" src={neptunes__line} />
            </div>
          </div>

          <div className="puzzelstukjes">
            <img className="planet" id="drag3" data-div="div3" src={aarde} draggable="true" onDragStart={(event) => this.drag(event)}/>
            <img className="planet" id="drag5" data-div="div5" src={jupiter} draggable="true" onDragStart={(event) => this.drag(event)}/>
            <img className="planet" id="drag4"  data-div="div4" src={mars} draggable="true" onDragStart={(event) => this.drag(event)}/>
            <img className="planet" id="drag1"  data-div="div1" src={mercurius} draggable="true" onDragStart={(event) => this.drag(event)}/>
            <img className="planet" id="drag8"  data-div="div8" src={neptunes} draggable="true" onDragStart={(event) => this.drag(event)}/>
            <img className="planet" id="drag6"  data-div="div6" src={saturnus} draggable="true" onDragStart={(event) => this.drag(event)}/>
            <img className="planet" id="drag7"  data-div="div7" src={uranus} draggable="true" onDragStart={(event) => this.drag(event)}/>
            <img className="planet" id="drag2"  data-div="div2" src={venus} draggable="true" onDragStart={(event) => this.drag(event)}/>
          </div>
      </section>
     
    )
  }
}

export default DragAndDrop;