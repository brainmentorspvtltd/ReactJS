import React from 'react';
import Item from './Item';
const ItemList = (props)=>{
    return (
        <div>
            <table className="table table-bordered">
                <thead>
                    <tr>
                    <th>Id</th>
                    <th>Name</th>
                    <th>Price</th>
                    <th>URL</th>
                    <th>Operations</th>
                    </tr>
                </thead>
                <tbody>
                    {props.list.map(itemObject=><Item update={props.update} key={itemObject.id} item={itemObject}/>)}
                    
                </tbody>
            </table>
        </div>
    );
}
export default ItemList;