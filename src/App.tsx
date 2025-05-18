import { useState } from 'react';
import './App.css';
import Grid from './components/Grid';
import Score from './components/Score';

const GRID_SIZE = 20;

function App() {
  const [score, setScore] = useState(0);

  return (
    <div className="app">
      <h1>Snake Game</h1>
      <Score value={score} />
      <Grid size={GRID_SIZE} />
    </div>
  );
}

export default App;
