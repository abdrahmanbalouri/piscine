const flow = (funcs) => (...args) =>{

    return  funcs.reduce((prev, fn) => [ fn(...prev) ], args)[0];

}
