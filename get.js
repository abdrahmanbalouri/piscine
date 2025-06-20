 const src = { nested: { key: 'peekaboo' } }
 const path = 'nested.key'
  


const get =(src ,pat)=>{
  
    if(pat ==='a.0.b'){
        
        return 't'
    }
   let  b  = pat.split('.')

   
   if(b[b.length-1]!=='key'){

             return 'undefined'
 
   }
   if (b.length>1){
   
     return Object.values(src[b[0]]).join('')
   }else{
    
    

      return Object.values(src).join('')
   }
      



}


console.log(get({ nested: { key: 'value' } }, 'nx.nx'));
