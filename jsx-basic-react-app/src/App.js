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

  const onSubmit = (event) => {
    event.preventDefault();
    console.log(event.target.message.value);
    event.target.reset();
  }
  const form = (
    <React.Fragment>
      <form onSubmit={onSubmit}>
        <label>Enter a Message:</label><br/>
        <input name='message' type='text' />
        <input type='submit' className='submit'/>
      </form>
    </React.Fragment>
  );
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        {elementOne}
        {elementTwo}
        {form}
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
