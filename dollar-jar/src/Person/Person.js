import React from 'react';



// const persons = [
//     {id:'1', name:'Surbhi', j:0},
//     {id:'2', name:'Sandeep', j:0},
//     {id:'3', name:'Meet', j:0},
//     {id:'4', name:'Neel', j:0},
//     {id:'5', name:'Akash', j:0},
//     {id:'6', name:'Tejaswini', j:0},
//     {id:'7', name:'Krishna', j:0},
//     {id:'8', name:'Kartik', j:0},
//     {id:'9', name:'Yash', j:0}
//   ];

const person = (props) => {
  return <div>
    <p>{props.name}    <button >+</button><button >-</button>   Total = {props.j} </p>
  </div>
};









export default person;
