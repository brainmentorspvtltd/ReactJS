const initialState = {
    firstNumber:0,
    secondNumber:0,
    result:0
};
const calcreducer = (state=initialState, action)=>{
    if(action.type=="Add"){
        let sum = parseInt(action.payload.firstNumber) + parseInt(action.payload.secondNumber);
        return {
            firstNumber : action.payload.firstNumber,
            secondNumber:action.payload.secondNumber,
            result:sum
        }
    }
    else
    if(action.type=="Subtract"){
        let sum = parseInt(action.payload.firstNumber) - parseInt(action.payload.secondNumber);
        return {
            firstNumber : action.payload.firstNumber,
            secondNumber:action.payload.secondNumber,
            result:sum
        }
    }
    return state;
}
export default calcreducer;