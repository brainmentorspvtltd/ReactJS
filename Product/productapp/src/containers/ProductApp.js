import React,{Component} from 'react';
import ProductInput from '../components/ProductInput';
import ProductInfo from '../model/ProductInfo';
import ProductList from '../components/ProductList';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
export default class ProductApp extends Component{
    constructor(){
        super();
        this.price = 0;
        this.productArray=[];
        this.prepareProducts();
        this.state={price:this.price,productArr:this.productArray};
    }
    takePriceInput(event){
        this.price = event.target.value;
        this.setState({price:this.price});
    }

    prepareProducts(){
        for(let i = 1;i<=5;i++){
            let productObject = new ProductInfo(i,"Samsung"+i,9000+i,"xyz.com");
            this.productArray.push(productObject);
        }
    }

    render(){
        return(
            <div className="container">
                <ProductInput takePrice={this.takePriceInput.bind(this)}/>
                 Price is {this.state.price}  
                 <ProductList list={this.state.productArr}/> 
            </div>
        );

    }
}