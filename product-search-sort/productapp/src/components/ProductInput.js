import React from 'react';
import {Button} from 'react-bootstrap';
const ProductInput = (props)=>{
    return(
        <div className="form-group">

            <label htmlFor="">Search By Price</label>
            <input type="text" className="form-control" onChange={props.takePrice} />
            <Button onClick={props.searchByPrice} className="btn btn-primary">Search</Button>
            &nbsp;
            <Button onClick={props.sortByPrice} className="btn btn-success">Sort</Button>
        </div>
    )
}
export default ProductInput;