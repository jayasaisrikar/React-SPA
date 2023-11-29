// src/components/Home.js
import React, { useEffect, useState } from 'react';

function Home({ darkMode }) {
  const [message, setMessage] = useState('Hello from Home!');

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
    setMessage('Updated message!');
  };

  return (
    <div id="home" className={`text-center mt-3 ${darkMode ? 'text-white' : 'text-dark'}`}>
      <h2>Home</h2>
      <div className={`card ${darkMode ? 'bg-dark' : 'bg-light'}`}>
        <div className="card-body">
          <p className="card-text">{message}</p>
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
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum ac diam sit amet quam vehicula elementum
            sed sit amet dui.
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
            Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui. Cras ultricies ligula sed magna dictum
            porta.
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
            Donec rutrum congue leo eget malesuada. Sed porttitor lectus nibh. Curabitur non nulla sit amet nisl
            tempus convallis quis ac lectus.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Home;