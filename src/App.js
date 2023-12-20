import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <h1>Welcome to React</h1>
      <p>Hi, My name is Kyron and I'm in the process of becoming a junior software developer. </p>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <button onClick={()=> alert("Hello")}>Click me</button>
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
