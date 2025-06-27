const map =(arr ,fun)=>{
      let  l= []
    for(let i =0;i<arr.length;i++){

      const ll =fun(arr[i],i,arr)
          l.push(ll)
    }



  return l

}





const flatMap = (arr,fun)=>{

       let  l= []
    for(let i =0;i<arr.length;i++){
            const b = fun(arr[i],i,arr)

        if(Array.isArray(b)){
            

           l.push(...b)
        }else{


            l.push(fun(arr[i],i,arr))
        }

     
    }



  return l






}
function fun(arr){

    return [arr,arr]


}


console.log(flatMap([1,2,3],fun));
