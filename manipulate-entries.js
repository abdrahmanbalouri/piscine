const filterEntries =(objet ,clabuk)=>{
  let c = {}
    for(const [k,v] of Object.entries(objet)){

        if(clabuk([k,v]))  c[k]=v
}
return c
}

const mapEntries =(objet,clabak)=>{
   let c = {}
    for(let [k,v] of Object.entries(objet)){

     [k,v] =   (clabak([k,v])) 

    c[k]=v
}
return c
}
const reduceEntries =(objet,clabak,m)=>{

    let c = m
    for(const [k,v] of Object.entries(objet)){

        c = clabak(c,[k,v])
    }

  return c

}


const totalCalories =(cart)=>{

    return reduceEntries(cart , (s,[k,v]) =>{

  const bb =   nutritionDB[k]  

  return s +  ((bb.calories * v)/100)


    },0)

}

const lowCarbs =(cart)=>{

    return filterEntries(cart,([k,v])=>{

    const b = nutritionDB[k]
    const low = ((b.carbs * v)/100)
    return low< 50
    })
}

const cartTotal =(cart)=>{

    return mapEntries(cart , ([k,v])=>{

        let c = nutritionDB[k]


         const f ={}
 for (const n in c){

    f[n] = ((c[n]*v)/100)


 }        


return [k,f]



    })


}


