import React from 'react';
import './Header.css';

const Header = () => {
  return (
    <header>
      <nav>
        <div className="left">
          <h1>Harish B</h1>
          <p>Backend Developer</p>
        </div>
        <ul className="right">
          <li>
            <a href="https://docs.google.com/document/d/1P1rTHLJ6_KZCPO5d3tXnfgGFnxTlbpGG/edit?usp=sharing&ouid=109275693859549031067&rtpof=true&sd=true" target="_blank" rel="noopener noreferrer">
              Resume
            </a>
          </li>
          <li>
            <a href="https://github.com/harishhbaskar" target="_blank" rel="noopener noreferrer">
              GitHub
            </a>
          </li>
          <li>
            <a href="https://www.linkedin.com/in/harishhbaskar/" target="_blank" rel="noopener noreferrer">
              LinkedIn
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;