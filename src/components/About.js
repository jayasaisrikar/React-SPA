// src/components/About.js
import React, { useEffect } from 'react';

function About({ darkMode }) {
  useEffect(() => {
    // Animate on component mount
    const aboutElement = document.getElementById('about');
    aboutElement.classList.add('animate__animated', 'animate__fadeIn');
  }, []);

  return (
    <div className="about-container">
      <div id="about" className={`text-center mt-3 ${darkMode ? 'text-white' : 'text-dark'}`}>
        <h2>About</h2>
        <div className="row mt-4">
          {/* Personal Information */}
          <div className="col-md-6">
            <div className={`card mb-4 ${darkMode ? 'bg-dark text-light' : 'bg-light text-dark'} animate__animated animate__fadeInLeft animate__delay-1s card-hover`}>
              <div className="card-body">
                <h3 className="card-title">Personal Information</h3>
                <ul className="list-unstyled">
                  <li>Name: Bandi Jaya Sai Srikar</li>
                  <li>Location: Visakhapatnam, Andhra Pradesh, India</li>
                  <li>Email: bjayasaisrikar2004@gmail.com</li>
                  <li>LinkedIn: linkedin.com/in/jayasaisrikar</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Experience */}
          <div className="col-md-6">
            <div className={`card mb-4 ${darkMode ? 'bg-dark text-light' : 'bg-light text-dark'} animate__animated animate__fadeInRight animate__delay-1s card-hover`}>
              <div className="card-body">
                <h3 className="card-title">Experience</h3>
                <ul className="list-unstyled">
                <li>Artificial Intelligence Intern - RadicalX (Nov 2023 - Present)</li>
                    <ul>
                      <li>Leveraged cutting-edge technologies such as OpenAI, Firebase, TensorFlow, Node.js, and React.</li>
                      <li>Contributed to the ongoing enhancement of ReX—an AI Coach.</li>
                      <li>Spearheaded initiatives resulting in a 55% improvement in accuracy.</li>
                    </ul>
                    <li>Software Engineering Virtual Experience Program (Forage) - Goldman Sachs (Feb 2023 - Mar 2023)</li>
                    <ul>
                      <li>Collaborated with a team of 2 software engineers to design and implement a robust password cracking solution using the MD5 hashing algorithm.</li>
                      <li>Conducted extensive research and analysis on 10 different hashing algorithms.</li>
                      <li>Achieved a remarkable success rate of 98% in cracking complex passwords.</li>
                    </ul>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <div className={`card mb-4 ${darkMode ? 'bg-dark text-light' : 'bg-light text-dark'} animate__animated animate__fadeInRight animate__delay-1s card-hover`}>
              <div className="card-body">
                <h3 className="card-title">Education</h3>
                <ul className="list-unstyled">
                <li>Jawaharlal Nehru Technological University Gurajada Vizianagaram (2021 - 2025)</li>
                    <li>Bachelor of Technology, Information Technology</li>
                </ul>
              </div>
            </div>
          </div>

          {/* ... (repeat the pattern for other sections) ... */}
          <div className="col-md-6">
            <div className={`card mb-4 ${darkMode ? 'bg-dark text-light' : 'bg-light text-dark'} animate__animated animate__fadeInRight animate__delay-1s card-hover`}>
              <div className="card-body">
                <h3 className="card-title">Licenses & Certifications</h3>
                <ul className="list-unstyled">
                <li>Goldman Sachs - Software Engineering Virtual Experience - Forage</li>
                    <li>Microsoft Certified: Azure AI Fundamentals</li>
                    <li>Object detection with Faster R-CNN and PyTorch - IBM</li>
                    <li>Deep Learning with TensorFlow - IBM</li>
                    <li>Supervised Machine Learning: Regression and Classification - Coursera</li>
                    <li>Machine Learning For Earth System Sciences - NPTEL</li>
                    <li>Data Visualization with Python - Coursera</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="col-md-6">
            <div className={`card mb-4 ${darkMode ? 'bg-dark text-light' : 'bg-light text-dark'} animate__animated animate__fadeInRight animate__delay-1s card-hover`}>
              <div className="card-body">
                <h3 className="card-title">Projects</h3>
                <ul className="list-unstyled">
                <li>Budgetly: Your ultimate shopping companion.</li>
                    <li>ResuCraft: An innovative online resume builder.</li>
                    <li>Portfolio: Personal portfolio built by integrating ReactJS and Bootstrap.</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="col-md-6">
            <div className={`card mb-4 ${darkMode ? 'bg-dark text-light' : 'bg-light text-dark'} animate__animated animate__fadeInRight animate__delay-1s card-hover`}>
              <div className="card-body">
                <h3 className="card-title">Skills</h3>
                <ul className="list-unstyled">
                <li>Firebase • OpenAI • Earth Science • Django • React.js • Machine Learning • Full-Stack Development • Data Analysis • Data Structures • PostgreSQL • Tensorflow • Python • Java • C Programming Language • Object Oriented Programming • Data Science • Artificial Intelligence • Neural Networks • SQL • NodeJS • TailwindCSS • Flask</li>
                  </ul>
              </div>
            </div>
          </div>

          <div className="col-md-6">
            <div className={`card mb-4 ${darkMode ? 'bg-dark text-light' : 'bg-light text-dark'} animate__animated animate__fadeInRight animate__delay-1s card-hover`}>
              <div className="card-body">
                <h3 className="card-title">Publications</h3>
                <ul className="list-unstyled">
                <li>Deep Neural Networks – Frequently utilized in pattern recognition tasks where it is impossible to generate a quantitative, human-comprehensible description of the data generation process.</li>
                  </ul>
              </div>
            </div>
          </div>


        </div>
      </div>
      <div className={`background-overlay ${darkMode ? 'bg-dark' : 'bg-light'}`}></div>
    </div>
  );
}

export default About;
