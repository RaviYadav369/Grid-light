import { useState } from 'react';
import './App.css';
import GridLights from './components/grid';

function App() {
  const [gridLen, setgridLen] = useState()
  const [num, setN] = useState()

  const handleIn = (e) => setN(e.target.value)

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(num)
    setgridLen(num)
  }

  return (
    <div className="App">
      <h2>Grid Lights</h2>
    
      <GridLights n={gridLen} />
    </div>
  );
}

export default App;
