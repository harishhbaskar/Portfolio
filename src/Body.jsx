// Body.js
import React from 'react';
import './Body.css';

const Body = () => {
  return (
    <div className="main-container">
      <div className="intro">
        <h1>Harish B</h1>
        <h2>A Bit About Me</h2>
        <p>
          I am a backend developer building RESTful API. I work with modern JavaScript stacks and enjoy building robust web
          architectures with a clean, maintainable codebase.
        </p>
      </div>

      <div className="info-section">
        <div className="tech">
          <h2>Technologies</h2>
          <ul>
            <li>React JS</li>
            <li>Node.js</li>
            <li>Express.js</li>
            <li>MongoDB</li>
          </ul>
        </div>

        <div className="projects">
          <h2>Projects</h2>
          <div className="project-buttons">
            <a href="https://github.com/harishhbaskar/notes-app" target="_blank" rel="noopener noreferrer" className="proj-btn resume">Notes App</a>
            <a href="https://github.com/harishhbaskar/recipe-suggester/tree/main" target="_blank" rel="noopener noreferrer" className="proj-btn research">Ai-Recipe Suggester</a>
            <a href="https://github.com/harishhbaskar/Movie-Search" target="_blank" rel="noopener noreferrer" className="proj-btn contact">Movie Search</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Body;
