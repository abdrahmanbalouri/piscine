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
const slice = (str,start ,end)=>{
    if (end == undefined){

        end = str.length
    }

    if (Array.isArray(str)){

        var k=[] 
        if (start<0){
            start = str.length +start
        }
 if (end<0){
            end = str.length +end
        }
        for(let i=start;i<end;i++){

           k.push(str[i])


        }


    }else{
   var k =''
      if (start<0){
            start = str.length +start
        }
 if (end<0){
            end = str.length +end
        }
        
        for(let i=start;i<end;i++){

            k+=str[i]


        }


    }
 return k


}
const indexOf =(a,b)=>{


    for(let i=0;i<a.length;i++){

        if (a[i]===b){
            return i


        }
    }
    return -1


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
        let k = modulo(a,10)

        return a -k

}





console.log(trunc (1000000.5));
