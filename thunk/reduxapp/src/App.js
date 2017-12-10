import React, { Component } from 'react';
import CalcInput from './components/CalcInput';
import CalcOutput from './components/CalcOutput';
import './App.css';
import {connect} from 'react-redux';

class App extends Component {
  render() {
    return (
      <div>
        <h1>  Redux Demo </h1>
        <CalcInput/>
        <CalcOutput firstno={this.props.fno} secondno={this.props.sno} result={this.props.result}/>
      </div>   
    );
  }
}

const mapStateToProps = state=>{
  return {		
    result: state.result,
    fno:state.firstNumber,
    sno:state.secondNumber	
};
}
export default connect(mapStateToProps)(App);
//export default App;

