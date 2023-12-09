import logo from './logo.svg';
import './App.css';

function messagePopUp() {
  alert('This is a button.');
};

function logSubmit(event) {
  event.preventDefault();
  console.log(event);
  alert(event.target.contactForm.value);
  event.target.reset();
};

function App() {
  return (
    <div>
      <h1>Welcome To React</h1>
      <br></br>
      <p>My name is Edgar Collado & I am a student at Pursuit. At this school we're learning front end development, everyday is a unique and exciting day!</p>
      <br></br>
      <button onClick={messagePopUp} style={{}}>Click Here</button>
      <br></br>
      <form onSubmit={logSubmit}>
        <label> Contact Me
            <input name='contactForm' type='text' placeholder='Your email adress here'/>
            <input type='submit'/>
        </label>
      </form>
    </div>
  );
}

export default App;
