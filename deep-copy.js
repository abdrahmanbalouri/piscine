const deepCopy =(objet)=>{
   if(typeof objet !=='object'){

    return objet
   }


   let cop = Array.isArray(objet)?[]:{}

   for(let key in objet){
   
    cop [key] = deepCopy(objet[key])
   }
   return cop
}




// console.log(deepCopy({k:4,m:{n:7}}));

