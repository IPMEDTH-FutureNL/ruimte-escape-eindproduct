import './App.css';
// import DragAndDrop from './components/startPuzzle/DragAndDrop';
import Oplosmatrix from './components/secondPuzzle/Oplosmatrix';
import QuizzPuzzle from './components/quizzPuzzle/QuizzPuzzle';

function App() {
  return (
    <div className="App">
      {/* <DragAndDrop></DragAndDrop> */}
      <QuizzPuzzle></QuizzPuzzle>
      {/* <Oplosmatrix></Oplosmatrix> */}
    </div>
  );
}

export default App;
