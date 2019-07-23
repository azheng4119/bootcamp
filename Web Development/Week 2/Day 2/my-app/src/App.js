import React from 'react';
import logo from './logo.svg';
import './App.css';
import FormEdit from './FormEdit';
import FolderContent from './FolderContent';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <FormEdit first = "Andy" last = "Zheng"/>
        <FolderContent/>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
