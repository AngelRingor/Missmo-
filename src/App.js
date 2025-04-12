import React, { useState } from 'react';
import './App.css';

function App() {
  const [answer, setAnswer] = useState(null);

  const handleClick = (response) => {
    setAnswer(response);
  };

  return (
    <div className="app-container">
      {!answer && (
        <>
          <h1>Miss mo?</h1>
          <div className="btn-group">
            <button onClick={() => handleClick('yes')}>Yes</button>
            <button onClick={() => handleClick('no')}>No</button>
          </div>
        </>
      )}

      {answer === 'yes' && <p className="response">Miss ka ba? 😭</p>}
      {answer === 'no' && <p className="response">Sus, panggap si tanga 😔</p>}
    </div>
  );
}

export default App;
