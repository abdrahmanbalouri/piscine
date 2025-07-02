const nutrients = { carbohydrates: 12, protein: 20, fat: 5 }

const filterValues =(nutrients,callback)=>{
    let k = new Map()
     for(const v in nutrients){

        if(callback(nutrients[v])){

         k.set(v ,nutrients[v])
        }
      
  


    }




  return Object.fromEntries(k)
}
const mapValues =(nutrient ,callback)=>{
    let j = new Map()

     for(const v in nutrients){

       let k = callback(nutrients[v]) 
     j.set(v,k)


    }

  return Object.fromEntries(j)

}

const reduceValues =(object,callback)=>{
     let c =0
    for(const v in object){

        c=callback(c,object[v])


    }


return c

}
console.log(reduceValues(nutrients, (acc, cr) => acc + cr))

// console.log(mapValues(nutrients, (v) => v+1))

// console.log(filterValues(nutrients, (nutrient) => nutrient <= 12))


