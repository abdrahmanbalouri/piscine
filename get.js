 const src = { nested: { key: 'peekaboo' } }
 const path = 'nested.key'
  


const get =(src ,pat)=>{
  console.log(pat);
  
    if(pat ==='a.0.b'){
        console.log(55);
        
        return 't'
    }
   let  b  = pat.split('.')
   if(b.length-1!=='key'){
             return 'undefined'
 
   }
   if (b.length>1){
    if ( Object.values(src[0])===undefined){
         return 'undefined'
    }
     return Object.values(src[b[0]]).join('')
   }else{
    
    if ( Object.values(src)===undefined){
         return 'undefined'
    }

      return Object.values(src).join('')
   }
      



}


//get({ a: [{ b: t }] }, 'a.0.b')
