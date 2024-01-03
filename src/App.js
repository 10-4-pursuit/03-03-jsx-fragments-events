import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const click = <button onClick={() => alert("Button Pressed")}>Click Me</button>;
  
  const parts = ( 
  <React.Fragment>
    <h1>Welcome to React</h1>
    <p>Hello, I am Andrew and I want to be a software engineer</p>
  </React.Fragment>);

  return (
    <div className="App">
      <header className="App-header">
        {parts}
        {click}
      </header>
    </div>
  );
}

export default App;
