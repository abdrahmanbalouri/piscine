const round = (a)=>{
    let b = a|0
    if (a==0){
        return 0
    }
    if (a>0 && a!==b){

        
        a =a +0.5

        return a|0


    }else if (a<0 && b){

        a = a- 0.5
        return a|0
    }

  return a


}

const ceil = (a)=>{
        let b = a|0
    if (a==0){
        return 0
    }
    if (a>0 && a!==b){

        
        a =a +0.9

        return a|0


    }else if (a<0 && b){

        a = a
        return a|0
    }

  return a



}
const floor = (a)=>{

         let b = a|0
    if (a==0){
        return 0
    }
    if (a>0 && a!==b){

        
    

        return a|0


    }else if (a<0 && b){
        console.log(44);
        

        a = a-0.9
        return a|0
    }

  return a




}


const trunc =(a)=>{

    return a|0

}



