import React from 'react';
const CalcInput = (props)=>{
    return (
        <div>
            <table>
                <tr>
                    <td><label htmlFor="">First Number</label></td>
                    <td><input onChange={props.takeFirst} type="text"/></td>
                </tr>
                <tr>
                    <td><label htmlFor="">Second Number</label></td>
                    <td><input onChange={props.takeSecond} type="text"/></td>
                </tr>
                <tr>
                    <td><button onClick={props.add}>Add</button></td>
                    <td><button onClick={props.subtract}>Subtract</button></td>
                </tr>
            </table>
        </div>
    )
}
export default CalcInput;