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

    fine: 10,
    totalFine: 0
  };
  }


  setFineHandler(event) {
    console.log("@");
    this.setState({fine: event.target.value});
    console.log("$");
  }

  setFine(event) {
    let fineValue = this.state.fine;
    this.setState({fine: fineValue});
  };

  addPersonHandler(e) {
    this.setState({newPerson: e.target.value});

  }

  addPerson(e){
    if(this.state.newPerson === "") {
      alert("Invalid!");
    }
    else {
      let temp = this.state.newPerson;
      this.state.persons.push({id: Date.now(), name: temp, individualFine:0});
      let personArray = [...this.state.persons];
      this.setState({persons: personArray});
    }
  }

  addIndividualFine(id) {
    let arrayOfIndex = this.state.persons.map(user => user.id);
    let index = arrayOfIndex.indexOf(id);
    let updateUser = {...this.state.persons[index]};
    updateUser.individualFine = updateUser.individualFine + parseInt(this.state.fine);
    const personArray = [...this.state.persons];
    personArray[index] = updateUser;
    this.setState({persons: personArray}, () => this.caluculateTotalFine());
  }

  subtractIndividualFine(id) {
    let arrayOfIndex = this.state.persons.map(user => user.id);
    let index = arrayOfIndex.indexOf(id);
    let updateUser = {...this.state.persons[index]};
    updateUser.individualFine = updateUser.individualFine - parseInt(this.state.fine);
    const personArray = [...this.state.persons];
    personArray[index] = updateUser;
    this.setState({persons: personArray}, () => this.caluculateTotalFine());
  }

  caluculateTotalFine() {
    let total = 0;
    this.state.persons.forEach(value => {
      total = total + value.individualFine;
    });
    this.setState({totalFine: total});
  }



  render() {
    const { name }  = this.props.location;
    return (
      // <div>Persons</div>

      <div className="App"> <br/> <br/>
        <h1>Hello {name}!</h1> <br />
        <label>Enter the Value of fine</label> <br />
        <input type="number"  onChange={this.setFineHandler.bind(this)}/>  <br />
        <button onClick={this.setFine.bind(this)}>Set fine</button> <br /> <br />

        <label>Add Person</label><br />
        <input type="text"  onChange={this.addPersonHandler.bind(this)} />  <br />
        <button onClick={this.addPerson.bind(this)}>Add Person</button> <br /> <br />

        <h3>Total :  {this.state.totalFine}</h3> <br/>

        {this.state.persons.map((user) => {
            return (
              <Person
                name={user.name}
                individualFine={user.individualFine}
                add={() => this.addIndividualFine(user.id)}
                subtract={() => this.subtractIndividualFine(user.id)}
                />
            )
          })}
      </div>


    );
  }

}

export default Persons;
