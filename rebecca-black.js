const isFriday = (day)=>{

    let k = day.getDay()

    if(k ==5)return true

    return false



}
const isWeekend =(day)=>{

let k = day.getDay()

    if(k ==0 || k ==6)return true

    return false


}
const isLeapYear =(day)=>{

let k = day.getFullYear()

    if((k % 4==0 && k%100!==0)||k%400==0)return true


    return false



}

const isLastDayOfMonth=(day)=>{

    let k = new Date(day)

    k.setDate(k.getDate()+1)

    if(k.getDate()==1)return true



    return false


}

