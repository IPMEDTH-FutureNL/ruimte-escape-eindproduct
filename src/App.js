import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import IntroPuzzle from './components/startPuzzle/IntroPuzzle';
import DragAndDrop from './components/startPuzzle/DragAndDrop';
//import Oplosmatrix from './components/secondPuzzle/Oplosmatrix';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
            {/* <Oplosmatrix></Oplosmatrix> */}
            <Route path="/" element={ <IntroPuzzle /> }></Route>
            <Route path="/startpuzzel" element={ <DragAndDrop />}></Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
