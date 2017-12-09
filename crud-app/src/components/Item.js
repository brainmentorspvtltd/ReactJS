import React from 'react';
//const Item = (props)=>{
export default class Item extends React.Component{  
    constructor(){
        super();
        this.state = {
            markClass :""
        };
    }  
    updateClass(){
        let myClass = this.props.item.markForDelete?"red":"";
        this.setState({markClass:myClass});
    }
    render(){
    return (
        <tr className={this.state.markClass}>
            <td>{this.props.item.id}</td>
            <td>{this.props.item.name}</td>
            <td>{this.props.item.price}</td>
            <td><img src={this.props.item.url}/></td>
            <td><img src="/images/trash.png" onClick={()=>{
                this.props.item.toggle();
                this.updateClass();
                this.props.update();
                }} className="icon" alt=""/>&nbsp;
            
            <img src="/images/edit.png" className="icon" alt=""/>
            </td>
        </tr>
    );
}
}
//export default Item;