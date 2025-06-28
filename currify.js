const currify = (fn) => {
    
    return function kkk(...args) {

        if (args.length >= fn.length) {

                 
            return fn(...args)
        } else {


            return (...next) => kkk(...args, ...next)

        }


    }
}
const mult2 = (el1, el2) => el1 * el2


const mult2Curried = currify(mult2)

console.log(mult2Curried(2)(2)) // result expected 4