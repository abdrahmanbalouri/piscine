const nutrients = { carbohydrates: 12, protein: 20, fat: 5 }

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

const reduceKeys =(object,callback,m='')=>{
     let c =m
    for(const v in object){

        c=callback(c,v)


    }
       if(c[0]==','){


        c = c.slice(2,)
       }

return c

}
console.log(reduceKeys(nutrients, (acc, cr) =>acc.concat(', ', cr)))




