import React,{Component} from 'react';
export default class App extends Component{
  constructor(){
    super();
  }
  add(x,y){
    return x + y;
  }
  render(){
    return (
      <div>
      <h1>A is {this.props.a} and B is {this.props.b}</h1>
      <h2>Sum is {parseInt(this.props.a)+ parseInt(this.props.b)}</h2>
      </div>
    )
  }
}