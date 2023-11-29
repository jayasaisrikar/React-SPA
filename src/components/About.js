// src/components/About.js
import React, { useEffect } from 'react';

function About() {
  useEffect(() => {
    // Animate on component mount
    const aboutElement = document.getElementById('about');
    aboutElement.classList.add('fadeIn');
  }, []);

  return (
    <div id="about" className="text-center mt-3">
      <h2 className="text-white">About</h2>
      <div className="row mt-4">
        <div className="col-md-6 offset-md-3">
          <div className="card text-white bg-info">
            <div className="card-body">
              <p className="card-text">
                This is a Single Page Application (SPA) created using React. It demonstrates the use of components, data
                binding, routing, and state management.
              </p>
              <p className="card-text">
                The Home page showcases state management and data binding. The message in the Home page can be updated
                dynamically by clicking the "Update Message" button.
              </p>
              <p className="card-text">
                The navigation bar at the top uses React Router for navigation between the Home and About pages.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
