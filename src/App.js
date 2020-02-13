import React, {Component} from 'react';
import Persons from './Persons/Persons.js';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
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

  render(){
    return (
      <Router>
        <div>
          <input type="text" onClick={this.nameHandler} />
          <ul>
            <li>
              <Link to="/about">About</Link>
            </li>
          </ul>

          <hr />

          {/*
            A <Switch> looks through all its children <Route>
            elements and renders the first one whose path
            matches the current URL. Use a <Switch> any time
            you have multiple routes, but you want only one
            of them to render at a time
          */}
          <Switch>
            <Route exact path="/about">
              <Persons name={this.state.setName}/>
            </Route>

          </Switch>
        </div>
      </Router>

    )
  }
}

export default App;
