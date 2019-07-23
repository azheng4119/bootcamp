import React from 'react';
import logo from './logo.svg';
import './App.css';
import FormEdit from './FormEdit';
import FolderContent from './FolderContent';
import Tickers from './components/Tickers.js';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <div id = "apps">
          <FormEdit first = "Andy" last = "Zheng"/>
          <FolderContent/> <br></br>
        </div>
        <Tickers />
      </header>
    </div>
  );
}

export default App;
