import React from 'react'
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import IntroPuzzle from './components/startPuzzle/IntroPuzzle';
import OvergangPuzzel from './components/startPuzzle/OvergangPuzzel';
import DragAndDrop from './components/startPuzzle/DragAndDrop';
import IntroMatrix from './components/secondPuzzle/IntroMatrix';
import Oplosmatrix from './components/secondPuzzle/Oplosmatrix';
import QuizzPuzzle from './components/quizzPuzzle/QuizzPuzzle';
import RebusPuzzle from './components/rebus/RebusPuzzle';
import ClickingGame from './components/clickingGame/ClickingGame'
import Crosswords from './components/crossword/Crosswords';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
            <Route path="/" element={ <IntroPuzzle /> }></Route>
            <Route path="/introPuzzelEen" element={<OvergangPuzzel/>}></Route>
            <Route path="/puzzelEen" element={ <DragAndDrop />}></Route>
            <Route path="/introMatrix" element={ <IntroMatrix /> }></Route>
            <Route path="/puzzelTwee" element={ <Oplosmatrix/>}></Route>
            <Route path="/puzzelDrie" element={ <QuizzPuzzle/>}></Route>
            <Route path="/puzzelVier" element={ <RebusPuzzle/>}></Route>
            <Route path="/puzzelVijf" element={ <ClickingGame/>}></Route>
            <Route path="/puzzelZes" element={ <Crosswords/>}></Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
