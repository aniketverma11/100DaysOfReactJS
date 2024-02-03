import logo from './logo.svg';
import './App.css';

import React, {Component} from 'react';
import Greet from "./components/Greet"

// function App() {
//   return (
//     <div className="App">
//       <Greet />
//     </div>
//   );
// }

// This is function component that is used 

class App extends Component{
  render() {
    return(
      <div className="App">
        <Greet />
      </div>
    )
  }
}
export default App;
