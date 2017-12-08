//  Class Base Components
import React, {Component} from 'react';
export default class SecondComponent extends Component{
    constructor(){
        super();
        this.counter = 0;
        this.price = this.quantity = 0;
        this.state = {count:0};
    }
    computeIt(){
        this.counter++;
        console.log("Compute It is Called...",this.counter);
        //this.setState({count:this.counter});
        //let amount = this.price * this.quantity;
        let amount = this.refs.price.value * this.refs.quantity.value;
        this.setState({count:this.counter,amount:amount});
    }

    takePrice(event){
        this.price  = event.target.value;
    }

    takeQuantity(event){
        this.quantity = event.target.value;
    }

    render(){
        return (
            <div>
                <label htmlFor="">Price</label>
                {
                    <input type="text" ref="price"/>
                    /* <input onChange={this.takePrice.bind(this)} type="text"/> */}
                <br/>
                <label htmlFor="">Quantity</label>
                <input type="text" ref="quantity"/>
                {/* <input onChange={this.takeQuantity.bind(this)} type="text"/> */}
                <br/>
                <button onClick={this.computeIt.bind(this)}>Compute</button>
                <p>Count is {this.state.count}</p>
                <p>Amount is {this.state.amount}</p>
            </div>
        )
    }
}