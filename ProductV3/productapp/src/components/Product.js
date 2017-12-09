import React from 'react';
const Product = (props)=>{
    return (
        <tr>
            <td>{props.prod.id}</td>
            <td>{props.prod.name}</td>
            <td>{props.prod.price}</td>
            <td><img src={props.prod.url}/></td>
        </tr>
    )

}
export default Product;