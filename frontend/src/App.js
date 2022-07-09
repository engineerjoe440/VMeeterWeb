import Knob from './knob';
import './App.css';

function App() {
  return (
    <div className="App">
      <Knob
          size={50}
          numTicks={7}
          degrees={260}
          min={1}
          max={100}
          value={30}
        />
    </div>
  );
}

export default App;
