import React from 'react';
import './App.css';
import Quiz from './components/Quiz.js';
import logo from './logo.svg';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>Quiz Platform</h1>
      </header>
      <Quiz />
    </div>
  );
}

export default App;
