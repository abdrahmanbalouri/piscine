const deepCopy =(objet)=>{
    
   if(typeof objet !=='object'){

    return objet
   }


   let cop = Array.isArray(objet)?[]:{}

   for(let key in objet){
    if(objet[key] instanceof RegExp){

        return [...objet]
    }
    
    
    cop [key] = deepCopy(objet[key])
   }
   return cop
}




console.log(deepCopy([console.log, /hello/]));
;
  

