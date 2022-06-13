import React from 'react'
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Start from './components/verhaal/Start';
import IntroPuzzle from './components/dragAndDrop/IntroPuzzle';
import OvergangPuzzel from './components/dragAndDrop/OvergangPuzzel';
import DragAndDrop from './components/dragAndDrop/DragAndDrop';
import DragAndDropSucces from './components/verhaal/dragAndDropSucces';
import IntroMatrix from './components/oplosMatrix/IntroMatrix';
import Oplosmatrix from './components/oplosMatrix/Oplosmatrix';
import OplosmatrixSucces from './components/verhaal/OplosmatrixSucces';
import QuizzPuzzle from './components/quizzPuzzle/QuizzPuzzle';
import QuizzSucces from './components/verhaal/QuizzSucces';
import RebusPuzzle from './components/rebus/RebusPuzzle';
import ClickingGame from './components/clickingGame/ClickingGame'
import Outro from './components/verhaal/Outro.js';
import Timer from './components/Timer.js'
import { useStopwatch } from 'react-timer-hook';

function App(expiryTimestamp) {
  const {
    seconds,
    minutes,
    start,
    pause,
  } = useStopwatch({ expiryTimestamp, onExpire: () => console.warn('onExpire called') });
  return (
    <Router>
      <div className="App">
        <Timer second={seconds} minute={minutes}/>
        {/* <button onClick={start}>Start</button> */}
        {/* <span>{minutes < '10' ? '0' + minutes : minutes}</span>:<span>{seconds < '10' ? '0' + seconds : seconds}</span> */}
        <Routes>
            <Route path="/" element={ <Start start={start} /> }></Route>
            <Route path="/introPuzzle" element={ <IntroPuzzle /> }></Route>
            <Route path="/introPuzzelEen" element={<OvergangPuzzel/>}></Route>
            <Route path="/puzzelEen" element={ <DragAndDrop />}></Route>
            <Route path="/succes" element={<DragAndDropSucces/>}></Route>
            <Route path="/introMatrix" element={ <IntroMatrix /> }></Route>
            <Route path="/puzzelTwee" element={ <Oplosmatrix/>}></Route>
            <Route path="/oplosmatrixSucces" element={<OplosmatrixSucces/>}></Route>
            <Route path="/puzzelDrie" element={ <QuizzPuzzle/>}></Route>
            <Route path="/quizzSucces" element={<QuizzSucces/>}></Route>
            <Route path="/puzzelVier" element={ <RebusPuzzle/>}></Route>
            <Route path="/puzzelVijf" element={ <ClickingGame/>}></Route>
            <Route path="/outro" element={<Outro pause={pause}/>}></Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
