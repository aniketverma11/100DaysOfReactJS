import './App.css';

import React, { Component } from 'react';
import Greet from "./components/Greet";
import Welcome from './components/Welcome';
import Hello from './components/hello';

/**
 * Represents the main application component.
 * @class App
 * @extends {Component}
 */
class App extends Component {
  /**
   * Renders the main application component.
   * @returns {JSX.Element} The rendered React element.
   */
  render() {
    return (
      <div className="App">
        {/* Render the Greet component */}
        <Greet />
        {/* Render the Welcome component */}
        <Welcome />
        {/* Render the Hello component */}
        <Hello />
      </div>
    )
  }
}

export default App;
