import './App.css';
// import DragAndDrop from './components/startPuzzle/DragAndDrop';
import Oplosmatrix from './components/secondPuzzle/Oplosmatrix';
import ClickingGame from './components/clickingGame/ClickingGame';

function App() {
  return (
    <div className="App">
      {/* <DragAndDrop></DragAndDrop> */}
      <ClickingGame></ClickingGame>
    </div>
  );
}

export default App;
