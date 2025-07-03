const personnel = {
  lukeSkywalker: { id: 5,  pilotingScore: 98, shootingScore: 56, isForceUser: true  },
  sabineWren:    { id: 82, pilotingScore: 73, shootingScore: 99, isForceUser: false },
  zebOrellios:   { id: 22, pilotingScore: 20, shootingScore: 59, isForceUser: false },
  ezraBridger:   { id: 15, pilotingScore: 43, shootingScore: 67, isForceUser: true  },
  calebDume:     { id: 11, pilotingScore: 71, shootingScore: 85, isForceUser: true  },
}
const defaultCurry =(object)=>{
    return function(obje){
    return{...object,...obje}
    }

}
const mapCurry =(fn)=>{
   return function(objet ){
    let b = Object.entries(objet)
     let k = b.map(fn)
     return Object.fromEntries(k)      
    }
}

const reduceCurry = (fn)=>{
    

    return function(objet,acc){
     let j = Object.entries(objet)

     acc = j.reduce(fn,acc)

            return acc

          
    }

}
const filterCurry =(fn)=>{

    return function (object){

       let b = Object.entries(object)
       let c = b.filter(fn)
       return  Object.fromEntries(c)

    }


}
const reduceScore =(objet ,acc)=>{
  return reduceCurry((acc ,[_,v])=>{

 if( v.isForceUser){

    return acc + v.pilotingScore + v.shootingScore



 }else{

    return acc
 }


  })(objet,acc=0)



  

}
const filterForce =(objet)=>{
    return filterCurry(([_,v])=>{

      return   v.isForceUser && v.shootingScore>=80

        



    })(objet)


}

const mapAverage =(objet)=>{
    return mapCurry(([k,v])=>{
      const average =( v.shootingScore + v.pilotingScore)/2
      return [k,{...v,averageScore : average}]
    })(objet)


}
console.log((reduceScore(personnel)));
