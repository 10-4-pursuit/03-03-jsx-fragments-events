import './App.css';
import { useState } from 'react';

function App() {
  
const [inputValue, setInputValue] = useState("")
const onSubmit= (event) => {
  event.preventDefault()
  console.log(inputValue)
}

const onInput = (event) => {
  setInputValue(event.target.value)
}
  return (
    <div className="App">
     <>
     <h1>"Welcome to React"</h1>

     <p>"Danny is a chicken from Brooklyn"</p>
     <button onClick = { () => alert('Danny is a chicken from Brooklyn')}>
       Click Me
     </button>
<form onSubmit = {onSubmit}>
  <input type = "text" value = {inputValue} onChange = {onInput}/>
  <button type = "submit">Submit</button>

</form>
     </>
    </div>
  );
}

export default App;
