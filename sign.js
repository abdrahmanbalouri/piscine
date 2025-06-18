 const sign =(a)=>{

    if (a==0){
        return 0
    }else if (a>0){
        return 1
    }else if (a<0){
        return -1
    }





 }

const sameSign  = (a,b)=>{

    if (sign(a)===sign(b)){
        return true
    }else{

        return false
    }
    
   

} 

console.log(sameSign(0,0));
