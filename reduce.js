const fold = (arr ,fun ,acol=0)=>{


   let  c = acol 
   

    for(let i =0;i<arr.length;i++){

         c = fun(c,arr[i],i,arr)
    }
  return c

}
const foldRight = (arr ,fun ,acol =0)=>{


    let c = acol 

    for(let i =arr.length-1;i>=0;i--){

         c = fun(c,arr[i],i,arr)

    }
  return c

}

const reduce =(arr,fun,jjj)=>{
       let l =0
    if (jjj==undefined){

        jjj= arr[0]
        l=1
    }

  let  c = jjj
   

    for(let i =l;i<arr.length;i++){

         c = fun(c,arr[i],i,arr)
    }
  return c
}

const reduceRight =(arr,fun ,jjj)=>{

       let l =arr.length-1
    if (jjj==undefined){

        jjj= arr[arr.length-1]
        l=arr.length-2
    }

  let  c = jjj
   

    for(let i =l;i>=0;i--){

         c = fun(c,arr[i],i,arr)
    }
  return c
}
