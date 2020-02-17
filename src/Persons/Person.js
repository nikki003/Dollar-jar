import React from 'react';
import '../App.css';

const persons = (props) => {
  return (
    <div>
    {props.name} :  {props.individualFine} <br />
    <button onClick={props.add}>Add</button>
    <button onClick={props.subtract}>Sub</button>
     <br/> <br/></div>
  )
};

export default persons;
