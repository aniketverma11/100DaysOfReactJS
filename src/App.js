import './App.css';

import React, { Component, createElement } from 'react';
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
    )
    // return (
    //   <div className="App">
    //     {/* Render the Greet component */}
    //     <Greet name="Ram" heroName="Super Man">
    //       <p>Hello this is SuperMan</p>
    //     </Greet>
    //     <Greet name="Shyam" heroName="Batman">
    //       <button>Action</button>
    //     </Greet>
    //     <Greet name="Antony" heroName="Shaktiman"/>
    //     {/* Render the Welcome component */}
    //     <Welcome />
    //     {/* Render the Hello component */}
    //     <Hello />
    //   </div>
    // )
  }
}

export default App;
