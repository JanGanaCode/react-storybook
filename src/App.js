import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="header">Storybook | ReactJS</h1>
          <img src={logo} className="App-logo" alt="logo" />
          <p className="directions">
            npm run storybook
          </p>
          <a
            className="App-link"
            href="localhost:4000"
            target="_blank"
            rel="noopener noreferrer"
          >
            localhost:4000
          </a>
        </header>
      </div>
    );
  }
}

export default App;
