const pick =(objet,arr)=>{
       if(!Array.isArray(arr)){

        arr = arr.split(' ') 
       }
 let k = {}
     for(let i =0;i<arr.length;i++){
         

       if (objet.hasOwnProperty(arr[i])){

        k[arr[i]] = objet[arr[i]]


       }

     }

 return k

}
const omit =(objet,arr)=>{
      if(!Array.isArray(arr)){

        arr = arr.split(' ') 
       }
 let k = {}
    

  for(const v  in objet){

    if(objet.hasOwnProperty(v)){
        if (!arr.includes(v)){

        k[v]=objet[v]
    }
    }

    
  }


 return k




}


console.log(omit({__proto__:{'kk':5},'l':4,'k':8},['k','l','kk']));
