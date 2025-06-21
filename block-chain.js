const blockChain =(data,prev ={ index: 0, hash: '0' })=>{

  return {
    data :data,
    prev: prev,
    index: prev.index+1,
    hash : hashCode(prev.index+1 + prev.hash+JSON.stringify(data) ),


     chain : function(newdata){
      return  blockChain(newdata ,this)
     }





  }


}


