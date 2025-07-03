
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
const reduceScore =(objet )=>{
  return reduceCurry((acc ,[_,v])=>{

 if( v.isForceUser){

    return acc + v.pilotingScore + v.shootingScore



 }else{

    return acc
 }


  })(objet,0)



  

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
console.log(mapAverage(personnel));
