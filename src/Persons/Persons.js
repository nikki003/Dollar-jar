import React, { Component } from 'react';
import '../App.css';


class Persons extends Component {

  state = {
    newPerson: [
      {id: '', name: '', j: ''}
    ],

    persons: [
      // {id:'1', name:'Surbhi', j:0},
      // {id:'2', name:'Sandeep', j:0},
      // {id:'3', name:'Meet', j:0},
      // {id:'4', name:'Neel', j:0},
      // {id:'5', name:'Akash', j:0},
      // {id:'6', name:'Tejaswini', j:0},
      // {id:'7', name:'Krishna', j:0},
      // {id:'8', name:'Kartik', j:0},
      // {id:'9', name:'Yash', j:0}
    ],

    jar: ""
  };

  jarHandler = (event) => {
    this.setState({jar: event.target.value});
  };

  addPerson = (e) => {
    this.setState({newPerson: [{id:Date.now(), name:e.target.value, j:0}]});
  }


  render() {
    return (
      // <div>Persons</div>
      <div className="App">
        <label>Add Person</label>
        <input type="text"  onClick={this.addPerson}/>  <br />
        <label>Enter the Value of Jar</label>
        <input type="text"  onClick={this.jarHandler}/>  <br />
        {console.log(this.state.jar)}
        {console.log(this.state.newPerson)}
      </div>



    );
  }

}

export default Persons;
