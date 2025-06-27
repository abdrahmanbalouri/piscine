const sunnySunday =(date)=>{

    let days = ['Monday','Tuesday','Wednesday','Thursday','Friday','Saturday']

    let day = new Date('0001-01-01')

    let kk = new Date(date)
    let res = (kk-day)/(1000*60*60*24)

    let index = res %6

    return days[index]





}

console.log(sunnySunday(new Date('2020-01-01')));
