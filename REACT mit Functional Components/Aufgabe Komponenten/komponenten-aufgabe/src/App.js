import './App.css';
import Button from './commponents/Button';
import Liste from './commponents/Liste';
import Card from './commponents/Card'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Liste items={["Coffee", "Tea", "Beer"]}/>
        <Button text="Grün"></Button>
        <Card name="Günther" desc="Test"></Card>
      </header>
    </div>
  );
}

export default App;
