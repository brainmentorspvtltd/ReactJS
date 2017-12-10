const LoggerMiddleWare=(store)=>{
    return next=>{
        return action=>{
            console.log("Middleware Run For ...",action);
           // if(action.type==)
            //Before / Pre Processing
            console.log("Action ",action);
            const result = next(action);
            console.log("action Object",result);
            return result;
        }
    }
}

export default LoggerMiddleWare;