function dayOfTheYear(date){
    let year=date.getUTCFullYear()


    year=year.toString().padStart(4,"0")


    let newYear=new Date(`${year}-01-01`)

    
    let day=Math.floor((date-newYear)/(1000*60*60*24))+1
    
    return day
}

console.log(dayOfTheYear(new Date('0001-01-01')));