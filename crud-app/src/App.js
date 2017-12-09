import React,{Component} from 'react';
import CRUD from './containers/Crud';
import './App.css';
export default class App extends Component{
  render(){
    return(
      <div>
        <CRUD/>
      </div>
    );
  }

}