import React, {Component} from 'react';
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
  constructor(props){
    super(props);
    this.state = {
      name: "World",
      pathname: '/Persons/Persons'
    };
  }

  nameHandler = (event) => {
    this.setState({setName: event.target.value});
  }

  setName = (event) => {
    let name = this.state.setName;
    if(name === "") {
      alert("Invalid!");
      const temp = "/";
      this.setState({pathname: temp});
    }
    else {
      let temp = this.state.setName;
      this.setState({name: temp});
    }
  }


  render(){
    return (
      <div>
        <input type="text" value={this.state.name} onChange={this.nameHandler} />

        <Link to={{pathname: this.state.pathname , name: this.state.name}}>
          <button onClick={this.name}>Go</button>
        </Link>
    </div>

    )
  }
}

export default App;
