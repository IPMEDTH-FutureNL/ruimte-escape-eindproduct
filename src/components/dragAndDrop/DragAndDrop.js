import React, { useState } from 'react'
import { useNavigate } from "react-router-dom";
import PopUp from '../PopUp';
import HintEscape from '../HintsEscape';
import Bubble from '../../sound/Bubble.wav';


//planeten
import aarde  from "../../img/planeten/aarde.png"
import jupiter  from "../../img/planeten/jupiter.png"
import mars  from "../../img/planeten/mars.png"
import mercurius  from "../../img/planeten/mercurius.png"
import neptunes  from "../../img/planeten/neptunes.png"
import saturnus  from "../../img/planeten/saturnus.png"
import uranus  from "../../img/planeten/uranus.png"
import venus  from "../../img/planeten/venus.png"
import sun from "../../img/planeten/sun.png"

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
      navigate("/succes");
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
        const audio = new Audio(Bubble);
        audio.play();
        //alert("ok");          
        e.target.appendChild(document.getElementById(image));
        let changeOpacity = document.getElementById(e.target.id);
        changeOpacity.style.opacity = "1";
        changeOpacity.style.backgroundColor = "transparent";
        setCount(count + 1);
        console.log("good tries " + count);

        if(count === 7){
          setTimeout(() => {
            let currentPoints = localStorage.getItem("punten");
            let pointsToInt = parseInt(currentPoints);

            switch(wrong){
              case 0:
                pointsToInt = pointsToInt + 40;
                localStorage.setItem("punten", pointsToInt);
                break;
              case 1:
                pointsToInt = pointsToInt + 35;
                localStorage.setItem("punten", pointsToInt);
                break;
              case 2:
                pointsToInt = pointsToInt + 30;
                localStorage.setItem("punten", pointsToInt);
                break;
              case 3:
                pointsToInt = pointsToInt + 25;
                localStorage.setItem("punten", pointsToInt);
                break;
              case 4:
                pointsToInt = pointsToInt + 20;
                localStorage.setItem("punten", pointsToInt);
                break;
              case 5:
                pointsToInt = pointsToInt + 15;
                localStorage.setItem("punten", pointsToInt);
                break;
              case 6:
                pointsToInt = pointsToInt + 10;
                localStorage.setItem("punten", pointsToInt);
                break;
              case 7:
                pointsToInt = pointsToInt + 5;
                localStorage.setItem("punten", pointsToInt);
                break;
              case 8:
                pointsToInt = pointsToInt + 0;
                localStorage.setItem("punten", pointsToInt);
                break;
            }
          
            goToPuzzle();
            console.log("how many wrong " + wrong );
          }, 200)
        }
    }
    else{
       setWrong(wrong + 1);
       setText("Dat was helaas niet goed");
       let changeColor = document.getElementById(e.target.id);
       changeColor.style.backgroundColor = "red";
       changeColor.style.opacity = "1";
      //  let openpopup = document.getElementById("popup");
      //  openpopup.style.display = "block";
       console.log("bad tries " + wrong);
    }
  }


    return (
      <section className="mapPuzzle">
        <HintEscape type='dragAndDropHints'/>
        <img className="sun" alt="sun" src={sun}></img>
          <div className="board">
            <div className="board__piece">
                <div className="board__piece-square" id="div1" onDrop={(event) => drop(event)} onDragOver={(event) => allowDrop(event)} ></div>
                <img alt="planeten naam drag and drop" className="board__piece-name" src={mercurius__line}  draggable="false"/>
            </div>
            <div className="board__piece">
                <div className="board__piece-square" id="div2" onDrop={(event) => drop(event)} onDragOver={(event) => allowDrop(event)} ></div>
                <img alt="planeten naam drag and drop" className="board__piece-name" src={venus__line}  draggable="false"/>
            </div>
            <div className="board__piece">
                <div className="board__piece-square" id="div3" onDrop={(event) => drop(event)} onDragOver={(event) => allowDrop(event)} ></div>
                <img alt="planeten naam drag and drop" className="board__piece-name" src={aarde__line}  draggable="false"/>
            </div>
            <div className="board__piece">
                <div className="board__piece-square" id="div4" onDrop={(event) => drop(event)} onDragOver={(event) => allowDrop(event)} ></div>
                <img alt="planeten naam drag and drop" className="board__piece-name" src={mars__line}  draggable="false"/>
            </div>
            <div className="board__piece">
                <div className="board__piece-square" id="div5" onDrop={(event) => drop(event)} onDragOver={(event) => allowDrop(event)} ></div>
                <img alt="planeten naam drag and drop" className="board__piece-name" src={jupiter__line}  draggable="false"/>
            </div>
            <div className="board__piece">
                <div className="board__piece-square" id="div6" onDrop={(event) => drop(event)} onDragOver={(event) => allowDrop(event)} ></div>
                <img alt="planeten naam drag and drop" className="board__piece-name" src={saturnus__line}  draggable="false"/>
            </div>
            <div className="board__piece">
                <div className="board__piece-square" id="div7" onDrop={(event) => drop(event)} onDragOver={(event) => allowDrop(event)} ></div>
                <img alt="planeten naam drag and drop" className="board__piece-name" src={uranus__line}   draggable="false"/> 
            </div>
            <div className="board__piece">
                <div className="board__piece-square" id="div8" onDrop={(event) => drop(event)} onDragOver={(event) => allowDrop(event)} ></div>
                <img alt="planeten naam drag and drop" className="board__piece-name" src={neptunes__line} draggable="false" />
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