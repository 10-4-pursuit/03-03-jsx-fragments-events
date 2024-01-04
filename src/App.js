import React, { useState } from 'react';

function App() {
  const element = (
    <>
      <h1>Welcome To React!</h1>
      <p>Hi, I'm Yah-neen, and I'm a Professional Debugger</p>
    </>
  );

  const click = (
    <button
      style={{
        marginTop: '10px',  // Add space above the button if needed
        marginLeft: 'auto',
        marginRight: 'auto',
      }}
      onClick={() => alert("JavaScript all up in da Place!")}
    >
      Click Me
    </button>
  );

  const [inputValue, setInputValue] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Input Value:', inputValue);
  };

  return (
    <div className="App">
      <header className="App-header">
        {element}
        {click}
      </header>

      <h1>Reach Out Form</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Contact Me:
          <input
            type="text"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
          />
        </label>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default App;
