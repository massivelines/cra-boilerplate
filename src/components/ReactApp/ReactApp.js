import React from 'react';
import logo from './logo.svg';

function ReactApp() {
  return (
    <div className="react-app">
      <header className="react-app-header">
        <img src={logo} className="react-app-logo" alt="logo" />
        <p>
          Edit <code>src/components/ReactApp.js</code> and save to reload.
        </p>
        <a
          className="react-app-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default ReactApp;
