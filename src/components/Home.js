// src/components/Home.js
import React, { useEffect, useState } from 'react';

function Home({ darkMode }) {
  const [message, setMessage] = useState('Hello from Home!');
  const [inputText, setInputText] = useState('');

  useEffect(() => {
    // Animate on component mount
    const homeElement = document.getElementById('home');
    homeElement.classList.add('animate__animated', 'animate__fadeIn');

    // Animate button on hover
    const updateButton = document.getElementById('updateButton');
    updateButton.addEventListener('mouseenter', () => {
      updateButton.classList.add('animate__animated', 'animate__pulse');
    });
    updateButton.addEventListener('mouseleave', () => {
      updateButton.classList.remove('animate__animated', 'animate__pulse');
    });
  }, []);

  const updateMessage = () => {
    setMessage(inputText || 'Updated message!');
  };

  return (
    <div id="home" className={`text-center mt-3 ${darkMode ? 'text-white' : 'text-dark'}`}>
      <h2>Home</h2>
      <div className={`card ${darkMode ? 'bg-dark text-white' : 'bg-light text-dark'}`}>
        <div className="card-body">
          <p className="card-text">{message}</p>
          <div className="form-group">
            <input
              type="text"
              className={`form-control ${darkMode ? 'bg-dark text-white' : 'bg-light text-black'}`}
              placeholder="Enter text"
              value={inputText}
              onChange={(e) => setInputText(e.target.value)}
            />&nbsp;
          </div>
          <button
            id="updateButton"
            className={`btn ${darkMode ? 'btn-outline-light' : 'btn-outline-dark'}`}
            onClick={updateMessage}
           >
            Update Message
          </button>
        </div>
      </div>

      {/* Bootstrap Featurettes */}
      <div className="row mt-5">
        <div className="col-lg-4">
          <img
            src="https://via.placeholder.com/300"
            alt="Featurette 1"
            className={`img-fluid rounded-circle ${darkMode ? 'border-light' : 'border-dark'}`}
          />
          <h2 className={`mt-4 ${darkMode ? 'text-white' : 'text-dark'}`}>Featurette 1</h2>
          <p className={`lead ${darkMode ? 'text-white' : 'text-dark'}`}>
            This is a Sample Featurette
          </p>
        </div>
        <div className="col-lg-4">
          <img
            src="https://via.placeholder.com/300"
            alt="Featurette 2"
            className={`img-fluid rounded-circle ${darkMode ? 'border-light' : 'border-dark'}`}
          />
          <h2 className={`mt-4 ${darkMode ? 'text-white' : 'text-dark'}`}>Featurette 2</h2>
          <p className={`lead ${darkMode ? 'text-white' : 'text-dark'}`}>
            This is a Sample Featurette
          </p>
        </div>
        <div className="col-lg-4">
          <img
            src="https://via.placeholder.com/300"
            alt="Featurette 3"
            className={`img-fluid rounded-circle ${darkMode ? 'border-light' : 'border-dark'}`}
          />
          <h2 className={`mt-4 ${darkMode ? 'text-white' : 'text-dark'}`}>Featurette 3</h2>
          <p className={`lead ${darkMode ? 'text-white' : 'text-dark'}`}>
            This is a Sample Featurette
          </p>
        </div>
      </div>
    </div>
  );
}

export default Home;
