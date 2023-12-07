import logo from './logo.svg';
import './App.css';
import React from "react";

function App() {
  const introduction = (
   <React.Fragment> 
      <h1>Welcome To React!</h1>
      <p>I am a curious soul. My goal is to read 25 books this year. The reason why is because I love learning about the world so I can help others. I've read 20 so far. </p>
      <button onClick={() => alert('LIFE IS HARD by Kieran Setiya')}>See What Im Reading</button>
      </React.Fragment>
   )

   const form = (
    <React.Fragment> 
      <h2>What are you reading? </h2>
      <form>
        <label htmlFor="title">Book Title:</label>
        <input id="title" type="text" />
        <label htmlFor="author">Book Author:</label>
        <input id="author" type="text" />
        <button 
        type="submit" 
        onClick={(event) => {
          event.preventDefault();
          const title = document.getElementById("title").value;
          const author = document.getElementById("author").value;
          console.log(`Book Title: ${title} Book Author: ${author}`);
        }}
        > SUBMIT </button>
      </form>
    </React.Fragment>
      )



  return (
     <div>

      {introduction} 
      {form}
      </div>
      
  )
  }


export default App;
