const split = (a,target)=>{


    let k =[]
    let v=''

    for (let i=0;i<a.length;i++){

        if (a[i]===target && v!==''){

            k.push(v)
            v=''

        }else{

            v+=a[i]
        }


    }
  if (v!==''){
    console.log(v);
    
    k.push(v)
  }
 return k
}


const join =(a,target)=>{

    let k =''

    for(let i=0;i<a.length;i++){

        k+= a[i]
        if (i!==a.length-1){
                    k+= target

        }


    }
    
  return k


}
 