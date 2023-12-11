import logo from './logo.svg';
import './App.css';
import React from "react";

function App() {
  const element = (
    <React.Fragment>
      <h1>Welcome to react</h1>
      <p>I am Cindy a new Pursuit Fellow.</p>
      <div>
        <button onClick={handleButtonClick}>Click me</button>
      </div>
    </React.Fragment>
  );

  function handleButtonClick() {
    console.log("clicked");
  }

  const formElement = (
    <React.Fragment>
      <h3>Guest Book Form</h3>
      <form onSubmit={handleSubmit}>
        <label for="fname">First Name:</label>
        <input type="text"></input>
        <br></br>
        <label for="lname">Last Name:</label>
        <input type="text"></input>
        <br></br>
        <button>Submit</button>
      </form>
    </React.Fragment>
  );

  function handleSubmit() {
    alert("Thank you for submitting your information.");
  }

  return (
    <div>
      {element}
      {formElement}
    </div>
  );
}

export default App;