import logo from './logo.svg';
import './App.css';
import React from 'react';

function App() {
  const intro = (
    <React.Fragment>
      <h1>Welcome to React</h1>
      <p>My name is Gyancarlos Pinto. I look forward to expanding my skills as a coder and software developer. Nice to meet you!</p>
    </React.Fragment>
  );
  const onSubmit = (event) => {
    event.preventDefault();
    console.log(event.target.entry.value);
    event.target.reset();
  }
  const form = (
    <React.Fragment>
      <form className="form-container" onSubmit={onSubmit}>
      <input type="submit" className="submit"/>
      <input name="entry" type='text'/>      
      </form>
    </React.Fragment>
  );
    const onButtonClick = () => {alert('Button clicked')} 
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        {intro}
        {form}
        <button onClick={onButtonClick}>Click me</button>
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
