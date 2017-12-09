import React from 'react';
import {Button} from 'react-bootstrap';
const ItemInput =(props)=>{
    return (
        <div>
            <div className="form-group">
                <label htmlFor="">ItemNo</label>
                <input onChange={props.takeId} type="text" placeholder="Type Item Number Here" className="form-control" />
            </div>
            <div className="form-group">
                <label htmlFor="">Name</label>
                <input onChange={props.takeName} type="text" placeholder="Type Item Name Here" className="form-control" />
            </div>
            <div className="form-group">
                <label htmlFor="">Price</label>
                <input onChange={props.takePrice} type="text" placeholder="Type Item Price Here" className="form-control" />
            </div>
            <div className="form-group">
                <label htmlFor="">URL</label>
                <input value="http://stat.homeshop18.com/homeshop18/images/productImages/390/micromax-q409-spark-4g-dual-sim-android-mobile-phone-medium_eee35f2ed387b2d5939bd3f45773b9a2.jpg" onChange={props.takeURL} type="text" placeholder="Type Item URL Here" className="form-control" />
            </div>
            <div className="form-group">
                <Button onClick={props.add} className="btn btn-primary">Add</Button>&nbsp;
                <Button className="btn btn-success">Save</Button>&nbsp;
                <Button className="btn btn-danger">Delete</Button>&nbsp;
                <Button className="btn btn-info">Load</Button>&nbsp;
                <Button className="btn btn-primary">Search</Button>&nbsp;
                <Button className="btn btn-success">Update</Button>&nbsp;
                <Button className="btn btn-warning">Sort</Button>&nbsp;
                <Button className="btn btn-default">Clear All</Button>

            </div>
        </div>
    );
}
export default ItemInput;
