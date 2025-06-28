const flow = (funcs) => (...args) =>{

    return  funcs.reduce((prev, fn) => [ fn(...prev) ], args)[0];

}
const square = (nbr) => nbr * nbr
const add2Numbers = (nbr1, nbr2) => nbr1 + nbr2

const flowedFunctions = flow([add2Numbers, square])
 console.log(  flowedFunctions(2, 3)  );
