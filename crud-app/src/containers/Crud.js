import React,{Component} from 'react';
import ItemInput from '../components/ItemInput';
import ItemList from '../components/ItemList';
import ItemModel from '../models/ItemModel';
export default class CRUD extends Component{
    constructor(){
        super();
        this.title = "CRUD App Demo...";
        this.id = 0;
        this.name = "";
        this.price = 0;
        this.url = ""; 
        
        this.state = {
         itemArray:[],total:0,markCount:0,unMarkCount:0
        };
        this.itemArrayClone = [];
    }
    takeItemNo(event){
            this.id = event.target.value;
    }
    takeItemName(event){
        this.name = event.target.value;
    }
    takeItemPrice(event){
        this.price = event.target.value;
}
    takeItemURL(event){
    this.url = event.target.value;
    }

    add(){
            let itemObject = new ItemModel(this.id, this.name, this.price, this.url);
            this.itemArrayClone.push(itemObject);
            this.updateCounts();

    }

    updateCounts(){
        console.log("Update Call....");
        let total = this.itemArrayClone.length;
        let markCount = this.itemArrayClone.filter(itemObject=>itemObject.markForDelete).length;
        let unMarkCount = total - markCount;
        this.setState({itemArray:this.itemArrayClone,total:total,markCount:markCount,unMarkCount:unMarkCount});

    }

    render(){
        return (
            <div className="container">
                <h1 className="alert-info">{this.title}</h1>
                   <ItemInput takeId={this.takeItemNo.bind(this)}
                    takeName={this.takeItemName.bind(this)}
                    takePrice={this.takeItemPrice.bind(this)}
                    takeURL={this.takeItemURL.bind(this)}
                    add={this.add.bind(this)}
                     />
                     <h3>Total {this.state.total} Mark {this.state.markCount} UnMark {this.state.unMarkCount}</h3>
                   <ItemList list={this.state.itemArray} update={this.updateCounts.bind(this)} /> 
            </div>
        )
    }
}