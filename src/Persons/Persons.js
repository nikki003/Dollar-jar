import React, { Component } from 'react';
import Person from './Person';
import './Persons.css';
import '../App.css';


class Persons extends Component {

  constructor(props){
    super(props);
    this.state = {
    newPerson: "",
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

    jar: 10,
    total: 0
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
    if(this.state.newPerson === "") {
      alert("Invalid!");
    }
    else {
      let temp = this.state.newPerson;
      this.state.persons.push({id: Date.now(), name: temp, j:0});
      let arr = [...this.state.persons];
      this.setState({persons: arr});
    }
  }

  addJar(id) {
    let arr = this.state.persons.map(user => user.id);
    let index = arr.indexOf(id);
    let temp = {...this.state.persons[index]};
    temp.j = temp.j + parseInt(this.state.jar);
    const copy = [...this.state.persons];
    copy[index] = temp;
    this.setState({persons: copy}, () => this.total());
  }

  subJar(id) {
    let arr = this.state.persons.map(user => user.id);
    let index = arr.indexOf(id);
    let temp = {...this.state.persons[index]};
    temp.j = temp.j - parseInt(this.state.jar);
    const copy = [...this.state.persons];
    copy[index] = temp;
    this.setState({persons: copy}, () => this.total());
  }

  total() {
    let total = 0;
    this.state.persons.forEach(value => {
      total = total + value.j;
    });
    this.setState({total: total});
  }

  validate(event) {

  }


  render() {
    const { name } = this.props.location;
    return (
      // <div>Persons</div>

      <div className="App"> <br/> <br/>
        <h1>Hello {name}!</h1> <br />
        <label>Enter the Value of Jar</label> <br />
        <input type="number"  onChange={this.jarHandler}/>  <br />
        <button onClick={this.setJar}>Set Jar</button> <br /> <br />

        <label>Add Person</label><br />
        <input type="text"  onChange={this.changeHandler} />  <br />
        <button onClick={this.addPerson}>Add Person</button> <br /> <br />

        <h3>Total :  {this.state.total}</h3> <br/>

        {this.state.persons.map((user) => {
            return (
              <Person
                name={user.name}
                j={user.j}
                add={() => this.addJar(user.id)}
                sub={() => this.subJar(user.id)}
                />
            )
          })}
      </div>


    );
  }

}

export default Persons;
