import logo from './logo.svg';
import './App.css';

function App() {
  // Task 1: Using a React Fragment for grouping elements
  const task1 = (
    <>
      <h1>Welcome to React</h1>
      <p>Welcome, my name is Bri. Coming all the way from Brooklyn, NY.</p>
    </>
  );

  // Task 2: Adding a button with an onClick event
  const handleClick = () => {
    alert('Button clicked!'); 
  };

  const task2 = (
    <button onClick={handleClick}>Click me</button>
  );

  // Advanced Task: Creating a form with an input field and a submit button
  const handleFormSubmit = (event) => {
    event.preventDefault(); 
    const inputValue = event.target.elements.inputField.value;
    console.log('Input Value:', inputValue);
  };

  const advancedTask = (
    <>
      <form onSubmit={handleFormSubmit}>
        <label>
          Input:
          <input type="text" name="inputField" />
        </label>
        <button type="submit">Submit</button>
      </form>
    </>
  );

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
        {/* Rendering the tasks */}
        {task1}
        {task2}
        {advancedTask}
      </header>
    </div>
  );
}

export default App;
