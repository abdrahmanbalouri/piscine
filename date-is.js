const isValid =(date)=>{

   if(typeof date ==='string')return false

    let b = new Date(date)
   if(b =='Invalid Date') return false   



  return true
}

console.log(isValid('hgvhu'));
