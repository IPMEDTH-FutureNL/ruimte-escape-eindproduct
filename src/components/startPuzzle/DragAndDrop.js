import React, { useState } from 'react'
import { useNavigate } from "react-router-dom";
import PopUp from '../PopUp';


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

const DragAndDrop = () => {
  const [count, setCount] = useState(0);
  const [wrong, setWrong] = useState(0);
  const [text, setText] = useState("");

  const navigate = useNavigate();
    
  const goToPuzzle = () => {
      navigate("/introMatrix");
  }


  const allowDrop = (e) => {
    e.preventDefault();
  }

  const drag = (e) => 
  {
    e.dataTransfer.setData("content",e.target.id);
  }

  const drop = (e) =>
  {
    e.preventDefault();
        let image =e.dataTransfer.getData("content");
    if (e.target.id === document.getElementById(image).getAttribute('data-div')){ 
        //alert("ok");          
        e.target.appendChild(document.getElementById(image));
        let changeOpacity = document.getElementById(e.target.id);
        changeOpacity.style.opacity = "1";
        changeOpacity.style.backgroundColor = "transparent";
        setCount(count + 1);
        console.log("good tries " + count);

        if(count === 7){
          setTimeout(() => {
            goToPuzzle();
            console.log("how many wrong " + wrong );
          }, 200)
        }
    }
    else{
       setWrong(wrong + 1);
       setText("Dat was helaas niet goed");
       let openpopup = document.getElementById("popup");
       openpopup.style.display = "block";
       console.log("bad tries " + wrong);
    }
  }



    return (
      <section className="mapPuzzle">
          <div className="board">
            <div className="board__piece">
                <div className="board__piece-square" id="div1" onDrop={(event) => drop(event)} onDragOver={(event) => allowDrop(event)} ></div>
                <img alt="planeten naam drag and drop" className="board__piece-name" src={mercurius__line} />
            </div>
            <div className="board__piece">
                <div className="board__piece-square" id="div2" onDrop={(event) => drop(event)} onDragOver={(event) => allowDrop(event)} ></div>
                <img alt="planeten naam drag and drop" className="board__piece-name" src={venus__line} />
            </div>
            <div className="board__piece">
                <div className="board__piece-square" id="div3" onDrop={(event) => drop(event)} onDragOver={(event) => allowDrop(event)} ></div>
                <img alt="planeten naam drag and drop" className="board__piece-name" src={aarde__line} />
            </div>
            <div className="board__piece">
                <div className="board__piece-square" id="div4" onDrop={(event) => drop(event)} onDragOver={(event) => allowDrop(event)} ></div>
                <img alt="planeten naam drag and drop" className="board__piece-name" src={mars__line}/>
            </div>
            <div className="board__piece">
                <div className="board__piece-square" id="div5" onDrop={(event) => drop(event)} onDragOver={(event) => allowDrop(event)} ></div>
                <img alt="planeten naam drag and drop" className="board__piece-name" src={jupiter__line} />
            </div>
            <div className="board__piece">
                <div className="board__piece-square" id="div6" onDrop={(event) => drop(event)} onDragOver={(event) => allowDrop(event)} ></div>
                <img alt="planeten naam drag and drop" className="board__piece-name" src={saturnus__line} />
            </div>
            <div className="board__piece">
                <div className="board__piece-square" id="div7" onDrop={(event) => drop(event)} onDragOver={(event) => allowDrop(event)} ></div>
                <img alt="planeten naam drag and drop" className="board__piece-name" src={uranus__line} /> 
            </div>
            <div className="board__piece">
                <div className="board__piece-square" id="div8" onDrop={(event) => drop(event)} onDragOver={(event) => allowDrop(event)} ></div>
                <img alt="planeten naam drag and drop" className="board__piece-name" src={neptunes__line} />
            </div>
          </div>

          <div className="puzzelstukjes">
            <img alt="planeten drag and drop" className="planet" id="drag3" data-div="div3" src={aarde} draggable="true" onDragStart={(event) => drag(event)}/>
            <img alt="planeten drag and drop" className="planet" id="drag5" data-div="div5" src={jupiter} draggable="true" onDragStart={(event) => drag(event)}/>
            <img alt="planeten drag and drop" className="planet" id="drag4"  data-div="div4" src={mars} draggable="true" onDragStart={(event) => drag(event)}/>
            <img alt="planeten drag and drop" className="planet" id="drag1"  data-div="div1" src={mercurius} draggable="true" onDragStart={(event) => drag(event)}/>
            <img alt="planeten drag and drop" className="planet" id="drag8"  data-div="div8" src={neptunes} draggable="true" onDragStart={(event) => drag(event)}/>
            <img alt="planeten drag and drop" className="planet" id="drag6"  data-div="div6" src={saturnus} draggable="true" onDragStart={(event) => drag(event)}/>
            <img alt="planeten drag and drop" className="planet" id="drag7"  data-div="div7" src={uranus} draggable="true" onDragStart={(event) => drag(event)}/>
            <img alt="planeten drag and drop" className="planet" id="drag2"  data-div="div2" src={venus} draggable="true" onDragStart={(event) => drag(event)}/>
          </div>

          <PopUp text={text}></PopUp>
      </section>
     
    )
}

export default DragAndDrop;