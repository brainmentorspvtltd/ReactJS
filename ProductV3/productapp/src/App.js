import React,{Component} from 'react';
import ProductApp from './containers/ProductApp';
export default class App extends Component{
  render(){
    return(
      <div>
      <h1>Product Example...</h1>
      <ProductApp/>
      </div>
    );
  }
}