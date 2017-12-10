const initialState = {
    arr:[],
    firstNumber:0,secondNumber:0,result:0
   
}

const reducer = (state={initialState},action)=>{
    if(action.type=='Add'){
        var result = parseInt(action.payload.firstNumber) + parseInt(action.payload.secondNumber);
        //var arr = [...state.arr];
       // arr.push(result);
        parseInt(action.payload.secondNumber);
            return {
                ...state,firstNumber:action.payload.firstNumber,
                secondNumber:action.payload.secondNumber,result:result
                //arr:arr
            }
    }
    else
    if(action.type=='Subtract'){
        var result = parseInt(action.payload.firstNumber) - 
        parseInt(action.payload.secondNumber);
        return {
            ...state,firstNumber:action.payload.firstNumber,
            secondNumber:action.payload.secondNumber,result:result
        }
    }
    return state;  
}

export default reducer;