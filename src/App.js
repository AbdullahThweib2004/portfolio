import React, { useState } from 'react';
import Portfolio from './Portfolio';
import Projects from './Projects';
import './App.css';

function App() {
  const [currentPage, setCurrentPage] = useState('home');

  return (
    <div className="App">
      {currentPage === 'home' ? (
        <Portfolio setCurrentPage={setCurrentPage} />
      ) : (
        <Projects setCurrentPage={setCurrentPage} />
      )}
    </div>
  );
}

export default App;
