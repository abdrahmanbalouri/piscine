const multiply= (a,b)=>{

    let k = false

    if (a<0&&b<0){
        a=-a
        b=-b
    }
    if (a<0){
        a=-a    
        k= true    
    }
    if (b<0){
        b=-b
        k=true
    }
    let c =0

    for (let i =0;i<b;i++){
        c+=a

    }

    if  (k){
        return -c
    }
    return c


}
console.log(multiply(123,0));


const divide = (a,b)=>{
 let k = false

    if (a<0&&b<0){
        a=-a
        b=-b
    }
    if (a<0){
        a=-a    
        k= true    
    }
    if (b<0){
        b=-b
        k=true
    }
    let c =a
    let i =0

    while (c-b>=0){
        c-=b
        i++
    }

    if (k){
        return -i
    }

    return i


}


const modulo =(a,b)=>{


let k = false

  
    if (a<0){
        a=-a    
    }
    if (b<0){
        b=-b
        k =true
    }
    let c =a

    while (c-b>=0){
        c-=b
    }

    if (k){
        return -c
    }

    return c

}


