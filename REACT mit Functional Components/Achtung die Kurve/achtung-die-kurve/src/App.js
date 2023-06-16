import './App.css';
import Startseite from './pages/Startseite';
import Game from './pages/Game';
import { Route,Routes } from 'react-router-dom';

function App() {
  return (
    <Routes>
        <Route path="/" element={<Startseite></Startseite>}></Route>
        <Route path="/Game" element={<Game></Game>}></Route>
      </Routes>
  );
}

export default App;
