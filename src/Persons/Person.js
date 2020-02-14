import React from 'react';
import '../App.css';

const persons = (props) => {
  return (
    <div>
    {props.name} :  {props.j} <br />
    <button onClick={props.add}>Add</button><button >Sub</button>

     </div>
  )
};

export default persons;
