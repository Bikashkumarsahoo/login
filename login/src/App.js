import ReactDOM from 'react-dom'
import React, { Component } from 'react';
import './App.css';
import Mainleft from "./main-left.js";
import Mainright from "./main-right.js";

//import Split from 'react-split'

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;

//  {
//   render() {
//     return (
//       <div>
       
//       </div>
//     );
//   }
// }

class App extends Component{
  render(){
    return(
      <div>
        <Mainright/>
        <Mainleft/>
      </div>
  );
  }
}

export default App;