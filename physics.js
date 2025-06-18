
const a ={
  f: 10,
  Δv: 100,}
 
const getAcceleration =(a)=>{
    if (!isNaN(a.f/a.m)){
        return (a.f/a.m)
    }else if (!isNaN(a.Δv/a.Δt)){
        return (a.Δv/a.Δt)
    }else if (!isNaN(((a.d)*2))/a.t**2){
        return (((a.d)*2)/a.t**2)
    }
  return "impossible"


}
console.log(getAcceleration(a));

