import React from 'react';
import './App.css';
import SecondComponent from './SecondComp';
// Define a Component
const App = (props)=>{
  let name = "Amit";
  var conditionalJSX = "";
  if(10>2){
    conditionalJSX = (<SecondComponent/>);
  }
  else{
    conditionalJSX=<h1>Nothing is Found </h1>;
  }
  let styling={
    backgroundColor:'yellow',
    color:'red',
    fontStyle:'italic'
  };
  return (<div><h1 className="mystyle">Hello React JS {props.firstname} and {props.lastname}</h1>
  <h1 style={styling}>Another H1 Element in ReactJS</h1>
  {conditionalJSX}
  </div>
);
}
export default App;