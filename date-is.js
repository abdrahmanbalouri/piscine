const isValid =(date)=>{

   if(typeof date ==='string')return false

    let b = new Date(date)
   if(b =='Invalid Date') return false   



  return true
}

const isAfter =(date ,date2)=>{
    if(isValid(date) == false) return false

    if(isValid(date2) == false) return false

    if(date.getTime()>date2.getTime()){
             return true
    }


 return false

}
const isBefore =(date,date2)=>{

   if(isValid(date) == false) return false

    if(isValid(date2) == false) return false

    if(date.getTime()<date2.getTime()){
             return true
    }


 return false



}
const isFuture =(date)=>{
 if(isValid(date) == false) return false


    if(date.getTime()>  Date.now()){
             return true
    }


 return false

}
const isPast =(date)=>{
 if(isValid(date) == false) return false


    if(date.getTime()<  Date.now()){
             return true
    }


 return false

}