const currify = (fn) => {
    
    return function kkk(...args) {

        if (args.length >= fn.length) {

                 
            return fn(...args)
        } else {


            return (...next) => kkk(...args, ...next)

        }


    }
}
