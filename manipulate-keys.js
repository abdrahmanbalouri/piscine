

const filterKeys =(nutrients,callback)=>{
    let k = new Map()
     for(const v in nutrients){

        if(callback(v)){

         k.set(v ,nutrients[v])
        }
      
  


    }




  return Object.fromEntries(k)
}
const mapKeys =(nutrients ,callback)=>{
    let j = new Map()

     for(const v in nutrients){

       let k = callback(v) 
     j.set(k,nutrients[v])


    }

  return Object.fromEntries(j)

}

const reduceKeys =(object,callback,m)=>{
    let k = false
    if(m == undefined ){
        m = ''
        k = true
    }
     let c =m
    for(const v in object){

        c=callback(c,v)


    }
       if(c[0]==','){


        c = c.slice(2,)
       }
       if(k){
        if(c[0]==':'){

            return c.slice(1)
        }


       }
     

return c

}






  
  



