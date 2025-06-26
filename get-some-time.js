const firstDayWeek = (week, year) => {

    let dat = new Date(Number(year) ,0,1)
    
    
   dat.setDate((week*7)-6)

   while(dat.getDate()!==1 && dat.getDay()!==1){


    dat.setDate(dat.getDate()-1)
   }
   
    let n = String(dat.getDate()).padStart(2,'0')
    let f = String(dat.getMonth()+1).padStart(2,'0')
    return n+'-'+f+'-'+year
   

}
console.log(firstDayWeek(2, '2017'));
