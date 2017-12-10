import React from 'react';
const CalcOutput = (props)=>{
    return(
        <div>
            <h1>Result is {props.result} First Number is {props.firstno} , Second Number is {props.secondno}</h1>
        </div>
    );
}
export default CalcOutput;