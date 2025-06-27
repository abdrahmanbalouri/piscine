 const filter =(arr,fun)=>{

    let k=[]
  for (let i =0;i<arr.length;i++){


         if(fun(arr[i],i,arr)){
           k.push(arr[i])
         }
    }
  return k
 }
 const reject =(arr,fun)=>{

 let k=[]
  for (let i =0;i<arr.length;i++){


         if(!fun(arr[i],i,arr)){
            console.log(55);
            
           k.push(arr[i])
         }
    }
  return k

 }

  const partition =(arr,fun)=>{

 let k=[]
 let c = []
  for (let i =0;i<arr.length;i++){


         if(!fun(arr[i],i,arr)){
            console.log(55);
            
           k.push(arr[i])
         }else{


            c.push(arr[i])
         }
    }
  return [c,k]

 }

