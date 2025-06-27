const adder = (arrnum, m = 0) => {


    let f = arrnum.reduce((cc, vv) => {

        return cc + vv
    }, m)
    return f
}



const sumOrMul = (arrnum, m = 0) => {

    let f = arrnum.reduce((cc, vv) => {

        if (vv % 2 == 0) {
            return cc * vv
        } else {

            return cc + vv
        }



    }, m)

    return f
}
console.log();


const funcExec = (arrfunc,m=0) => {
    let p = arrfunc.reduce((j, v) => {

         return v(j)

},m)

    return p


}


