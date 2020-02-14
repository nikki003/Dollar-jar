import React, { Component } from 'react';
import Person from './Person';
import '../App.css';


class Persons extends Component {

  constructor(props){
    super(props);
    this.state = {
    newPerson: "",

    persons: [
      {id:'1', name:'Surbhi', j:0},
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
  this.addPerson = this.addPerson.bind(this);
}


  jarHandler = (event) => {
    this.setState({jar: event.target.value});
  }

  setJar = (event) => {
    let temp = this.state.jar;
    this.setState({jar: temp});
  };

  changeHandler = (e) => {
    this.setState({newPerson: e.target.value});

  }

  addPerson(e){
    let temp = this.state.newPerson;
    this.state.persons.push({id: Date.now(), name: temp, j:0});
    let arr = [...this.state.persons];
    this.setState({persons: arr});
  }

  addJar(id) {

    let arr = this.state.persons.map(user => user.id);
    let index = arr.indexOf(id);
    let temp = {...this.state.persons[index]};
    // console.log(temp);
    temp.j = temp.j + 10;
    // let jar = `${temp.j + 10}`;
    const copy = {...this.state.persons};
    console.log(copy);
    copy[index] = temp;
    this.setState({persons: copy});
  }



  render() {
    return (
      // <div>Persons</div>

      <div className="App">
        <h1>Hello</h1>
        <label>Enter the Value of Jar</label> <br />
        <input type="text"  onChange={this.jarHandler}/>  <br />
        <button onClick={this.setJar}>Set Jar</button> <br /> <br />

        <label>Add Person</label><br />
        <input type="text"  onChange={this.changeHandler} />  <br />
        <button onClick={this.addPerson}>Add Person</button> <br /> <br />

        {this.state.persons.map((user) => {
            return (
              <Person name={user.name} j={user.j} add={() => this.addJar(user.id)}/>
            )
          })}
      </div>


    );
  }

}

export default Persons;
