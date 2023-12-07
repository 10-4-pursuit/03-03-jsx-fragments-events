import logo from './logo.svg';
import './App.css';
import React from 'react';

function App() {
  const elementOne = (
    <React.Fragment>
      <h1>Welcome to React</h1>
      <p>I like to code!</p>
    </React.Fragment>
  );
  const elementTwo = <button onClick={() => alert('You clicked the button!')}>Click me</button>
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        {elementOne}
        {elementTwo}
        <p>
          Edit <code>src/App.js</code> and save to reload.
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
