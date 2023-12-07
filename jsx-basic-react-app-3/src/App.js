import logo from './logo.svg';
import './App.css';

function clickButton(){
alert(`You don't follow instructions. Tsk Tsk`);
}

function formSubmission(event){
  event.preventDefault();
  console.log(event)
  alert(event.target.age.value);
}

function App() {
  return ( 
    <div className="App">
      <>
      <h1>Welcome To React</h1>
      <p> My name is Elisha but my friends and peers call me Eli for short. I am a Full Stack Web Development Fellow at Pursuit and I enjoy software engineering!</p>
      
      </>
      <>
      <form onSubmit={formSubmission}>
        <label>
          Age:
          <input type="number" min={18} max={100} name="age" />
          
        </label>
        <input type="submit" value="Submit"/>
      </form>
      </>

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
        <button onClick={clickButton}>Don't Click Me!</button>
        
      </header>
    </div>
  );
}

export default App;
