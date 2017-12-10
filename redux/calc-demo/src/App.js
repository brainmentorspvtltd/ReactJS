import React from 'react';
import {Component} from 'react';
import CalcInput from './components/CalcInput';
import CalcOutput from './components/CalcOutput';
import store from './store/store';
import action from './actions/action';
import {connect} from 'react-redux';
 class App extends Component{
  constructor(){
    super();
    this.firstNumber = this.secondNumber =0;
  }
  takeFirst(event){
    this.firstNumber = event.target.value;
  }
  takeSecond(event){
    this.secondNumber = event.target.value;
  }
  add(){
    store.dispatch({type:'Add',payload:
    {firstNumber:this.firstNumber,secondNumber:this.secondNumber}
  
  });
  }
  subtract(){
    store.dispatch(action('Subtract',{firstNumber:this.firstNumber,secondNumber:this.secondNumber}));
  }
  render(){
    return(
      <div>
        <h1>React Redux Example</h1>
        <CalcInput add={this.add.bind(this)} subtract={this.subtract.bind(this)} takeFirst={this.takeFirst.bind(this)} takeSecond={this.takeSecond.bind(this)}/>
        <CalcOutput firstno={this.props.fno} secondno={this.props.sno} result={this.props.result} />
      </div>
    )
  }
}

const MapStatesToProps= (state)=> {
  return {fno : state.firstNumber,sno:state.secondNumber,result:state.result}
}
export default connect(MapStatesToProps)(App);