import React, {Component} from 'react';
import Persons from './Persons/Persons';
import {Link} from "react-router-dom";
// import logo from './logo.svg';
import './App.css';

class App extends Component {
  // return (
  //   <div className="App">
  //     <header className="App-header">
  //       <img src={logo} className="App-logo" alt="logo" />
  //       <p>
  //         Edit <code>src/App.js</code> and save to reload.
  //       </p>
  //       <a
  //         className="App-link"
  //         href="https://reactjs.org"
  //         target="_blank"
  //         rel="noopener noreferrer"
  //       >
  //         Learn React
  //       </a>
  //     </header>
  //   </div>
  // );

  state = {
    setName: ""
  }

  nameHandler = (event) => {
    this.setState({setName: event.target.value});
  }

  setNameHandler = (event) => {
    let temp = this.state.setName;
    this.setState({setName: temp});
  }

  render(){
    return (
      <div>
        <input type="text" onChange={this.nameHandler} />

        <Link to={{pathname: '/Persons/Persons', name: this.state.setName}}>
          <button onClick={this.setNameHandler}>Go</button>
        </Link>
    </div>

    )
  }
}

export default App;
