import './App.css';

import React, { Component, createElement } from 'react';
import Greet from "./components/Greet";
import Welcome from './components/Welcome';
import Hello from './components/hello';
import Message from './components/Message';
import Count from './components/Counter';
import Work from './components/Work';
import FunctionClick from './components/fuctionClick';
import NameList from './components/NameList';
import Stylesheet from './components/Stylesheet';
import inline from './components/inline';
import './components/appStyles.css'
import styles from './components/appStalyes.module.css'


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
        "h1",
        {className:'error'},
        "hello css"
      ),
      React.createElement(
        "h1",
        {className:styles.success},
        "hello css module"
      ),
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
      ),
      React.createElement(
        NameList,
      ),
      React.createElement(
        Stylesheet,
        {primary: true}
      ),
      React.createElement(
        inline,
      )
    )
  }
}

export default App;
