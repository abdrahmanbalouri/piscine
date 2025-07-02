//  const  groceriesCart= {
//     tomato: 200,
//     vinegar: 80,
//     oil: 50,
//     onion: 220,
//     garlic: 22,
//   }
const filterValues =(nutrients,callback)=>{
    let k = new Map()
     for(const v in nutrients){

        if(callback(nutrients[v])){

         k.set(v ,nutrients[v])
        }
      
  


    }




  return Object.fromEntries(k)
}
const mapValues =(nutrients ,callback)=>{
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


// console.log( mapValues(
//       filterValues(groceriesCart, (v) => v >= 200),
//       (ele) => ele - 100,
//     ),)



