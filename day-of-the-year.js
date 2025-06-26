const dayOfTheYear=(date)=>{

    let datef= new Date('0001-01-01')
    let c = date.getFullYear()

    datef.setFullYear(c-1)
    console.log(datef);
    

    

    let k = Math.floor(((date-datef)/(1000*60*60*24)))+1
    if (k==367){
        return 1
    }

    return k
       




}

console.log(  dayOfTheYear(new Date('0001-01-01')));
