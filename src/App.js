import './App.css';
// import DragAndDrop from './components/startPuzzle/DragAndDrop';
import Oplosmatrix from './components/secondPuzzle/Oplosmatrix';
import QuizzPuzzle from './components/quizzPuzzle/QuizzPuzzle';
import RebusPuzzle from './components/rebus/RebusPuzzle';

function App() {
  return (
    <div className="App">
      {/* <DragAndDrop></DragAndDrop> */}
      {/* <QuizzPuzzle></QuizzPuzzle> */}
      <RebusPuzzle></RebusPuzzle>
      {/* <Oplosmatrix></Oplosmatrix> */}
    </div>
  );
}

export default App;
