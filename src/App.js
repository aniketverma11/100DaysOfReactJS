import './App.css';

import React, { Component, createElement } from 'react';
import Greet from "./components/Greet";
import Welcome from './components/Welcome';
import Hello from './components/hello';
import Message from './components/Message';
import Count from './components/Counter';
import Work from './components/Work';
import FunctionClick from './components/fuctionClick';

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

    return React.createElement(
      'div',
      {className:"App"},
      React.createElement(
        Greet,
        { name: "Ram", heroName: "Super Man" },
        "Hello this is SuperMan"
      ),
      React.createElement(
        Greet,
        {name:"Shyam", heroName:"Batman"},
        React.createElement("button", null, "Action")
      ),
      React.createElement(
        Greet,
        {name:"Antony", heroName:"Shaktiman"},
        React.createElement("button", null, "Action")
      ),
      React.createElement(
        Welcome
      ),
      React.createElement(
        Hello
      ),
      React.createElement(
        Message,
      ),
      React.createElement(
        Count,
      ),
      React.createElement(
        Work,
      ),
      React.createElement(
        FunctionClick,
      )
    )
  }
}

export default App;
