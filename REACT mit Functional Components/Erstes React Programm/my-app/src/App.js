import logo from './logo.svg';
import './App.css';
import Button from './commponents/Button';

function App() {
  return (
    <div className="App">
      <header className="App-header">
          <Button name="Hans" age ="17"></Button>
          <Button name="Sepp" age="20"></Button>
      </header>
    </div>
  );
}

export default App;
