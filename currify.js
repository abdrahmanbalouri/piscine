const currify = (fn) => {
    
    return function kkk(...args) {

        if (args.length == fn.length) {

                 
            return fn(...args)
        } else {


            return (...next) => kkk(...args, ...next)

        }


    }
}

function jj (m,l,k){

console.log(44);


}

console.log(jj.length);
