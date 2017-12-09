import React from 'react';
import Product from './Product';
const ProductList =(props)=>{
    return(
        <div>
            <table className="table table-bordered">
                <tr>
                    <td>Id</td>
                    <td>Name</td>
                    <td>Price</td>
                    <td>Url</td>
                </tr>
                {props.list.map(product=><Product prod={product}/>)}

            </table>
        </div>
    )
}
export default ProductList;