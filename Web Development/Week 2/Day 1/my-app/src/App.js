import React from 'react';
import logo from './logo.svg';
import ContactCard from './ContactCard';
import Decrement from './Decrement';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          <ContactCard name = "Andy Zheng" mobile = "917-291-5656" work = "911" email = "azheng4119@gmail.com"></ContactCard><br></br>
          <ContactCard name = "John Doe" mobile = "311" work = "911" email = "john@john.com"></ContactCard><br></br>
          <ContactCard name = "Jane Doe" mobile = "711" work = "411" email = "jane@jane.com"></ContactCard><br></br>
          <Decrement number = "5"></Decrement>
        </p>
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
