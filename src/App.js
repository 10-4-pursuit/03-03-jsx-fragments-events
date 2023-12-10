import React from 'react';
import logo from './logo.svg';
import './App.css';


function App() {
  function handleButtonClick (){
    alert('You have clicked the button');
  }
function handleSubmitButton(event){
  event.preventDefault();
  const input = event.target.formInput.value;
  console.log('Form submitted', input);
  event.target.formInput.value = '';
}

  const element=(
    <React.Fragment>
      <h1>Welcome to React</h1>
      <p>Hi! my name is Kanique Cox and I attend Pursuit Fellowship.<br/>
      I'm studying to become a full stack Developer!</p>
      <div>
      <button onClick={handleButtonClick}>Click Me</button>
      </div>
      <div style={{width: '55%',padding:'50px', display:'flex', marginBottom: '50px'}} >
       <form onSubmit={handleSubmitButton}>
      <input 
      type='text'
      name='formInput'
       placeholder='form Input'></input>
        <button type='submit'>Submit</button>
       </form>
      </div>
    </React.Fragment>
  )

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
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
        {element}
      </header>
    </div>
  );
}

export default App;
