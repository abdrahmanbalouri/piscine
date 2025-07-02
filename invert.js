const invert =(objet)=>{

    let i = {}
    //let cc 

    for(const kk in objet){

         if(objet.hasOwnProperty(kk)){
                   
             i[objet[kk]]=kk        

        }

 
        
        
      
    }



  return i
}

console.log(invert({ f: 5, __proto__: { d: 6 } }));
