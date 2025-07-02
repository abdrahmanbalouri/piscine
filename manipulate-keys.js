
const nutritionDB = {
  tomato:  { calories: 18,  protein: 0.9,   carbs: 3.9,   sugar: 2.6, fiber: 1.2, fat: 0.2   },
  vinegar: { calories: 20,  protein: 0.04,  carbs: 0.6,   sugar: 0.4, fiber: 0,   fat: 0     },
  oil:     { calories: 48,  protein: 0,     carbs: 0,     sugar: 123, fiber: 0,   fat: 151   },
  onion:   { calories: 0,   protein: 1,     carbs: 9,     sugar: 0,   fiber: 0,   fat: 0     },
  garlic:  { calories: 149, protein: 6.4,   carbs: 33,    sugar: 1,   fiber: 2.1, fat: 0.5   },
  paprika: { calories: 282, protein: 14.14, carbs: 53.99, sugar: 1,   fiber: 0,   fat: 12.89 },
  sugar:   { calories: 387, protein: 0,     carbs: 100,   sugar: 100, fiber: 0,   fat: 0     },
  orange:  { calories: 49,  protein: 0.9,   carbs: 13,    sugar: 12,  fiber: 0.2, fat: 0.1   },
}

 const cart= {
    vinegar: 80,
    sugar: 100,
    oil: 50,
    onion: 200,
    garlic: 22,
    paprika: 4,
  }
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

const join = (acc, cr) => (acc == null ? cr : `${acc}:${cr}`)

console.log(          reduceKeys(cart, (acc, cr) => (acc += (cr.length <= 4) & 1), 0),



);
  
  



