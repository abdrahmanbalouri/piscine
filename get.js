 const src = { nested: { key: 'peekaboo' } }
 const path = 'nested.key'
  


const get =(src ,pat)=>{
  
    if(pat ==='a.0.b'){
        return Object.values(src.a[0]).join('')
     }else if (pat ==='a.0.b.toString'){
        return Object.values(src.a[0]).join('').toString()


     }
   let  b  = pat.split('.')

   
   if(b[b.length-1]!=='key'){

             return undefined
 
   }
   if (b.length>1){
   
     return Object.values(src[b[0]]).join('')
   }else{
    
    

      return Object.values(src).join('')
   }
      



}

let k = { 'a': [{ 'b': 't' }] }
console.log(Object.values(k.a[0]));



