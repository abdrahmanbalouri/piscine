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

const reduceCurry = (acc=0,fn)=>{
    let b= acc

    return function(objet){
     let j = Object.entries(objet)

     let  b =  j.reduce(b,fn)

            return acc

          
    }

}
