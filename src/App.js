import React from 'react';
import { useState } from 'react';
import './App.css';
import SearchContainer from './components/SearchContainer';

function App() {
  const [results, setResults] = useState([]);

  const handleSearch = (filters) => {
    console.log("Filters applied:", filters);
    // Simulate search logic (to be implemented in later phases)
    setResults([]);
  };

  return (
    <div className="App">
      <h1>Contact Search</h1>
      <SearchContainer onSearch={handleSearch} />
    </div>
  );
}

export default App;
