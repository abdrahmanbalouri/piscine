const modulo =(a,b)=>{
let k = false

  
    if (a<0){
        a=-a   
     k =true

    }
    if (b<0){
        b=-b
    }
    let c =a

    while (c-b>0){
        c-=b
    }

    if (k){
        return -c
    }

    return c

}


const hayadlfasila = (k) => {

    
    if (k > 0) {
        let b = 0
        for (let i = 0; i <= k; i++) {

            b++
        }

        return b - 1
    } else if (k < 0) {

        let b = 0
        for (let i = 0; i <= -k; i++) {

            b--
        }
        return b + 1

    }
}


const round = (a) => {

    let b = hayadlfasila(a)
    if (a === 0) {
        return 0
    }
    if (a > 0 && a !== b) {
        a = a + 0.5
        return hayadlfasila(a)

    } else if (a < 0 && b) {
        a = a - 0.5
        return hayadlfasila(a)
    }

    return a


}

const ceil = (a) => {
    let b = hayadlfasila(a)
    if (a === 0) {
        return 0
    }
    if (a > 0 && a !== b) {
        a = a + 0.9

        return hayadlfasila(a)
    } else if (a < 0 && b) {

        a = a
        return hayadlfasila(a)
    }

    return a
}

const floor = (a) => {

    let b = hayadlfasila(a)
    if (a === 0) {
        return 0
    }
    if (a > 0 && a !== b) {
        return hayadlfasila(a)
    } else if (a < 0 && b) {
        return hayadlfasila(a) - 1
    }

    return a
}


const trunc = (a) => {

    if (a>100000000000000000){
         let c = modulo(a, 100000000000000000)
          
            return a - c


    } else if (a>1000000000000){


 let c = modulo(a, 1000000000000)
          
            return a - c

  


    }else if (a>100000000){
          let c = modulo(a, 100000000)
          
            return a - c

    

    } else if (a > 100000) {
         let k = modulo(a,100000)

        return a-k
    }else if (a>10){

                 let k = modulo(a,10)
                 return a -k


    }else{

         let k = modulo(a,1)
                 return a -k
    }
    
       

}




console.log(trunc(3444444444444444444444.654564655));

