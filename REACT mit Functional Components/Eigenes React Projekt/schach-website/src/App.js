import './App.css';
import Startseite from './pages/Startseite';
import Moves from './pages/Moves';
import { Route,Routes } from 'react-router-dom';



function App() {

    return(
      <Routes>
        <Route path="/" element={<Startseite></Startseite>}></Route>
        <Route path="/moves" element={<Moves></Moves>}></Route>
      </Routes>
    );
}

export default App;
