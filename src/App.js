import React from 'react';
import logo from './logo.svg';
import './App.css';

const click = <button onClick={buttonClicked}>Click Me</button>;
const parts = ( 
<React.Fragment>
  <h1>Welcome to React</h1>
  <p>Hello, I am Andrew and I want to be a software engineer</p>
</React.Fragment>);
const form = <React.Fragment></React.Fragment>
function buttonClicked() {
  console.log("Button clicked");
}

function App() {
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
