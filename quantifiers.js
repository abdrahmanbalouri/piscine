const every =(arr,fun)=>{



    for(let i=0;i<arr.length;i++){

        if(!fun(arr[i],i,arr))return false


    }


   return true
}  

const some =(arr,fun)=>{


    for(let i=0;i<arr.length;i++){


        if(fun(arr[i],i,arr)){
            
            return true
        }
    }


   return false
}

const none =(arr,fun)=>{

    for(let i=0;i<arr.length;i++){

        if(fun(arr[i],i,arr))return false


    }


  return true
}