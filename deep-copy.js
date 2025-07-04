const deepCopy =(objet)=>{
    
   if(typeof objet !=='object'){

    return objet
   }


   let cop = Array.isArray(objet)?[]:{}

   for(let key in objet){
    
    if(typeof objet[key] === 'function'){
        return [...objet]
    }
    cop [key] = deepCopy(objet[key])
   }
   return cop
}




console.log(deepCopy( [console.log, /hello/]));
let k = [console.log, /hello/]
  let b = deepCopy(k)

  b.push(4)
  console.log(k);
  

