const isValid =(date)=>{

   if(typeof date ==='string')return false

    let b = new Date(date)
   if(b =='Invalid Date') return false   



  return true
}

const isAfter =(date ,date2)=>{
    if(isValid(date) == false) return false

    if(isValid(date2) == false) return false
    let date0  = new Date(date)
        let dates  = new Date(date2)

      
    if(date0.getTime()> dates.getTime()){
             return true
    }


 return false

}
const isBefore =(date,date2)=>{
 if(isValid(date) == false) return false

    if(isValid(date2) == false) return false
    let date0  = new Date(date)
        let dates  = new Date(date2)

      
    if(date0.getTime()< dates.getTime()){
             return true
    }


 return false



}
const isFuture =(date)=>{
 if(isValid(date) == false) return false

 let b =new Date(date)


    if(b.getTime()>  Date.now()){
             return true
    }


 return false

}
const isPast =(date)=>{
if(isValid(date) == false) return false

 let b =new Date(date)


    if(b.getTime()<  Date.now()){
             return true
    }


 return false

}

console.log(isAfter(123123, 526));
