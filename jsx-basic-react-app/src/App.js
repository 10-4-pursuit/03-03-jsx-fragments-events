// importing useState from React
import React, { useState } from "react";
import "./App.css";

// Create a functional component called App
function App() {
  // Create state variables for the input value and the form submission
  const [inputValue, setInputValue] = useState("");

  // Function to handle form submission
  const handleSubmit = (event) => {
    // Prevent the default form submission behavior
    event.preventDefault();
    // Log the input value
    console.log(inputValue);
  };

  // Function to handle input change
  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  // Return the JSX
  return (
    <div className="App">
    <>
      <h1>Welcome to React!</h1>
      <p>Hi, my name is Daniel and I'm learning React.</p>
      {/* Create a button with an onClick handler that alerts "Whats good!" */}
      <button className="button" onClick={() => alert("Whats good!")}>Click Me</button>

      {/* Create a form with a text input and a submit button */}
      <form onSubmit={handleSubmit}>
        {/* Create an input field with the value and onChange handler */}
         <p>Enter your name:</p>  
        <input type="text" value={inputValue} onChange={handleInputChange} />
        {/* Create a submit button */}
        <button type="submit">Submit</button>
      </form>
    </>
    </div>
  );
}

export default App;
