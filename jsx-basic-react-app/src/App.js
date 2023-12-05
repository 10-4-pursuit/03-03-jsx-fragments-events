import React, { useState } from 'react';
import './App.css';

function App() {
  const [inputValue, setInputValue] = useState('');

  // Function to handle form submission
  const handleSubmit = (event) => {
    event.preventDefault(); 
    console.log(inputValue);
  }

  // Function to handle input change
  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  }

  return (
    <React.Fragment>
      <h1>Welcome to React!</h1>
      <p>Hi, my name is Daniel and I'm learning React.</p>
      <button onClick={() => alert('Whats good!')}>Click Me</button>

      {/* Create a form with a text input and a submit button */}
      <form onSubmit={handleSubmit}>
        <input 
          type="text"
          value={inputValue}
          onChange={handleInputChange} 
        />
        <button type="submit">Submit</button>
      </form>
    </React.Fragment>
  )
}

export default App;

